import AppError from '@shared/http/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Product from '../typeorm/entities/Product';
import { ProductsRepository } from '../typeorm/repositories/ProductsRepository';

class ShowProductService {
  public async execute({
    id,
  }: ICreateProductIDTO): Promise<Product | undefined> {
    const productsRepository = getCustomRepository(ProductsRepository);

    const product = await productsRepository.findOne(id);

    if (!product) {
      throw new AppError('Not found  product', 404);
    }

    return product;
  }
}

export default ShowProductService;
