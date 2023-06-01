import { MiddlewareConsumer, Module, NestModule, RequestMapping, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthService } from './auth.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, AuthService],
})
// export class AppModule {}

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthService)
      .forRoutes({ path: '/api/*', method: RequestMethod.ALL});
  }
}
