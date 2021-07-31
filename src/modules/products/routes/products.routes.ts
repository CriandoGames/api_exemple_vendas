import { Router } from 'express';
import ProductsController from '../controllers/ProductsController';
import { celebrate, Joi, Segments } from 'celebrate';
import { create, delet, list, update } from './validations/products.validation';

const productsRoutes = Router();
const productsController = new ProductsController();

productsRoutes.get('/', productsController.index);

productsRoutes.get('/:id', list, productsController.show);

productsRoutes.post('/', create, productsController.create);

productsRoutes.put('/:id', update, productsController.update);

productsRoutes.delete('/:id', delet, productsController.delete);

export default productsRoutes;
