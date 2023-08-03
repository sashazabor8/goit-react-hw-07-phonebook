import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getContacts,
  getContactsFilter,
} from 'redux/contacts/contacts-selectors';
import * as contactOperations from 'redux/contacts/contacts-operations';
import actions from 'redux/contacts/contacts-actions';
import s from './Contacts.module.css';

function Statistics() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getContactsFilter);
  const dispatch = useDispatch();
  const removeContact = id => {
    dispatch(actions.deleteContactFromStore(id));
    dispatch(contactOperations.fetchRemoveContact(id));
  };

  useEffect(() => {
    dispatch(contactOperations.fetchContacts());
  }, [dispatch]);

  const getFilteredList = () => {
    if (contacts.length === 0) return [];

    const optimizedFilter = filter.toLocaleLowerCase().trim();

    return contacts.filter(({ name }) =>
      name.toLocaleLowerCase().includes(optimizedFilter)
    );
  };

  return (
    <ul className={s.contacts}>
      {getFilteredList().map(({ name, id, phone }) => {
        return (
          <li key={id} className={s.contactsItem}>
            <p className={s.contactsText}>
              {name}: {phone}
            </p>
            <button
              type="button"
              className={s.contactsBtn}
              onClick={() => removeContact(id)}
            >
              delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}
export default Statistics;
