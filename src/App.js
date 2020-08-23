import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import Header from "./Header";

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <>
      <Header />
      <TodoForm onClick={addTodo} />
      <TodoList onDeleteClick={deleteTodo} todos={todos} />
    </>
  );

  function addTodo(newTodo) {
    setTodos([...todos, newTodo]);
  }

  function deleteTodo(currentTodo) {
    setTodos(todos.filter((todo) => currentTodo !== todo));
  }
}

export default App;
