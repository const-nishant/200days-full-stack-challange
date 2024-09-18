import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";

function App() {
  const todoItems = [
    {
      name: "Buy milk",
      duedate: "12/12/2022",
    },
    {
      name: "Buy eggs",
      duedate: "12/12/2022",
    },
    {
      name: "Buy bread",
      duedate: "12/12/2022",
    },
  ];

  return (
    <center className="todo-container">
      <AppName />
      <div className="items-container">
        <AddTodo />
        <TodoItems todoItems={todoItems} />
      </div>
    </center>
  );
}

export default App;
