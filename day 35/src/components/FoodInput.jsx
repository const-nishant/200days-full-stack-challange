import styles from "./FoodInput.module.css";

const FoodInput = ({ hanldeOnKeyDown }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Enter food items here"
        className={styles.foodInput}
        onKeyDown={hanldeOnKeyDown}
      />
    </>
  );
};

export default FoodInput;
