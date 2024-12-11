import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { GetAllTasksUseCase } from 'src/@core/domain/tasks/usecases/get-all-tasks-usecase';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreateTaskUseCase } from 'src/@core/domain/tasks/usecases/create-task-usecase';
import { TaskSchema } from 'src/infra/database/typeorm/tasks/task.schema';
import { TaskRepository } from 'src/infra/database/typeorm/tasks/task.repository';
import { DeleteTaskUseCase } from 'src/@core/domain/tasks/usecases/delete-task-usecase';
import { UpdateTaskUseCase } from 'src/@core/domain/tasks/usecases/update-task-usecase';

@Module({
  imports: [TypeOrmModule.forFeature([TaskSchema])],
  controllers: [TaskController],
  providers: [
    {
      provide: 'ITaskRepository',
      useClass: TaskRepository,
    },
    GetAllTasksUseCase,
    CreateTaskUseCase,
    DeleteTaskUseCase,
    UpdateTaskUseCase,
  ],
})
export class TaskModule {}
