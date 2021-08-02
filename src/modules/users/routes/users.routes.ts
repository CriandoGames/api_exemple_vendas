import isAuthenticated from '@shared/http/middlewares/isAuthenticated';
import { Router } from 'express';
import UsersController from '../controller/UsersController';
import { create } from '../controller/validations/users.validations';

const usersRouter = Router();
const usersController = new UsersController();

usersRouter.get('/', isAuthenticated, usersController.index);

usersRouter.post('/', create, usersController.create);

export default usersRouter;
