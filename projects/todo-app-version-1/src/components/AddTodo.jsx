import { useState } from "react";
import { MdAddComment } from "react-icons/md";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleNameChange = (e) => {
    // console.log(e.target.value);
    setTodoName(e.target.value);clearImmediate
  };
  const handleDateChange = (e) => {
    // console.log(e.target.value);
    setDueDate(e.target.value);
  };

  const hanldeAddButtonClick = () => {
    onNewItem(todoName, dueDate);
    setTodoName("");
    setDueDate("");
  };

  return (
    <div className="container ">
      <div className="row np-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            onChange={handleNameChange}
            value={todoName}
          />
        </div>
        <div className="col-4">
          <input type="date" onChange={handleDateChange} value={dueDate} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success np-btn"
            onClick={() => hanldeAddButtonClick()}
          >
            <MdAddComment />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
