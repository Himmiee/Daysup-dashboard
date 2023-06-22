import express from "express";
import auth from "./userAuth";
import users from "./users";

const router = express.Router();

export default (): express.Router => {
  auth(router);
  users(router);
  
  return router;
};
