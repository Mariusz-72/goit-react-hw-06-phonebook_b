import { createReducer, createAction } from '@reduxjs/toolkit';

export const saveContact = createAction('contacts/save');
export const deleteContact = createAction('contacts/delete');

const contactsReducer = createReducer([], builder => {
    builder
        .addCase(saveContact, (state, action) => [...state, action.payload])
        .addCase(deleteContact, (state, action) =>
        state.filter(contact => contact.id !== action.payload)
    );
});

export default contactsReducer;
