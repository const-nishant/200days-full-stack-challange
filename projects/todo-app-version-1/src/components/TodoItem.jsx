function TodoItem({ todoName, todoDate }) {
  // let todoName = "Buy milk";
  // let todoDate = "12/12/2022";

  return (
    <div className="container">
      <div className="row np-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger np-btn">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
