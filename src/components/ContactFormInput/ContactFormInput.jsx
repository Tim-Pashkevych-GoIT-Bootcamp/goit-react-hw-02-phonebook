import { nanoid } from 'nanoid';
import css from './ContactFormInput.module.css';

const ContactFormInput = ({
  label,
  type,
  name,
  value,
  onChange,
  required = false,
  focus = false,
}) => {
  const fieldId = nanoid();

  return (
    <fieldset className={css.formFieldSet}>
      <label className={css.formLabel} htmlFor={fieldId}>
        {label}:
      </label>
      <input
        id={fieldId}
        type={type}
        name={name}
        value={value}
        required={required}
        autoFocus={focus}
        onChange={onChange}
      />
    </fieldset>
  );
};

export default ContactFormInput;
