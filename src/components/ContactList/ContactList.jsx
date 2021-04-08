// import shortid from 'shortid';
import styles from './ContactList.module.css';
import ContactItem from '../ContactItem';

const ContactList = ({ list, onDeleteContact }) => {
  return (
    <ul className={styles.section}>
      {list.map(({ id, name, number }) => {
        return (
          <ContactItem
            number={number}
            name={name}
            key={id}
            id={id}
            onDeleteContact={onDeleteContact}
          />
        );
      })}
    </ul>
  );
};

export default ContactList;
