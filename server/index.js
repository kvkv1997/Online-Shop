require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const logger = require("morgan");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger("dev"));
const port = 8000;

const route = require("./routes/main");
//Route init
route(app);

//connect DB
const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.DB_CONNECT_STRING}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log("Connect To DB Success");
  } catch (error) {
    console.log("Connect To DB Unsuccess");
  }
};
connectDB();

app.get("/", (req, res) => {
  res.send("Hello World !!!");
});

app.use(express.json());

app.listen(port, () => {
  console.log(`Your app is running on port ${port}`);
});
