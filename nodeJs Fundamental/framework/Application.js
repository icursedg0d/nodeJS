const http = require("http");
const EventEmmiter = require("events");

module.exports = class Application {
  constructor() {
    this.emmiter = new EventEmmiter();
    this.server = this._createServer();
    this.middlewares = [];
  }

  listen(port, callback) {
    this.server.listen(port, callback);
  }

  use(middleware) {
    this.middlewares.push(middleware);
  }

  addRouter(router) {
    Object.keys(router.endpoint).forEach((path) => {
      const endpoint = router.endpoint[path];
      Object.keys(endpoint).forEach((method) => {
        const handler = endpoint[method];
        this.emmiter.on(this._getRouterMask(path, method), (req, res) => {
          handler(req, res);
        });
      });
    });
  }

  _createServer() {
    return http.createServer((req, res) => {
      let body = "";
      req.on("data", (chunk) => {
        body += chunk;
      });
      req.on("end", () => {
        if (body) {
          req.body = JSON.parse(body);
        }
        this.middlewares.forEach((middleware) => middleware(req, res));
        const emmited = this.emmiter.emit(
          this._getRouterMask(req.pathname, req.method),
          req,
          res
        );
        if (!emmited) {
          res.end();
        }
      });
    });
  }

  _getRouterMask(path, method) {
    return `[${path}]:[${method}]`;
  }
};
