import React from "react";
import { useSelector } from "react-redux";
import { addTodo } from "../model/slices/todos";
import { store } from "../model/store";
import { RootState } from "../model/reducers";

export const ListPage = () => {
  const [value, setValue] = React.useState("");

  const todos = useSelector<RootState>(state => state.todos);
  console.log(todos);
  return (
    <div>
      <h1>Todos</h1>
      <input value={value} onChange={e => setValue(e.target.value)} />
      <button onClick={() => store.dispatch(addTodo(value))}>add</button>
    </div>
  );
};
