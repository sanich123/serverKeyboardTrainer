import mongoose from "mongoose";
import express from 'express';
import router from "../router/router.js";
import cors from 'cors';
import { DB_URL, PORT } from "./const.js";
import fileUpload from 'express-fileupload';

mongoose.set("strictQuery", true);


const app = express();
app.use(cors());
app.use(fileUpload({}))
app.use(express.json());
app.use('/', router);

export async function startApp() {
  try {
    await mongoose.connect(DB_URL);
    app.listen(PORT, () =>
      console.log(`The server is running on the ${PORT} port`)
    );
  } catch (e) {
    console.log(e);
  }
}
