import { Request, Response } from 'express';
import AuthenticateUserService from '../services/AuthenticateUserServices';

export default class AuthenticateController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const auth = new AuthenticateUserService();

    const user = await auth.execute({
      email,
      password,
    });

    return response.json(user);
  }
}
