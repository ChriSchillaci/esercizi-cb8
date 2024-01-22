import { useEffect, useRef, useState, useContext } from "react";
import { setTodoDataContext } from "../../App";
import { RiDeleteBin6Line } from "react-icons/ri";
import styles from "./index.module.scss";

const TodoItem = ({ todos }) => {
  const { id, todo, completed } = todos;
  const [isCompleted, setIsCompleted] = useState(completed);
  const [isTaskDel, setIsTaskDel] = useState(false);
  const [idTask, setIdTask] = useState("");

  const setTodoData = useContext(setTodoDataContext);

  const timerId = useRef(null);

  useEffect(() => {
    timerId.current = setTimeout(() => {
      setTodoData((prev) => prev.filter((list) => list.id !== idTask));
    }, 750);

    return () => {
      clearTimeout(timerId.current);
    };
  }, [isTaskDel]);

  const taskStatus = () => {
    setIsCompleted((prev) => !prev);
  };

  const onDeleteTask = (id) => {
    setIsTaskDel(true);
    setIdTask(id);
  };

  return (
    <li
      id={id}
      className={`${styles.TodoItem} ${
        isTaskDel ? styles["task-deleted"] : ""
      }`}
    >
      <p>
        <span
          className={`${styles.task} ${
            isCompleted ? styles["task-completed"] : ""
          }`}
        >
          {todo}
        </span>
      </p>
      <div className={styles.btns}>
        <button
          className={styles.btn}
          type="button"
          onClick={() => onDeleteTask(id)}
        >
          <RiDeleteBin6Line className={styles["bin-icon"]} />
        </button>
        <input
          className={styles.checkbox}
          type="checkbox"
          defaultChecked={isCompleted}
          onChange={taskStatus}
        />
      </div>
    </li>
  );
};

export default TodoItem;
