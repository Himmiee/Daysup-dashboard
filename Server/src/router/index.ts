import express from "express";
import auth from "./userAuth";
import users from "./users";
import posts from "../controller/posts";
import others from "./postRoute"

const router = express.Router();

export default (): express.Router => {
  auth(router);
  users(router);
  posts(router);
  others(router);
  
  return router;
};
