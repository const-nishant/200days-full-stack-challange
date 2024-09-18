import styles from "./AppName.module.css";
function AppName() {
  return (
    <div>
      <h1 className={styles.todoHeading}>TODO App</h1>
      <p className={styles.todoSubHeading}>
        Get things done, one item at a time.
      </p>
    </div>
  );
}

export default AppName;
