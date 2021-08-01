import AppError from '@shared/http/errors/AppError';
import { getCustomRepository } from 'typeorm';
import User from '../typeorm/entities/User';
import UsersRepository from '../typeorm/repositories/UsersRepository';

class ListProductService {
  public async execute(): Promise<User[]> {
    const userRepository = getCustomRepository(UsersRepository);

    const product = await userRepository.find();

    if (!product) {
      throw new AppError('Not found  products ', 404);
    }

    return product;
  }
}

export default ListProductService;
