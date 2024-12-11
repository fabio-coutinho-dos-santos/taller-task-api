import {
  Inject,
  Injectable,
  UnprocessableEntityException,
} from '@nestjs/common';
import { ITaskRepository } from '../repositories/task.repository.inteface';
import { TaskNotFoundException } from '../exceptions/task.exceptions';

@Injectable()
export class DeleteTaskUseCase {
  @Inject('ITaskRepository')
  private readonly taskRepository: ITaskRepository;

  async execute(id: number) {
    const task = await this.taskRepository.findById(id);

    if (!task) {
      throw new TaskNotFoundException();
    }

    return await this.taskRepository.delete(id);
  }
}
