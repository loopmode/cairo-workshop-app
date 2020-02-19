import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

const initialState: Todo[] = [];

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<Todo>) {
      const { id, text } = action.payload;
      state.push({ id, text, completed: false });
    },
    removeTodo(state, action: PayloadAction<string>) {
      state.splice(
        state.findIndex(todo => todo.id === action.payload),
        1
      );
    },
    toggleTodo(state, action: PayloadAction<string>) {
      const todo = state.find(todo => todo.id === action.payload);
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
