import { Router } from "express";
import { register, getUsers, updateUser, login, logout, profile} from "../controllers/user.controller.js";
import { authRequired } from "../middleware/validatorToken.js";

const userRouter = Router();

userRouter.post('/register', register)
userRouter.post('/login', login)
userRouter.post('/logout', logout)

userRouter.get('/getUsers', getUsers)
userRouter.get('/profile', authRequired, profile)

userRouter.put('/updateUser/:id', updateUser)

export default userRouter