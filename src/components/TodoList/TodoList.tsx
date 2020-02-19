import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../model/rootReducer";
import { removeTodo, toggleTodo, TodosSlice } from "../../model/slices/todos";

export const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector<RootState, TodosSlice>(state => state.todos);
  return (
    <div>
      {Object.values(todos).map(todo => {
        return (
          <div className="flex" key={todo.id}>
            <label className="flex-1">
              <input
                type="checkbox"
                onChange={() => dispatch(toggleTodo(todo.id))}
              />
              {todo.text}
              <button style={{marginLeft: 30}} onClick={() => dispatch(removeTodo(todo.id))}>remove</button>
            </label>
          </div>
        );
      })}
    </div>
  );
};
