import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeContact } from 'redux/contactsSlice';
import css from './contacts.module.css';

export default function Contacts() {
  const onContactDelete = event => {
    contactDeleteHandler(event.currentTarget.dataset.id);
  };

  const dispatch = useDispatch();  

  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const filterToLowercase = filter.toLowerCase();
  const visibleContacts = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(filterToLowercase);
  });

  const contactDeleteHandler = idToDelete => {
    dispatch(removeContact(idToDelete));
  };

  const contactsArray = visibleContacts;
  return (
    <ul className={css.contactsList}>
      {contactsArray.map(contact => {
        return (
          <li key={contact.id} className={css.contactsList__item}>
            {contact.name}: {contact.number}{' '}
            <button
              type="button"
              data-id={contact.id}
              onClick={onContactDelete}
              className={css.deleteButton}
            >
              delete
            </button>{' '}
          </li>
        );
      })}
    </ul>
  );
}
