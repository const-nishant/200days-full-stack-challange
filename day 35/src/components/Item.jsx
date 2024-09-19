import styles from "./Item.module.css";

const Item = ({ foodItem, bought, handlebyButton }) => {
  return (
    <li
      className={`${styles["np-item"]} list-group-item ${bought && "active"}`}
    >
      <span className={styles["np-span"]}>{foodItem}</span>
      <button
        className={`${styles["np-btn"]} btn btn-info`}
        onClick={(event) => handlebyButton()}
      >
        buy
      </button>
    </li>
  );
};

export default Item;
