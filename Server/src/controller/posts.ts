import express from "express";
const multer = require("multer");
import { createPost } from "../models/postSchema";
import { getUserByRegNumber} from "../models/authSchema";


const multerStorage = multer.diskStorage({
    destination: (req: express.Request, file: any, cb: any) => {
      cb(null, "public");
    },
    filename: (req: express.Request, file: any, cb: any) => {
      const ext = file.mimetype.split("/")[1];
      cb(null, `files/admin-${file.fieldname}-${Date.now()}.${ext}`);
    },
  });

  const multerFilter = (req: express.Request, file: any, cb: any) => {
    if (file.mimetype.split("/")[1] === "pdf") {
      cb(null, true);
    } else {
      cb(new Error("Not a PDF File!!"), false);
    }
  };

  const upload = multer({
    storage: multerStorage,
    fileFilter: multerFilter,
  });

export const createNewPost = async (
  req: express.Request,
  res: express.Response
) => {
  const { regNumber, faculty, passStatus, file } = req.body;
  let result;

  if (!regNumber || !faculty) {
    result = {
      error: true,
      message: "Please enter a valid Input",
    };
    res.send(result);
  }

  const user = await getUserByRegNumber(regNumber);
  if (!user) {
    result = {
      error: true,
      message: "No student Id match",
    };

    res.send(result);
  }

  try {
    const post = await createPost({
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
  } catch (err) {
    res.send(err);
  }
};

export default (router: express.Router) => {

    router.post('/post', upload.single("file"),createNewPost)

}
