import Contact from "../Contact/Contact";

import styles from "./ContactList.module.css";

const ContactList = ({ users, removeUser }) => {
  return (
    <ul className={styles.listContacts}>
      {users.map((user) => (
        <Contact
          key={user.id}
          id={user.id}
          name={user.name}
          number={user.number}
          removeUser={removeUser}
        />
      ))}
    </ul>
  );
};

export default ContactList;
