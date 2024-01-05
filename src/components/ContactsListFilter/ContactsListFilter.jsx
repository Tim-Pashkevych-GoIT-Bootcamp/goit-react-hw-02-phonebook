import ContactFormInput from 'components/ContactFormInput/ContactFormInput';

const ContactsListFilter = ({ fieldFilterValue, onChange }) => {
  return (
    <ContactFormInput
      label="Find contacts by name"
      type="text"
      name="filter"
      value={fieldFilterValue}
      onChange={onChange}
    />
  );
};

export default ContactsListFilter;
