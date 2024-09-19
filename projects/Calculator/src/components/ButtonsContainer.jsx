import styles from "./ButtonsContainer.module.css";

const ButtonsContainer = ({ onButtonClick }) => {
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
          <button
            key={ButtonName}
            className={styles.button}
            onClick={() => onButtonClick(ButtonName)}
          >
            {ButtonName}
          </button>
        ))}
      </div>
    </>
  );
};

export default ButtonsContainer;
