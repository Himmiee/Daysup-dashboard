import express from "express";
import { verifyAdmin, verifyToken } from "../middleware/authMiddleware";
import { resetPassword } from "../controller/userAuth";
import { leaveNote, announcement } from "../controller/messages";



export default  (router: express.Router) => {
    router.post('/news/',verifyAdmin,announcement) 
    router.post('/leave/',verifyToken, leaveNote)

}
