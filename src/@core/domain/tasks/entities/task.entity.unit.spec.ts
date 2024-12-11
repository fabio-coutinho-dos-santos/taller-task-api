import { Task } from './task.entity';

describe('Task', () => {
  it('should create a valid Task', () => {
    const task = new Task('Learn TypeScript', false);
    expect(task.title).toBe('Learn TypeScript');
    expect(task.completed).toBe(false);
  });

  it('should throw an error if title is not provided', () => {
    expect(() => new Task('', false)).toThrow();
  });

  it('should throw an error if completed is not a boolean', () => {
    expect(
      () => new Task('Learn TypeScript', 'not-a-boolean' as any),
    ).toThrow();
  });

  it('should handle multiple validation errors', () => {
    expect(() => new Task('', 'not-a-boolean' as any)).toThrow();
  });
});
