import { FaUserAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

import css from "./Contact.module.css";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const onDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <li className={css.item}>
      <div>
        <div className={css.itemWrapper}>
          <FaUserAlt size="25" />
          <p>{contact.name}</p>
        </div>
        <div className={css.itemWrapper}>
          <FaPhone size="25" />
          <p>{contact.number}</p>
        </div>
      </div>
      <button onClick={onDelete}>Delete</button>
    </li>
  );
};

export default Contact;
