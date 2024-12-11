import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TaskModule } from './presentation/task/task.module';
import { DatabaseModule } from './infra/database/typeorm/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TaskModule,
    DatabaseModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
