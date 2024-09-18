import Item from "./Item";

function FoodItem({ Items }) {
  // const handlebyButton = ({ event }) => {
  // console.log("event :", event);
  // alert(foodItem);
  // };

  return (
    <>
      <ul className="list-group">
        {Items.map((foodItem) => (
          <Item
            foodItem={foodItem}
            key={foodItem}
            handlebyButton={() => console.log(" added to cart", foodItem)}
          />
        ))}
      </ul>
    </>
  );
}

export default FoodItem;
