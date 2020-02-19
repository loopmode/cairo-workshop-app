import { combineReducers } from "redux";
import authReducer from "./slices/auth";
import todosReducer from "./slices/todos";
import { createNamedWrapperReducer } from "./utils";
import { counter } from "./reducers/counter";

const rootReducer = combineReducers({
  auth: authReducer,
  todos: todosReducer,
  counterA: createNamedWrapperReducer(counter, "counterA"),
  counterB: createNamedWrapperReducer(counter, "counterB"),
  counterC: createNamedWrapperReducer(counter, "counterC")
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
