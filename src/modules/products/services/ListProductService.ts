import AppError from "@shared/http/errors/AppError";
import { getCustomRepository } from "typeorm";
import Product from "../typeorm/entities/Product";
import { ProductsRepository } from "../typeorm/repositories/ProductsRepository";

class ListProductService {

  public async execute(): Promise<Product[]> {
    const productsRepository =  getCustomRepository(ProductsRepository);

    const product = await productsRepository.find();

    if (!product) {
      throw new AppError('Not found  products ', 404)
    }

    return product;

  }

}

export default ListProductService;
