import TodoItem from "../todoItem";
import styles from "./index.module.scss";

const TodoList = ({ todoData }) => {
  return (
    <ul className={styles.TodoList}>
      {todoData.map((todos) => (
        <TodoItem todos={todos} key={todos.id} />
      ))}
    </ul>
  );
};

export default TodoList;
