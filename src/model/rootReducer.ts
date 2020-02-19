import { combineReducers } from "redux";
import authReducer from "./slices/auth";
import todosReducer from "./slices/todos";

const rootReducer = combineReducers({
  auth: authReducer,
  todos: todosReducer
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
