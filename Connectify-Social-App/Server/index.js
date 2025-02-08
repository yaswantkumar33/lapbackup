import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import authRoutes from "./routes/AuthRoutes.js";
// configuring dotenv
dotenv.config();
// starting express as app
const app = express();
const port = process.env.PORT || 3003;
const database_url = process.env.DATABASE_URL;

// using cross middleware
app.use(
  cors({
    origin: [process.env.ORIGIN],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
  })
);
// intitialize cookie
app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRoutes);
// server listiner
const server = app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
// mongoose db connecting
mongoose
  .connect(database_url)
  .then(() => console.log("db connection sucessfull"))
  .catch((err) => console.log(err.message));
