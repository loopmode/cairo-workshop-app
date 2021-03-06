import React from "react";
import { TodoList } from "../components/TodoList/TodoList";
import { AddTodoForm } from "../components/TodoList/AddTodoForm";

export const TodoListPage = () => {
  return (
    <div>
      <h1>Todos</h1>
      <AddTodoForm />
      <TodoList />
    </div>
  );
};
