import { toBeInTheDocument } from "@testing-library/jest-dom/dist/matchers";
import { React, useState } from "react";
function TodoList({ todo, setTodo }) {
  const [edit, setEdit] = useState(null);
  const [value, setValue] = useState("");
  const [filter, setFilter] = useState(todo);
  // именяем
  function handleValueChange(e) {
    setValue(e.target.value);
  }
  // удаляем задачу
  function deleteTodo(id) {
    let newTodo = [...todo].filter((item) => item.id != id);
    setTodo(newTodo);
  }

  // изменяем статус задачи на противоположный
  function statusTodo(id) {
    let newTodo = [...todo].filter((item) => {
      if (item.id == id) {
        item.status = !item.status;
      }
      return item;
    });
    setTodo(newTodo);
  }

  return (
    <div className="todos">
      {todo.map((item) => (
        <div key={item.id} className="todos__container">
          <div className={!item.status ? "todos__done" : "todos__title"}>
            {item.title}
          </div>

          <div>
            <button
              className="todos__btn todos__btn_type_delete"
              onClick={() => deleteTodo(item.id)}
            >
              Удалить
            </button>
            <button
              className="todos__btn todos__btn_type_done"
              onClick={() => statusTodo(item.id)}
            >
              Выполнить
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
export default TodoList;
