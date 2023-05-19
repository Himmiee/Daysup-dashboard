import express from "express";
import auth from "./userAuth";

const router = express.Router();

export default (): express.Router => {
  auth(router);
  
  return router;
};
