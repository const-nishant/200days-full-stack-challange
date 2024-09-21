import { MdDeleteOutline } from "react-icons/md";
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

function TodoItem({ todoName, todoDate }) {
  const { deleteItem } = useContext(TodoItemsContext);

  return (
    <div className="container">
      <div className="row np-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger np-btn"
            onClick={(e) => deleteItem(todoName)}
          >
            <MdDeleteOutline />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
