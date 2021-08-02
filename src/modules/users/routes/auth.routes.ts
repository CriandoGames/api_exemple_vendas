import { Router } from 'express';
import AuthenticateController from '../controller/authenticateController';
import { auth } from '../controller/validations/auth.validations';

const authsRouter = Router();
const usersController = new AuthenticateController();

authsRouter.post('/', auth, usersController.create);

export default authsRouter;
