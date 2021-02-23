import { Router } from 'express';
import { UserController } from './controllers/UserController';

const router = Router();

const userController = new UserController();

router.get("/", (_request, response) => {
    return response.status(200).json({message: "NLW-04 - NodeJs Server"})
})

router.post("/users", userController.create);

export { router };