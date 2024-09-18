import styles from "./Item.module.css";

const Item = ({ foodItem, handlebyButton }) => {
 

  return (
    <li className={`${styles["np-item"]} list-group-item`}>
      <span className={styles["np-span"]}>{foodItem}</span>
      <button
        className={`${styles["np-btn"]} btn btn-info`}
        onClick={(event) => handlebyButton()}
      >
        Add
      </button>
    </li>
  );
};

export default Item;
