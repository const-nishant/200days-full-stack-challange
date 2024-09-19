import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import { useState } from "react";
import "./App.css";

function App() {
  const InitialTodoItems = [
    // {
    //   name: "Buy milk",
    //   duedate: "12/12/2022",
    // },
    // {
    //   name: "Buy eggs",
    //   duedate: "12/12/2022",
    // },
    // {
    //   name: "Buy bread",
    //   duedate: "12/12/2022",
    // },
  ];

  const [todoItems, setTodoItems] = useState(InitialTodoItems);

  const handleNewItem = (itemName, itemDueDate) => {
    // console.log("onNewItem adedd :", itemName, itemDueDate);
    const newTodoItems = [
      ...todoItems,
      { name: itemName, duedate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
    console.log("item deleted :", todoItemName);
  };

  return (
    <center className="todo-container">
      <AppName />
      <div className="items-container">
        <AddTodo onNewItem={handleNewItem} />
        {todoItems.length === 0 && <WelcomeMessage />}
        <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem} />
      </div>
    </center>
  );
}

export default App;
