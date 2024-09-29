import { Module } from '@nestjs/common';
import { UserDatabaseModule } from './prisma/repositories/prisma-users-database.module';

@Module({
  imports: [
    UserDatabaseModule,
  ],
})
export class DatabaseModule {}
