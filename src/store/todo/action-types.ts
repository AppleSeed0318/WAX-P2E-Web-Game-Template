export interface ITodo {
  name: string;
  id: number;
  createdAt: Date;
  updatedAt: Date;
  isCompleted: boolean;
  expiresAt?: Date;
}

export interface TodoState {
  todos: ITodo[];
}

export const ADD_TODO = "ADD_TODO";
export const EDIT_TODO = "EDIT_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const TOGGLE_COMPLETE = "TOGGLE_COMPLETE";

interface AddTodo {
  type: typeof ADD_TODO;
  payload: {
    name: string;
    expiresAt?: Date;
  };
}

interface EditTodo {
  type: typeof EDIT_TODO;
  payload: {
    id: number;
    name?: string;
    expiresAt?: Date;
    isCompleted?: boolean;
  };
}

interface RemoveTodo {
  type: typeof REMOVE_TODO;
  payload: {
    id: number;
  };
}

interface ToggleComplete {
  type: typeof TOGGLE_COMPLETE;
  payload: {
    id: number;
  };
}

export type TodoActionTypes = AddTodo | EditTodo | RemoveTodo | ToggleComplete;
