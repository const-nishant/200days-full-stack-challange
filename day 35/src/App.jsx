import "bootstrap/dist/css/bootstrap.min.css";
import FoodItem from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";
import "./App.css";

function App() {
  // let foodItems = [
  //   "Green vegetables",
  //   "Milk",
  //   "Eggs",
  //   "Bread",
  //   "Cheese",
  //   "Meat",
  // ];

  // let textStateArr = useState("Food Items added to cart");
  // let textToShow = textStateArr[0];
  // let setTextState = textStateArr[1];

  let [foodItems, setFoodItems] = useState([]);

  const OnKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
      console.log("newFoodItem :", newFoodItem);
    }
  };

  return (
    <>
      <Container>
        <h1 className="food-heading">Healty food</h1>
        <FoodInput hanldeOnKeyDown={OnKeyDown} />
        <ErrorMessage Items={foodItems} />
        <FoodItem Items={foodItems} />
      </Container>

    </>
  );
}

export default App;
