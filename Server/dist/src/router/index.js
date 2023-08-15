"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userAuth_1 = __importDefault(require("./userAuth"));
const users_1 = __importDefault(require("./users"));
const posts_1 = __importDefault(require("../controller/posts"));
const postRoute_1 = __importDefault(require("./postRoute"));
const router = express_1.default.Router();
exports.default = () => {
    (0, userAuth_1.default)(router);
    (0, users_1.default)(router);
    (0, posts_1.default)(router);
    (0, postRoute_1.default)(router);
    return router;
};
//# sourceMappingURL=index.js.map