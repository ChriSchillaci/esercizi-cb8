import { useState, useEffect } from "react";
import "./App.scss";
import TodoList from "./components/todoList";

function App() {
  const [todoData, setTodoData] = useState([]);
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    fetch("https://dummyjson.com/todos?limit=4")
      .then((res) => res.json())
      .then((data) => setTodoData(data.todos));
  }, []);

  const newItem = {
    id: Math.floor(Math.random() * 100000),
    todo: inputValue,
  }

  const onChangeInput = (e) => {
    setInputValue(e.target.value)
  }

  const addItem = (e) => {
    e.preventDefault()

    setTodoData((prev) => [...prev, newItem])
    setInputValue('')
  }

  const onDeleteList = (id) => {
    const filterList = todoData.filter(list => list.id !== id)
    setTodoData(filterList)
  }

  return (
    <div className="App">
      <h1>TodoList App</h1>
      <form type="submit" onSubmit={addItem}>
      <input type="text" value={inputValue} onChange={onChangeInput} placeholder="Add an Item..."/>
      </form>
      <main>
        {todoData.length ? (<TodoList todoData={todoData} onDeleteList={onDeleteList} />) : '' }
      </main>
    </div>
  );
}

export default App;
