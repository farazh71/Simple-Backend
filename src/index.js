// require('dotenv').config({path:"/.env"})
import dotevn from "dotenv";
import connectDB from "./db/index.js";

dotevn.config({
  path: "/.env",
});

connectDB();
/*
import express from "express";
const app = express();
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("Error: ", error);
      throw error;
    });
    app.listen(process.env.PORT, () => {
      console.log(`The app is listening at port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("Error: ", error);
    throw error;
  }
})()

*/
