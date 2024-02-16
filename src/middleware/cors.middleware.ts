import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class CorsMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    res.header('Access-Control-Allow-Origin', '*'); // Replace with your frontend origin
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Add relevant methods
    res.header('Access-Control-Allow-Headers', '*'); // Replace with specific allowed headers if needed
    next();
  }
}