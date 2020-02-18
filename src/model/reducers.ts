import { combineReducers } from "redux";
import { reducer as todosReducer } from "./slices/todos";

const rootReducer = combineReducers({
  todos: todosReducer
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>