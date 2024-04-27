import { useSelector } from "react-redux";

import Contact from "../Contact/Contact";

import css from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contactsSlice";

const ContactList = () => {
  const filterContacts = useSelector(selectFilteredContacts);

  return <ul>{filterContacts.length > 0 && filterContacts.map((contact) => <Contact key={contact.id} contact={contact} />)}</ul>;
};

export default ContactList;
