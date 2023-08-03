import { createAsyncThunk } from '@reduxjs/toolkit';
// import actions from 'redux/contacts/contacts-actions';
import * as fetchBooksApi from 'api/fetchContactsApi';

// export const fetchContacts = () => async dispatch => {
//   dispatch(actions.fetchContactsRequest());

//   try {
//     const contacts = await fetchBooksApi.fetchContacts();
//     dispatch(actions.fetchContactsSuccess(contacts));
//   } catch (error) {
//     dispatch(actions.fetchContactsError(error));
//   }
// };

// export const fetchAddContact = newContact => async dispatch => {
//   dispatch(actions.fetchAddContactsRequest());

//   try {
//     const addNewContact = await fetchBooksApi.fetchAddContact(newContact);
//     dispatch(actions.fetchAddContactsSuccess(addNewContact));
//   } catch (error) {
//     dispatch(actions.fetchAddContactsError(error));
//   }
// };

// export const fetchRemoveContact = removeContactId => async dispatch => {
//   dispatch(actions.fetchRemoveContactsRequest());
//   dispatch(actions.fetchRemoveContactsSuccess(removeContactId));

//   try {
//     const removeContact = await fetchBooksApi.fetchRemoveContact(
//       removeContactId
//     );
//     dispatch(actions.fetchRemoveContactsSuccess(removeContact));
//   } catch (error) {
//     dispatch(actions.fetchRemoveContactsError(error));
//   }
// };

//! делаю через  createAsyncThunk

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    const contacts = await fetchBooksApi.fetchContacts();
    return contacts;
  }
);

export const fetchAddContact = createAsyncThunk(
  'fetchAddContacts',
  async newContact => {
    const addNewContact = await fetchBooksApi.fetchAddContact(newContact);
    return addNewContact;
  }
);
//? для fetchRemoveContact пришлось написать допольнительный action deleteContactFromStore,
//? так как я не разобрался как сделать в createAsyncThunk синхронную операцию
export const fetchRemoveContact = createAsyncThunk(
  'fetchRemoveContacts',
  async removeContactId => {
    const removeContact = await fetchBooksApi.fetchRemoveContact(
      removeContactId
    );
    return removeContact;
  }
);
