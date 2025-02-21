import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async (contacts) => {
  await readContacts().then((contacts) => {
    contacts.pop();
    writeContacts(contacts);
  });
};

removeLastContact();
