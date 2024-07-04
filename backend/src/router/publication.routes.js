import { Router } from "express";
import { authRequired } from "../middleware/validatorToken.js";
import { createdPublication, deletePublication, getMyPublications, getPublications, likePublication } from "../controllers/publications.controller.js";

const publicationsRouter = Router()

publicationsRouter.get('/getpublications', authRequired, getPublications)

publicationsRouter.get('/getMyPublications', authRequired, getMyPublications)

publicationsRouter.post('/createPublication', authRequired, createdPublication)

publicationsRouter.post('/like/:id', authRequired, likePublication)

publicationsRouter.delete('/deletePublication/:id', authRequired, deletePublication)

export default publicationsRouter