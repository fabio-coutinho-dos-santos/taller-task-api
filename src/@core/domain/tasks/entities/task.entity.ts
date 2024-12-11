import {
  validateSync,
  IsNotEmpty,
  IsBoolean,
  IsNumber,
  IsOptional,
} from 'class-validator';

export class Task {
  @IsNotEmpty()
  private _title: string;

  @IsBoolean()
  @IsOptional()
  private _completed: boolean;

  constructor(title: string, completed: boolean) {
    this._title = title;
    this._completed = completed ? completed : false;

    this.validate();
  }

  private validate() {
    const errors = validateSync(this);
    if (errors.length > 0) {
      throw new Error(
        `Validation failed: ${errors.map((err) => Object.values(err.constraints || {}).join(', ')).join('; ')}`,
      );
    }
  }

  get title(): string {
    return this._title;
  }

  get completed(): boolean {
    return this._completed;
  }

  set title(title: string) {
    this._title = title;
    this.validate();
  }

  set completed(completed: boolean) {
    this._completed = completed;
    this.validate();
  }
}
