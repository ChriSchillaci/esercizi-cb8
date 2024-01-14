import "./index.scss";
import TodoItem from "../todoItem";

const TodoList = ({ todoData }) => {
  return (
    <ul className="TodoList">
      {todoData.map((todos) => (
        <TodoItem todos={todos} key={todos.id} />
      ))}
    </ul>
  );
};

export default TodoList;
