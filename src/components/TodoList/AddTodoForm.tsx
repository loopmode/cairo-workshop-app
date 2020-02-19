import React, { FormEvent } from "react";
import { createTodo, addTodo } from "../../model/slices/todos";
import store from "../../model/store";

export const AddTodoForm = () => {
  const [value, setValue] = React.useState("");

  const handleAddTodo = (event: FormEvent | MouseEvent) => {
    event.preventDefault();

    const todo = createTodo(value);
    store.dispatch(addTodo(todo));

    setValue("");
  };

  return (
    <form onSubmit={handleAddTodo}>
      <input value={value} onChange={e => setValue(e.target.value)} />
      <button onClick={handleAddTodo}>add</button>
    </form>
  );
};
