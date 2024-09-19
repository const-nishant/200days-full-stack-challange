import { useState } from "react";
import Item from "./Item";

function FoodItem({ Items }) {
  // const handlebyButton = ({ event }) => {
  // console.log("event :", event);
  // alert(foodItem);
  // };

  let [activeItems, setActiveItems] = useState([]);

  let onBuyButton = (foodItem, event) => {
    let newItems = [...activeItems, foodItem];
    setActiveItems(newItems);
  };

  return (
    <>
      <ul className="list-group">
        {Items.map((foodItem) => (
          <Item
            foodItem={foodItem}
            key={foodItem}
            bought={activeItems.includes(foodItem)}
            handlebyButton={(event) => onBuyButton(foodItem, event)}
          />
        ))}
      </ul>
    </>
  );
}

export default FoodItem;
