import {
  Inject,
  Injectable,
  UnprocessableEntityException,
} from '@nestjs/common';
import { ITaskRepository } from '../repositories/task.repository.inteface';
import { UpdateTaskDto } from 'src/presentation/task/dtos/update-task.dto';
import { TaskNotFoundException } from '../exceptions/task.exceptions';

@Injectable()
export class UpdateTaskUseCase {
  @Inject('ITaskRepository')
  private readonly taskRepository: ITaskRepository;

  async execute(id: number, input: UpdateTaskDto) {
    const { title, completed } = input;

    if (!title && !completed) {
      throw new UnprocessableEntityException(
        'Title or completed must be provided',
      );
    }

    const task = await this.taskRepository.findById(id);
    if (!task) {
      throw new TaskNotFoundException();
    }

    await this.taskRepository.update(id, input);

    return await this.taskRepository.findById(id);
  }
}
