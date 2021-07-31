import AppError from '@shared/http/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { ProductsRepository } from '../typeorm/repositories/ProductsRepository';

class DeleteProductService {
  public async execute({ id }: ICreateProductIDTO): Promise<void> {
    const productsRepository = getCustomRepository(ProductsRepository);

    const product = await productsRepository.findOne(id);

    if (!product) {
      throw new AppError('Not found  product', 404);
    }

    await productsRepository.remove(product);
  }
}

export default DeleteProductService;
