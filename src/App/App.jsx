import { useEffect, useState } from "react";

import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import ContactForm from "../ContactForm/ContactForm";

import "./App.css";

function App() {
  const [contacts, setContacts] = useState(() => {
    const contactsList = window.localStorage.getItem("saved-contacts");
    return contactsList ? JSON.parse(contactsList) : [];
  });

  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  const [input, setInput] = useState("");

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(input.toLowerCase())
  );

  const deleteContact = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId);
    });
  };

  useEffect(() => {
    window.localStorage.setItem("saved-contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm addUser={addContact} />
      <SearchBox name={input} findName={setInput} />
      <ContactList users={filteredContacts} removeUser={deleteContact} />
    </>
  );
}

export default App;
