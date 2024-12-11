import { DataSource, type DataSourceOptions } from 'typeorm';
import 'dotenv/config';
import { TaskSchema } from './tasks/task.schema';

export function ormconfig(): DataSourceOptions {
  return {
    type: 'sqlite',
    database: ':memory:',
    entities: [TaskSchema],
    synchronize: true,
    logging: false,
  };
}

const datasource = new DataSource(ormconfig());
export default datasource;
