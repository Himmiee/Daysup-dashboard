import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import router from "./router"

const app = express();

dotenv.config()

const port = process.env.PORT || "3050";

const URI = process.env.DB_CONNECT
mongoose.connect(URI)

app.use(compression())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


const server = http.createServer(app);

server.listen(port, () => {
    console.log("app is listening on port " + port);
});

app.use("/", router())
