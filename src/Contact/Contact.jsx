import styles from "./Contact.module.css";

const Contact = ({ id, name, number }) => {
  return (
    <li className={styles.listItem} key={id}>
      <div className={styles.itemContainer}>
        <p className={styles.userInfo}>{name}</p>
        <p className={styles.userInfo}>{number}</p>
      </div>
      <button className={styles.deleteBtn}>Delete</button>
    </li>
  );
};

export default Contact;
