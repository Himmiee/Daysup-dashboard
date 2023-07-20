import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import router from "./router";
// import { emailTemplate } from "helpers/template";

const app = express();

dotenv.config();

const port = process.env.PORT || "3050";

const URI = process.env.DB_CONNECT;
mongoose.connect(URI);

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    // origin: 'http://localhost:3000',
    origin: "*",
  })
);

// emailTemplate()
const server = http.createServer(app);

server.listen(port, () => {
  console.log("app is listening on port " + port);
});

app.use("/", router());
