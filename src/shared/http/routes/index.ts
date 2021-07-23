import productsRoutes from '@modules/products/routes/products.routes';
import { Router } from 'express';

const routes = Router();




routes.get('/', (req, res) => {
  return res.json({ message: 'Hello Dev!' });
});


routes.use('/products', productsRoutes);


export default routes;
