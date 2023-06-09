import React from 'react';
import shortid from 'shortid';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import PropTypes from 'prop-types';
import css from './contactsForm.module.css';

export default function ContactsForm({ id, telId}) {
  
  const dispatch = useDispatch();

  const onFormSubmit = event => {
    event.preventDefault();
    const name = event.target.name.value;
    const number = event.target.number.value;

    dispatch(addContact({ id: shortid.generate(), name, number }));

    event.target.name.value = '';
    event.target.number.value = '';
  };


    return (
      <form onSubmit={onFormSubmit} className={css.contactsForm}>
        <label htmlFor={id}>
          Name
          <input
            id={id}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label htmlFor={telId}>
          Number
          <input
            id={telId}
            type="tel"
            name="number"

            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit" className={css.addContactButton}>
          Add contact
        </button>
      </form>
    );
  }

  ContactsForm.propTypes = {
    id: PropTypes.string,
    telId: PropTypes.string,
  };