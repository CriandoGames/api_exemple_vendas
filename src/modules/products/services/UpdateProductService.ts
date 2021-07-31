import AppError from '@shared/http/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Product from '../typeorm/entities/Product';
import { ProductsRepository } from '../typeorm/repositories/ProductsRepository';

class UpdateProductService {
  public async execute({
    id,
    name,
    price,
    quantity,
  }: ICreateProductIDTO): Promise<Product> {
    const productsRepository = getCustomRepository(ProductsRepository);

    const product = await productsRepository.findOne(id);

    if (!product) {
      throw new AppError('Not found  product', 404);
    }

    const productExists = await productsRepository.findByName(name);

    if (productExists) {
      throw new AppError('There is already one product with name', 401);
    }

    product.name = name;
    product.price = price;
    product.quantity = quantity;

    await productsRepository.save(product);

    return product;
  }
}

export default UpdateProductService;
