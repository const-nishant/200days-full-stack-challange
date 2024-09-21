import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import TodoItemsContextProvider from "./store/todo-items-store";

function App() {
  // const InitialTodoItems = [];

  // const [todoItems, setTodoItems] = useState(InitialTodoItems);

  return (
    <TodoItemsContextProvider>
      <center className="todo-container">
        <AppName />
        <div className="items-container">
          <AddTodo />
          <WelcomeMessage />
          <TodoItems />
        </div>
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;
