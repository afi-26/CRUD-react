import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";

const app = express();
mongoose.connect("mongodb://localhost:27017/fullstack_db");

const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

app.use(cors());
app.use(express.json());
app.use(UserRoute);

app.listen(5000, () => console.log("Server up dan running"));
