export interface Todo {
    id: string;
    title: string;
    completed: boolean;
}
export type TodoId = Todo['id']; 
export type TodoTitle = Todo['title']; 
export type TodoCompleted = Todo['completed'];

export type listOfTodos = Todo[];

export type FilterValue = typeof TODO_FILTERS[keyof typeof TODO_FILTERS]