import { Router } from "express";
import { register, getUsers, updateUser, login, logout, profile} from "../controllers/user.controller.js";
import { authRequired } from "../middleware/validatorToken.js";
import { validatorMiddleware } from "../middleware/validatorMiddleware.js";
import { registerSchema, loginSchema } from "../schema/auth.schema.js";

const userRouter = Router();

userRouter.post('/register', validatorMiddleware(registerSchema), register)
userRouter.post('/login', validatorMiddleware(loginSchema), login)
userRouter.post('/logout', logout)

userRouter.get('/getUsers', getUsers)
userRouter.get('/profile', authRequired, profile)

userRouter.put('/updateUser/:id', updateUser)

export default userRouter