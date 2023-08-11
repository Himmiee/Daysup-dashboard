"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNewPost = void 0;
const multer = require("multer");
const postSchema_1 = require("../models/postSchema");
const authSchema_1 = require("../models/authSchema");
const multerStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public");
    },
    filename: (req, file, cb) => {
        const ext = file.mimetype.split("/")[1];
        cb(null, `files/admin-${file.fieldname}-${Date.now()}.${ext}`);
    },
});
const multerFilter = (req, file, cb) => {
    if (file.mimetype.split("/")[1] === "pdf") {
        cb(null, true);
    }
    else {
        cb(new Error("Not a PDF File!!"), false);
    }
};
const upload = multer({
    storage: multerStorage,
    fileFilter: multerFilter,
});
const createNewPost = async (req, res) => {
    const { regNumber, faculty, passStatus, file } = req.body;
    let result;
    if (!regNumber || !faculty) {
        result = {
            error: true,
            message: "Please enter a valid Input",
        };
        res.send(result);
    }
    const user = await (0, authSchema_1.getUserByRegNumber)(regNumber);
    if (!user) {
        result = {
            error: true,
            message: "No student Id match",
        };
        res.send(result);
    }
    try {
        const post = await (0, postSchema_1.createPost)({
            regNumber,
            faculty,
            passStatus,
            file: req.body.filename,
        });
        res.status(200).json({
            status: "success",
            message: "File created successfully!!",
        });
        return res.status(200).json(post).end();
    }
    catch (err) {
        res.send(err);
    }
};
exports.createNewPost = createNewPost;
exports.default = (router) => {
    router.post('/post', upload.single("file"), exports.createNewPost);
};
//# sourceMappingURL=posts.js.map