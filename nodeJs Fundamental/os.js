const os = require("os");
const cluster = require("cluster");

if (cluster.isMaster) {
  for (let i = 0; i < os.cpus().length - 2; i++) {
    cluster.fork();
  }
  cluster.on("exit", (worker) => {
    console.log(`worker s pid= ${worker.process.pid} dead`);
    cluster.fork();
  });
} else {
  console.log(`Worker s pid =  ${process.pid}`);
  setInterval(() => {
    console.log(`Worker s pid =  ${process.pid} workaet`);
  }, 5000);
}
