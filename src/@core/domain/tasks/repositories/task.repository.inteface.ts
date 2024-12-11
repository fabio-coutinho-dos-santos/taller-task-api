import { IRepository } from 'src/@core/@shared/repository.interface';
import { TaskSchema } from 'src/infra/database/typeorm/tasks/task.schema';

export interface ITaskRepository extends IRepository<TaskSchema> {}
