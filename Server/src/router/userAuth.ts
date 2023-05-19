import express  from "express";
import { Register } from "../controller/userAuth";


export default  (router: express.Router) => {
    router.post('/user/auth', Register)
}