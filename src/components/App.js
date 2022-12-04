import Header from "./Header";
import React from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import { useState } from "react";

function App() {
  const [todo, setTodo] = useState([
    {
      id: 1,
      title: "first todo",
      status: true,
    },
    {
      id: 2,
      title: "second todo",
      status: true,
    },
    {
      id: 3,
      title: "third todo",
      status: true,
    },
  ]);

  return (
    <div className="root">
      <div className="page">
        <Header />
        <AddTodo todo={todo} setTodo={setTodo} />
        <TodoList todo={todo} setTodo={setTodo} />
      </div>
    </div>
  );
}

export default App;
