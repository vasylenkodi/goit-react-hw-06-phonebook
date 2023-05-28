import { createAction } from "@reduxjs/toolkit";

export const addContact = createAction('contacts/AddContact');

export const removeContact = createAction('contacts/RemoveContact');