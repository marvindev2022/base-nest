import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from '@infra/http/services/user.service';
import { UserDatabaseModule } from '@infra/database/prisma/repositories/prisma-users-database.module';

@Module({
  imports: [UserDatabaseModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply()
      .exclude(
        { path: '', method: RequestMethod.POST },
        { path: '', method: RequestMethod.PUT },
        { path: '', method: RequestMethod.PATCH },
        { path: '', method: RequestMethod.DELETE },
      )
      .forRoutes('*');
  }
}
