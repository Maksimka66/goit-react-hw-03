import styles from "./Contact.module.css";

const Contact = ({ id, name, number, removeUser }) => {
  return (
    <li className={styles.listItem}>
      <div className={styles.itemContainer}>
        <p className={styles.userInfo}>{name}</p>
        <p className={styles.userInfo}>{number}</p>
      </div>
      <button className={styles.deleteBtn} onClick={() => removeUser(id)}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
