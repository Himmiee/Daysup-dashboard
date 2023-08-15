"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePostById = exports.createPost = exports.PostModel = exports.postSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.postSchema = new mongoose_1.default.Schema({
    regNumber: { type: String, required: true },
    faculty: { type: String, required: true },
    status: { type: Boolean, required: false, default: false },
    file: { type: String, required: false },
    createdAt: { type: String, default: Date.now.toString() },
    updatedAt: { type: String, default: Date.now.toString() },
});
exports.postSchema.pre('save', function (next) {
    const now = new Date().toISOString();
    this.updatedAt = now;
    if (!this.createdAt) {
        this.createdAt = now;
    }
    next();
});
exports.PostModel = mongoose_1.default.model("PostSchema", exports.postSchema);
const createPost = (values) => {
    new exports.PostModel(values).save().then((post) => post.toObject());
};
exports.createPost = createPost;
const updatePostById = (regNumber, values) => {
    exports.PostModel.findByIdAndUpdate({ regNumber, values });
};
exports.updatePostById = updatePostById;
//# sourceMappingURL=postSchema.js.map