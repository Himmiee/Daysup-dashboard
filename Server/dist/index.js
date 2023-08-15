"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const compression_1 = __importDefault(require("compression"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const router_1 = __importDefault(require("./src/router"));
// import { emailTemplate } from "helpers/template";
const app = (0, express_1.default)();
dotenv_1.default.config();
const port = process.env.PORT || "3050";
const URI = process.env.DB_CONNECT;
mongoose_1.default.connect(URI);
app.use((0, compression_1.default)());
app.use((0, cookie_parser_1.default)());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)({
    // origin: 'http://localhost:3000',
    origin: "*",
}));
// emailTemplate()
const server = http_1.default.createServer(app);
server.listen(port, () => {
    console.log("app is listening on port " + port);
});
app.use("/", (0, router_1.default)());
//# sourceMappingURL=index.js.map