import React, { FormEvent } from "react";
import { createTodo, addTodo } from "../../model/slices/todos";
import { useDispatch } from "react-redux";

export const AddTodoForm = () => {
  const [value, setValue] = React.useState("");
  const dispatch = useDispatch();

  const handleAddTodo = (event: FormEvent | MouseEvent) => {
    event.preventDefault();

    const todo = createTodo(value);

    dispatch(addTodo(todo));

    setValue("");
  };

  return (
    <form onSubmit={handleAddTodo}>
      <input value={value} onChange={e => setValue(e.target.value)} />
      <button onClick={handleAddTodo}>add</button>
    </form>
  );
};
