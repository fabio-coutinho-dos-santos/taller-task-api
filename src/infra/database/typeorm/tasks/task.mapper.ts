import { Task } from 'src/@core/domain/tasks/entities/task.entity';
import { TaskSchema } from './task.schema';

export class TaskMapper {
  static toPersistence(task: Task): Partial<TaskSchema> {
    return {
      title: task.title,
      completed: task.completed,
    };
  }
}
