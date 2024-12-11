import { MinLength } from '@nestjs/class-validator';
import { IsBoolean, IsOptional, IsString, Min } from 'class-validator';

export class UpdateTaskDto {
  @IsString()
  @IsOptional()
  @MinLength(1)
  title: string;

  @IsBoolean()
  @IsOptional()
  completed: boolean;
}
