import { Router } from 'express';
import { SurveysController } from './controllers/SurveysController';
import { UserController } from './controllers/UserController';

const router = Router();

const userController = new UserController();
const surveysController = new SurveysController();

router.get("/", (_request, response) => {
    return response.status(200).json({message: "NLW-04 - NodeJs Server"})
})

router.post("/users", userController.create);
router.post("/surveys", surveysController.create);
router.get("/surveys", surveysController.show);

export { router };