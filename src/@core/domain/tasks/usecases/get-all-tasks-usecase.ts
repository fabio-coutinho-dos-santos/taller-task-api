import { Inject, Injectable } from '@nestjs/common';
import { ITaskRepository } from '../repositories/task.repository.inteface';

@Injectable()
export class GetAllTasksUseCase {
  @Inject('ITaskRepository')
  private readonly taskRepository: ITaskRepository;

  async execute() {
    return await this.taskRepository.findAll();
  }
}
