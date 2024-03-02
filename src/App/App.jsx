import { useEffect, useState } from "react";

import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import ContactForm from "../ContactForm/ContactForm";

import "./App.css";

const initialContacts = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

function App() {
  const [contacts, setContacts] = useState(() => {
    const contactsList = window.localStorage.getItem("saved-contacts");
    return contactsList ? JSON.parse(contactsList) : initialContacts;
  });

  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      const updatedContacts = [...prevContacts, newContact];
      window.localStorage.setItem(
        "saved-contacts",
        JSON.stringify(updatedContacts)
      );
      return updatedContacts;
    });
  };

  const [input, setInput] = useState("");

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(input.toLowerCase())
  );

  const deleteContact = (contactId) => {
    setContacts((prevContacts) => {
      const filteredContacts = prevContacts.filter(
        (contact) => contact.id !== contactId
      );
      window.localStorage.setItem(
        "saved-contacts",
        JSON.stringify(filteredContacts)
      );
      return filteredContacts;
    });
  };

  useEffect(() => {
    const contactsList = JSON.parse(
      window.localStorage.getItem("saved-contacts")
    );
    if (!contactsList) {
      window.localStorage.setItem(
        "saved-contacts",
        JSON.stringify(initialContacts)
      );
    }
  }, []);

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
