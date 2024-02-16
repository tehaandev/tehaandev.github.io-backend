import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SnsModule } from './sns/sns.module';
import { MiddlewareConsumer } from '@nestjs/common';
import { CorsMiddleware } from './middleware/cors.middleware';

@Module({
  imports: [ConfigModule.forRoot(), SnsModule],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(CorsMiddleware)
      .forRoutes('*');
  }
}
