import "./index.scss";
import { RiDeleteBin6Line } from "react-icons/ri";

const TodoItem = ({ todo, onDeleteList }) => {
  return (
    <div id={todo.id} className="TodoItem">
      <p>{todo.todo}</p>
      <button type="button" onClick={() => onDeleteList(todo.id)}>
      <RiDeleteBin6Line className="bin-icon" />
      </button>
    </div>
  );
};

export default TodoItem;
