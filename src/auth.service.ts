import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';


@Injectable()
export class AuthService implements NestMiddleware {
  private _token: string

  constructor() {}

  async use(req: Request, res: Response, next: NextFunction) {
    // logger.trace('[AuthService] headers:', req.headers);

    const authorization = req.headers?.authorization || req.headers?.Authorization as string;  
    if (authorization) {
      this._token = authorization.split(' ')[1];                
  
      // logger.trace("[AuthMiddleware]: found token:", this._token);
      try {
        next()
      } 
      catch {
        console.error("[AuthMiddleware] Token not valid!");
        return res.status(401).send('Unauthorized');
      }        
    } 
    else {
      console.error("[AuthMiddleware] Authorization is null.");
      return res.status(401).send('Unauthorized');
    }
  }

  get token() {
    return this._token
  }
}
