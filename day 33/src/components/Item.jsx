import styles from "./Item.module.css";

const Item = ({ foodItem }) => {
  return (
    <li className={`${styles["np-item"]} list-group-item`}>
      <span className={styles["np-span"]}>{foodItem}</span>
    </li>
  );
};

export default Item;
