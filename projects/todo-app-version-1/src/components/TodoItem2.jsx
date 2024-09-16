function TodoItem2() {
  let todoName = "Go to gym";
  let todoDate = "12/12/2022";

  return (
    <div class="container ">
      <div class="row np-row">
        <div class="col-6">{todoName}</div>
        <div class="col-4">{todoDate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger np-btn">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem2;
