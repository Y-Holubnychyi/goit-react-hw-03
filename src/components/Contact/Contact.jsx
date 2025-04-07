import { FaUser, FaPhone } from "react-icons/fa";
import css from "./Contact.module.css";

function Contact({ name, number, onDelete }) {
  return (
    <div className={css.contactWrapper}>
      <div className={css.contactInfo}>
        <div className={css.infoRow}>
          <FaUser className={css.icon} />
          <span className={css.contactName}>{name}</span>
        </div>
        <div className={css.infoRow}>
          <FaPhone className={css.icon} />
          <span className={css.contactNumber}>{number}</span>
        </div>
      </div>
      <button className={css.deleteButton} onClick={onDelete}>
        Delete
      </button>
    </div>
  );
}

export default Contact;
