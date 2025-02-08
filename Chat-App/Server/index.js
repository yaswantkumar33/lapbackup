import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";

dotenv.config();
const app = express();
const port = process.env.PORT || 3003;
const database_url = process.env.DATABASE_URL;
app.use(
  cors({
    origin: [process.env.ORIGIN],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());
// server listiner
const server = app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
mongoose
  .connect(database_url)
  .then(() => console.log("db connection sucessfull"))
  .catch((err) => console.log(err.message));
