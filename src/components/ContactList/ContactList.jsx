import { useSelector } from "react-redux";

import Contact from "../Contact/Contact";

import css from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contacts/slice";
import { selectNameFilter } from "../../redux/contacts/selectors";

const ContactList = () => {
  const filterContacts = useSelector(selectFilteredContacts);
  const filterValue = useSelector(selectNameFilter);
  return (
    <>
      {filterContacts.length === 0 && filterValue === "" && <div>You don&apos;t have any contacts yet</div>}
      <ul>{filterContacts.length > 0 && filterContacts.map((contact) => <Contact key={contact.id} contact={contact} />)}</ul>
    </>
  );
};

export default ContactList;
