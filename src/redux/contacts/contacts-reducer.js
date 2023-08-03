import { createReducer } from '@reduxjs/toolkit';
import {
  fetchContacts,
  fetchAddContact,
  fetchRemoveContact,
} from './contacts-operations';
import actions from './contacts-actions';

const initialState = [];

// const contactsReducer = createReducer(initialState, builder => {
//   builder
//     .addCase(actions.fetchContactsSuccess, (state, { payload }) => payload)
//     .addCase(actions.fetchAddContactsSuccess, (state, { payload }) => [
//       ...state,
//       payload,
//     ])
//     .addCase(actions.fetchRemoveContactsSuccess, (state, { payload }) =>
//       state.filter(({ id }) => id !== payload)
//     )
//     .addDefaultCase(state => state);
// });

//! через createAsyncThunk

const contactsReducer = createReducer(initialState, builder => {
  builder
    .addCase(fetchContacts.fulfilled, (state, { payload }) => payload)
    .addCase(fetchAddContact.fulfilled, (state, { payload }) => [
      ...state,
      payload,
    ])
    .addCase(actions.deleteContactFromStore, (state, { payload }) =>
      state.filter(({ id }) => id !== payload)
    )
    .addCase(fetchRemoveContact.fulfilled, (state, { payload }) =>
      state.filter(({ id }) => id !== payload)
    )
    .addDefaultCase(state => state);
});

export default contactsReducer;
