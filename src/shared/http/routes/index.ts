import productsRoutes from '@modules/products/routes/products.routes';
import authsRouter from '@modules/users/routes/auth.routes';
import usersRouter from '@modules/users/routes/users.routes';
import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) => {
  return res.json({ message: 'Hello Dev!' });
});

routes.use('/auth', authsRouter);
routes.use('/users', usersRouter);
routes.use('/products', productsRoutes);

export default routes;
