import React from "react";

export default function TodoList({ todos, onDeleteClick }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li>
          {todo}
          <button onClick={() => onDeleteClick(todo)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
