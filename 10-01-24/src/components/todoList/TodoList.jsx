import "./index.scss";
import TodoItem from "../todoItem";


const TodoList = ({ todoData, onDeleteList }) => {
  return (
    <div className="TodoList">
      {todoData.map(todo => <TodoItem todo={todo} onDeleteList={onDeleteList} key={todo.id}/>)}
    </div>
  );
};

export default TodoList;
