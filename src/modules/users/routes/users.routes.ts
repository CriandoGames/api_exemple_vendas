import { Router } from 'express';
import UsersController from '../controller/usersController';
import { create } from '../controller/validations/users.validations';

const usersRouter = Router();
const usersController = new UsersController();

usersRouter.get('/', usersController.index);

usersRouter.post('/', create, usersController.create);

export default usersRouter;
