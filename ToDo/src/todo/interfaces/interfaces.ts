
export interface Todo {
    id: string;
    description: string;
    completed: boolean
}

export interface TodoState {
    todos: Todo[];
    todoCount: number;
    completed: number;
    pending: number
}
