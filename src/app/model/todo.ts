export enum TodoStatus {
  completed = 'completed',
  inProgress = 'in-progress'
}

export interface Todo {
    title: string;
    completed: boolean;
    status: TodoStatus;
}
