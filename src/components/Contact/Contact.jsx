import css from "./Contact.module.css";

function Contact({ name, number, onDelete }) {
  return (
    <li className={css.contactItem}>
      <p>
        {name}: {number}
      </p>
      <button onClick={onDelete}>Delete</button>
    </li>
  );
}

export default Contact;
