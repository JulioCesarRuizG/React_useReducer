import React /*, { useState }*/ from "react";
import "./tachado.css";

export const TodoListItem = ({
  todo,
  index,
  handleToggleTodo,
  handleDeleteTodo,
}) => {
  const handleDelete = () => {
    const deleteTodo = {
      id: todo.id,
    };

    handleDeleteTodo(deleteTodo);
  };
  //const [val, setState] = useState(todo);

  const handleToggle = () => {
    var ToggleTodo = {};
    if (todo.done === true) {
      ToggleTodo = {
        id: todo.id,
        done: false,
      };
    } else {
      ToggleTodo = {
        id: todo.id,
        done: true,
      };
    }
    handleToggleTodo(ToggleTodo);
  };

  return (
    <li key={todo.id} className="list-group-item">
      <p className={todo.done + ""} onClick={handleToggle}>
        {index + 1}. {todo.desc}
      </p>
      <button className="btn btn-danger" onClick={handleDelete}>
        Borrar
      </button>
    </li>
  );
};
