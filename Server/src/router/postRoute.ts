import express from "express";
import { verifyAdmin, verifyToken } from "../middleware/authMiddleware";
import { resetPassword } from "../controller/userAuth";
import {
  leaveNote,
  announcement,
  UpdateLeave,
  viewLeave,
  viewAllLeave,
  deleteLeave,
} from "../controller/messages";

export default (router: express.Router) => {
  router.post("/news/", verifyAdmin, announcement);
  router.post("/leave/", leaveNote);
  router.get("/leave/:email",viewLeave);
  router.get("/leaveList/",viewAllLeave);
  router.put("/updateLeaveStatus/:id", UpdateLeave);
  router.delete("/deleteLeave/:id", verifyAdmin, deleteLeave);
};
