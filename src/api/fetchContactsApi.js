import axios from 'axios';

const BASE_URL = 'https://64c975d8b2980cec85c24252.mockapi.io/contacts';

export async function fetchContacts() {
  const { data } = await axios.get(BASE_URL);
  return data;
}

export async function fetchAddContact(newContact) {
  const { data } = await axios.post(BASE_URL, newContact);
  return data;
}

export async function fetchRemoveContact(id) {
  const { data } = await axios.delete(`${BASE_URL}/${id}`);
  return data;
}
