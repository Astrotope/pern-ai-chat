import express from "express";
import authRoutes from "./route/auth.route.js";
import messageRoutes from "./route/message.route.js";

import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json()); // for parsing  application/json

app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)

app.listen(5010, () => {
    console.log("Server started on port 5010");
});

