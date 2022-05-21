import express, { json } from "express";
import "express-async-errors";
import cors from "cors";
import router from "./routers/index.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(cors());
app.use(json());
app.use(router);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
})