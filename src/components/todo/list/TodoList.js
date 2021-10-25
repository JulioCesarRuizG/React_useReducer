import React from "react";
import { TodoListItem } from "./TodoListItem";

export const TodoList = ({ todos, handleToggleTodo, handleDeleteTodo }) => {
  const handleDeleteTodo2 = (deleteTodo) => {
    handleDeleteTodo(deleteTodo);
  };

  const handleToggleTodo2 = (toggleTodo) => {
    handleToggleTodo(toggleTodo);
  };

  return (
    <ul className="list-group list-group-flush">
      {todos.map((todo, i) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          index={i}
          handleToggleTodo={handleToggleTodo2}
          handleDeleteTodo={handleDeleteTodo2}
        />
      ))}
    </ul>
  );
};
