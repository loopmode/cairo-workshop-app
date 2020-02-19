import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../model/rootReducer";
import { Todo, removeTodo, toggleTodo } from "../../model/slices/todos";

export const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector<RootState, Todo[]>(state => state.todos);
  return (
    <div>
      {todos.map(todo => {
        return (
          <div className="flex" key={todo.id}>
            <label className="flex-1">
              <input
                type="checkbox"
                onChange={() => dispatch(toggleTodo(todo.id))}
              />
              {todo.text}
            </label>
            <button onClick={() => dispatch(removeTodo(todo.id))}>x</button>
          </div>
        );
      })}
    </div>
  );
};
