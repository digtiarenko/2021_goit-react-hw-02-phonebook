import styles from './ContactItem.module.css';

const ContactItem = ({ id, number, name, onDeleteContact }) => {
  return (
    <li key={id} className={styles.singleContact}>
      <p className={styles.contactName}>{name}</p>
      <span>{number}</span>
      <button
        className={styles.btn}
        onClick={() => {
          onDeleteContact(id);
        }}
      >
        delete
      </button>
    </li>
  );
};

export default ContactItem;
