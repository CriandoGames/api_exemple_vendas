import productsRoutes from '@modules/products/routes/products.routes';
import usersRouter from '@modules/users/routes/users.routes';
import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) => {
  return res.json({ message: 'Hello Dev!' });
});

routes.use('/users', usersRouter);
routes.use('/products', productsRoutes);

export default routes;
