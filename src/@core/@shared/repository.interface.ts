import { DeleteOptions, UpdateOptions } from 'typeorm';

export interface IRepository<T> {
  create(data: Partial<T>): Promise<T>;
  update(id: number, data: Partial<T>): Promise<UpdateOptions>;
  delete(id: number): Promise<DeleteOptions>;
  findAll(): Promise<T[]>;
  findById(id: number): Promise<T>;
}
