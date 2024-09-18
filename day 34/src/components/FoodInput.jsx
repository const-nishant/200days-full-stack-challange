import styles from "./FoodInput.module.css";

const FoodInput = () => {
  const hanldeOnChanged = (e) => {
    console.log(e.target.value);
  };

  return (
    <>
      <input
        onChange={hanldeOnChanged}
        type="text"
        placeholder="Enter food items here"
        className={styles.foodInput}
      />
    </>
  );
};

export default FoodInput;
