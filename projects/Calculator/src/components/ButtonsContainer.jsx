import styles from "./ButtonsContainer.module.css";

const ButtonsContainer = () => {
  let ButtonNames = [
    "C",
    "/",
    "*",
    "-",
    "+",
    "=",
    "7",
    "8",
    "9",
    "6",
    "5",
    "4",
    "1",
    "2",
    "3",
    "0",
  ];

  return (
    <>
      <div className={styles.buttonContainer}>
        {ButtonNames.map((ButtonName) => (
          <button className={styles.button}>{ButtonName}</button>
        ))}
      </div>
    </>
  );
};

export default ButtonsContainer;
