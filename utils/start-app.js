const mongoose = require("mongoose");
const express = require("express");
const fileUpload = require("express-fileupload");
const router = require("../router/router.js");
const cors = require("cors");
const { DB_URL, PORT } = require("./const.js");

mongoose.set("strictQuery", true);

const app = express();
app.use(cors());
app.use(fileUpload());
app.use(express.static(`static`));
app.use(express.json());
app.use("/", router);

async function startApp() {
  try {
    await mongoose.connect(DB_URL);
    app.listen(PORT, () =>
      console.log(`The server is running on the ${PORT} port`)
    );
  } catch (e) {
    console.log(e);
  }
}

module.exports = startApp;
