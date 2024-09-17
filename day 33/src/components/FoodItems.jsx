import Item from "./Item";

function FoodItem({ Items }) {
  // let emptyMessage = foodItems.length === 0 ? <p>i'm still hungry</p> : null;
  // let emptyMessage = foodItems.length === 0 && <p>i'm still hungry</p>;

  return (
    <>
      <ul className="list-group">
        {Items.map((foodItem) => (
          <Item foodItem={foodItem} key={foodItem} />
        ))}
      </ul>
    </>
  );
}

export default FoodItem;
