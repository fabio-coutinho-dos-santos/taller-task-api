import { Inject, Injectable } from '@nestjs/common';
import { ITaskRepository } from '../repositories/task.repository.inteface';
import { CreateTaskDto } from 'src/presentation/task/dtos/create-task.dto';
import { Task } from '../entities/task.entity';
import { TaskMapper } from 'src/infra/database/typeorm/tasks/task.mapper';

@Injectable()
export class CreateTaskUseCase {
  @Inject('ITaskRepository')
  private readonly taskRepository: ITaskRepository;

  async execute(input: CreateTaskDto) {
    const { title, completed } = input;
    const task = new Task(title, completed);
    return await this.taskRepository.create(TaskMapper.toPersistence(task));
  }
}
