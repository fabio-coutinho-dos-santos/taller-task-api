import { HttpException, HttpStatus } from '@nestjs/common';

export class TaskNotFoundException extends HttpException {
  constructor() {
    super(
      {
        statusCode: HttpStatus.NOT_FOUND,
        message: `Task not found`,
        error: 'Not Found',
      },
      HttpStatus.NOT_FOUND,
    );
  }
}
