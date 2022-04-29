import { nanoid } from 'nanoid';
import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('contacts/Add', data => ({
  payload: { id: nanoid(), ...data },
}));

const deleteContact = createAction('contacts/Delete');

const changeFilter = createAction('contacts/ChangeFilter');

export default { addContact, changeFilter, deleteContact };
