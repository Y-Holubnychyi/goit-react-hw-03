import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

function ContactList({ contacts, onDelete }) {
  return (
    <ul className={css.contactList}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={css.contactItem}>
          <Contact name={name} number={number} onDelete={() => onDelete(id)} />
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
