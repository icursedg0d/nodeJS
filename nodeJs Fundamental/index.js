const PORT = process.env.PORT || 5555;
const Application = require("./framework/Application");
const userRouter = require("./src/user-router");
const jsonParser = require("./framework/parseJson");
const parseUrl = require("./framework/parseUrl");
const mongoose = require("mongoose");

const app = new Application();

app.use(jsonParser);
app.use(parseUrl("http://localhost:5000"));

app.addRouter(userRouter);

const start = async () => {
  await mongoose.connect(
    "mongodb+srv://toudr2378:<123>@cluster0.ocaktmg.mongodb.net/"
  );
  app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
};

start();
