import { createAction } from '@reduxjs/toolkit';
const deleteContactFromStore = createAction('contacts/deleteContactFromStore');

//!==================== fetchContacts

const fetchContactsRequest = createAction('contacts/fetchContactsRequest');

const fetchContactsSuccess = createAction('contacts/fetchContactsSuccess');

const fetchContactsError = createAction('contacts/fetchContactsError');

//!==================== fetchAddContacts

const fetchAddContactsRequest = createAction(
  'contacts/fetchAddContactsRequest'
);

const fetchAddContactsSuccess = createAction(
  'contacts/fetchAddContactsSuccess'
);

const fetchAddContactsError = createAction('contacts/fetchAddContactsError');

//!==================== fetchRemoveContacts

const fetchRemoveContactsRequest = createAction(
  'contacts/fetchRemoveContactsRequest'
);

const fetchRemoveContactsSuccess = createAction(
  'contacts/fetchRemoveContactsSuccess'
);

const fetchRemoveContactsError = createAction(
  'contacts/fetchRemoveContactsError'
);

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  fetchAddContactsRequest,
  fetchAddContactsSuccess,
  fetchAddContactsError,
  fetchRemoveContactsRequest,
  fetchRemoveContactsSuccess,
  fetchRemoveContactsError,
  deleteContactFromStore,
};
