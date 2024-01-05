import css from './ContactsList.module.css';
import ContactFormButton from 'components/ContactFormButton/ContactFormButton';

const ContactsList = ({ contacts, onDelete }) => {
  return (
    <ul className={css.contactsList}>
      {contacts.map(({ id, name, number }, index) => (
        <li key={id} className={css.contactListItem}>
          <p>{`${++index}. ${name}: ${number}`}</p>
          <ContactFormButton text="Delete" onClick={() => onDelete(id)} />
        </li>
      ))}
    </ul>
  );
};

export default ContactsList;
