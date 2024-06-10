import { Router } from "express";
import { register, getUsers, updateUser, login} from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.post('/register', register)
userRouter.post('/login', login)
userRouter.get('/getUsers', getUsers)
userRouter.put('/updateUser/:id', updateUser)

export default userRouter