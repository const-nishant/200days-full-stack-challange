import { useRef } from "react";
import { MdAddComment } from "react-icons/md";

function AddTodo({ onNewItem }) {
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const hanldeAddButtonClick = (e) => {
    e.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    onNewItem(todoName, dueDate);
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
  };

  return (
    <div className="container ">
      <form action="" className="row np-row" onSubmit={hanldeAddButtonClick}>
        <div className="col-6">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter Todo Here"
          />
        </div>
        <div className="col-4">
          <input type="date" ref={dueDateElement} />
        </div>
        <div className="col-2">
          <button className="btn btn-success np-btn">
            <MdAddComment />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
