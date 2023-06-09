import express  from "express";
import { RegisterUser, registerAdmin,resetPassword} from "../controller/userAuth";
import { userLogin } from "../controller/userAuth";



export default  (router: express.Router) => {
    router.post('/user/auth', RegisterUser)
    router.post('/admin/auth', registerAdmin)
    router.post('/user/login',userLogin)
    router.post('/passwordReset/',resetPassword )

}