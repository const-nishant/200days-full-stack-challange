import "bootstrap/dist/css/bootstrap.min.css";
import FoodItem from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
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
      <Container>
        <h1 className="food-heading">Healty food</h1>
        <ErrorMessage Items={foodItems} />
        <FoodInput />
        <FoodItem Items={foodItems} />
      </Container>
      {/* 
      <Container>
        <p>Above is a list of healthy food that you can eat</p>
      </Container> */}
    </>
  );
}

export default App;
