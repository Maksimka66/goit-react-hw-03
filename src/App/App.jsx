import { useState } from "react";

import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";

import "./App.css";

function App() {
  const [contacts, setContacts] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);

  const [input, setInput] = useState("");

  const handleChange = () => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(input)
    );
  };

  // const addContact = () => {};

  return (
    <>
      <h1>Phonebook</h1>
      {/* <ContactForm /> */}
      <SearchBox name={input} findName={handleChange} />
      <ContactList users={contacts} />
    </>
  );
}

export default App;