import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TodosSlice = {
  [id: string]: Todo;
};
export type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

const initialState: TodosSlice = {};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<Todo>) {
      state[action.payload.id] = action.payload;
    },
    removeTodo(state, { payload: id }: PayloadAction<string>) {
      delete state[id];
    },
    toggleTodo(state, { payload: id }: PayloadAction<string>) {
      const todo = state[id];
      if (todo) {
        todo.completed = !todo.completed;
      }
    }
  }
});
export const { addTodo, removeTodo, toggleTodo } = todosSlice.actions;
export default todosSlice.reducer;

export function createTodo(
  text: string = "",
  id: string = `${Date.now()}`
): Todo {
  return {
    id,
    text,
    completed: false
  };
}
