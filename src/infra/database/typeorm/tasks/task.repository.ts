import { ITaskRepository } from 'src/@core/domain/tasks/repositories/task.repository.inteface';
import { TaskSchema } from './task.schema';
import { DeleteOptions, Repository, UpdateOptions } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

export class TaskRepository implements ITaskRepository {
  constructor(
    @InjectRepository(TaskSchema)
    private readonly repository: Repository<TaskSchema>,
  ) {}

  async create(data: TaskSchema): Promise<TaskSchema> {
    return await this.repository.save(data);
  }

  async delete(id: number): Promise<DeleteOptions> {
    return await this.repository.delete(id);
  }

  async findAll(): Promise<TaskSchema[]> {
    return await this.repository.find();
  }

  async update(id: number, data: Partial<TaskSchema>): Promise<UpdateOptions> {
    return await this.repository.update(id, data);
  }

  async findById(id: number): Promise<TaskSchema> {
    return await this.repository.findOneBy({ id });
  }
}
