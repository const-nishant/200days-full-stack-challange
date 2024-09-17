import "bootstrap/dist/css/bootstrap.min.css";
import FoodItem from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import "./App.css";

function App() {
  let foodItems = [
    "Green vegetables",
    "Milk",
    "Eggs",
    "Bread",
    "Cheese",
    "Meat",
  ];

  return (
    <>
      <h1 className="food-heading">Healty food</h1>
      <ErrorMessage Items={foodItems} />
      <FoodItem Items={foodItems} />
    </>
  );
}

export default App;
