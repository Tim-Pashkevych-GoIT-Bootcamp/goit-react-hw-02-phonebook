import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import css from './ContactForm.module.css';
import ContactFormInput from 'components/ContactFormInput/ContactFormInput';
import ContactFormButton from 'components/ContactFormButton/ContactFormButton';

const INITIAL_STATE = {
  name: '',
  number: '',
};

export default class ContactForm extends Component {
  state = { ...INITIAL_STATE };

  onChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  onSubmit = event => {
    event.preventDefault();

    const id = nanoid();
    const { name, number } = this.state;

    this.reset();
    this.props.onSubmit({ id, name, number });
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    return (
      <form className={css.form} name="contactForm" onSubmit={this.onSubmit}>
        <ContactFormInput
          label="Name"
          type="text"
          name="name"
          value={this.state.name}
          required={true}
          focus={true}
          onChange={this.onChange}
        />
        <ContactFormInput
          label="Number"
          type="tel"
          name="number"
          value={this.state.number}
          required={true}
          onChange={this.onChange}
        />
        <ContactFormButton text="Add contact" type="submit" />
      </form>
    );
  }
}
