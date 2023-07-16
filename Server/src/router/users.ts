import express from 'express';
import { getAllUsers , deleteUser} from '../controller/users';
import { isAuthenticated , verifyToken, verifyAdmin} from '../middleware/authMiddleware';

export default (router: express.Router) => {
    router.get('/users', getAllUsers)
    router.delete('/delete/:id',verifyAdmin,deleteUser)

}