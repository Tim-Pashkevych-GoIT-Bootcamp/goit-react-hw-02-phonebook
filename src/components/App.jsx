import React, { Component } from 'react';
import Section from './Section/Section';
import ContactForm from './ContactForm/ContactForm';
import ContactsListFilter from './ContactsListFilter/ContactsListFilter';
import ContactsList from './ContactsList/ContactsList';

const INITIAL_STATE = {
  filter: '',
  contacts: [],
};

export default class App extends Component {
  state = { ...INITIAL_STATE };

  onChange = ({ target }) => {
    this.setState({ filter: target.value });
  };

  onDelete = contactId => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== contactId),
    });
  };

  addContact = newContact => {
    if (this.isContactAlreadyAdded(newContact.name)) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  isContactAlreadyAdded = name => {
    if (
      this.state.contacts.filter(
        contact => contact.name.toLocaleLowerCase() === name.toLocaleLowerCase()
      ).length > 0
    ) {
      return true;
    }

    return false;
  };

  searchResult = keyword => {
    return this.state.contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(keyword.toLocaleLowerCase())
    );
  };

  render() {
    return (
      <>
        <Section title="Phonebook">
          <ContactForm onSubmit={this.addContact} />
        </Section>

        {this.state.contacts.length > 0 && (
          <Section title="Contacts">
            <ContactsListFilter onChange={this.onChange} />
            <ContactsList
              contacts={this.searchResult(this.state.filter)}
              onDelete={this.onDelete}
            />
          </Section>
        )}
      </>
    );
  }
}
