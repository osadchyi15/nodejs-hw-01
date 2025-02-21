import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

let updateContacts = [];

export const generateContacts = async (count) => {
  for (let i = 0; i < count; i++) {
    updateContacts.push(await createFakeContact());
  }
};

readContacts().then((data) => {
  data = [...data, ...updateContacts];
  writeContacts(data);
});
