const express = require("express");
const PORT = process.env.PORT || 5555;
const mongoose = require("mongoose");
const authRouter = require("./authRouter");
const app = express();

app.use(express.json());
app.use("/auth", authRouter);

const start = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://toudr2378:aboba@cluster0.ab4woec.mongodb.net/auth_role?retryWrites=true&w=majority`
    );
    app.listen(PORT, () => {
      console.log("server started on ", PORT);
    });
  } catch (e) {
    console.log(e);
  }
};

start();
