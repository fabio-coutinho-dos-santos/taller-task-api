import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Inject,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateTaskUseCase } from 'src/@core/domain/tasks/usecases/create-task-usecase';
import { GetAllTasksUseCase } from 'src/@core/domain/tasks/usecases/get-all-tasks-usecase';
import { CreateTaskDto } from './dtos/create-task.dto';
import { UpdateTaskDto } from './dtos/update-task.dto';
import { UpdateTaskUseCase } from 'src/@core/domain/tasks/usecases/update-task-usecase';
import { DeleteTaskUseCase } from 'src/@core/domain/tasks/usecases/delete-task-usecase';

@Controller('tasks')
export class TaskController {
  @Inject(GetAllTasksUseCase)
  private readonly getAllTasksUseCase: GetAllTasksUseCase;

  @Inject(CreateTaskUseCase)
  private readonly createTaskUseCase: CreateTaskUseCase;

  @Inject(UpdateTaskUseCase)
  private readonly updateTaskUseCase: UpdateTaskUseCase;

  @Inject(DeleteTaskUseCase)
  private readonly deleteTaskUseCase: DeleteTaskUseCase;

  @Get('')
  async getAll() {
    return await this.getAllTasksUseCase.execute();
  }

  @Post('')
  async create(@Body() input: CreateTaskDto) {
    return await this.createTaskUseCase.execute(input);
  }

  @Put(':id')
  async updateTask(@Param('id') id: number, @Body() input: UpdateTaskDto) {
    return await this.updateTaskUseCase.execute(id, input);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteTask(@Param('id') id: number) {
    await this.deleteTaskUseCase.execute(id);
  }
}
