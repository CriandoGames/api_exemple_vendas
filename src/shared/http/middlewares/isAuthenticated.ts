import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import AuthConfig from '@config/auth';
import AppError from '../errors/AppError';

export default function isAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError('JWT Token is missing', 401);
  }

  //bearer token <- token
  const [, token] = authHeader.split(' ');

  try {
    const decodeToken = verify(token, AuthConfig.jwt.secret);

    return next();
  } catch {
    throw new AppError('Invalid JTW yoken', 401);
  }
}
