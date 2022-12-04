import React, { useState } from "react";

//import uuid from 'react-uuid';
function AddTodo({ todo, setTodo }) {
  const [value, setValue] = useState("");

  // change input
  function handleValueChange(e) {
    setValue(e.target.value);
  }
  function saveNewTodo(title) {
    setTodo(
      todo.concat([
        {
          title: value,
          id: Date.now(),
          status: true,
        },
      ])
    );
    setValue("");
  }

  return (
    <div className="add">
      <input
        placeholder="Добавьте задачу"
        value={value}
        onChange={handleValueChange}
        className="add__input"
      />
      <button onClick={saveNewTodo} className="add__btn">
        Сохранить
      </button>
    </div>
  );
}
export default AddTodo;
