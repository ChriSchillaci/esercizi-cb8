import { useState, useEffect, createContext } from "react";
import TodoList from "./components/todoList";
import styles from "./index.module.scss";

export const setTodoDataContext = createContext(null);

function App() {
  const [todoData, setTodoData] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/todos?limit=4")
      .then((res) => res.json())
      .then((data) => setTodoData(data.todos));
  }, []);

  const newItem = {
    id: Math.floor(Math.random() * 100000),
    todo: inputValue,
    completed: false,
  };

  const onChangeInput = (e) => {
    setInputValue(e.target.value);
  };

  const addItem = (e) => {
    e.preventDefault();

    setTodoData((prev) => [...prev, newItem]);
    setInputValue("");
  };

  return (
    <div className={styles.TodoApp}>
      <h1 className={styles.title}>TodoList App</h1>
      <form type="submit" onSubmit={addItem}>
        <input
          className={styles["add-task"]}
          type="text"
          value={inputValue}
          onChange={onChangeInput}
          placeholder="Add a task..."
        />
        <button className={styles["add-btn"]} type="button" onClick={addItem}>
          Add
        </button>
      </form>
      <main>
        <setTodoDataContext.Provider value={setTodoData}>
          {todoData.length ? <TodoList todoData={todoData} /> : ""}
        </setTodoDataContext.Provider>
      </main>
    </div>
  );
}

export default App;
