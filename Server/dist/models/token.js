"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenModel = exports.tokenSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.tokenSchema = new mongoose_1.default.Schema({
    regNumber: { type: String, required: true },
    token: { type: String, required: true },
    createdAt: { type: Date, default: Date.now, expires: 3600 },
});
exports.tokenModel = mongoose_1.default.model("Token", exports.tokenSchema);
//# sourceMappingURL=token.js.map