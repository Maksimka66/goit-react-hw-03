import styles from "./SearchBox.module.css";

const SearchBox = ({ name, findName }) => {
  return (
    <div className={styles.inputContainer}>
      <p className={styles.inputDescription}>Find contacts by name</p>
      <input
        className={styles.fieldToFill}
        type="text"
        name="text"
        value={name}
        onChange={findName}
      />
    </div>
  );
};

export default SearchBox;
