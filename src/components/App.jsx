import React, { Component } from 'react';
import shortid from 'shortid';
import { useDispatch, useSelector } from 'react-redux';import ContactsForm from './ContactsForm';
import { Search } from './Search/Search';
import Contacts from './Contacts';
import { addContact } from 'redux/contactsSlice';

export default function App() {

  // const localStorageData = JSON.parse(localStorage.getItem('contacts'));

  const inputId = shortid.generate();
  const telId = shortid.generate();

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactsForm id={inputId} telId={telId} />

      <h2>Contacts</h2>
      <Search />
      <Contacts />
    </div>
  );
}
