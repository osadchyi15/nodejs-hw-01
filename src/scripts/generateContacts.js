import { pathToFileURL } from 'node:url';
import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import path from 'node:path';

export const generateContacts = async (count) => {
  const updateContacts = [];

  for (let i = 0; i < count; i++) {
    updateContacts.push(await createFakeContact());
  }

  let data = await readContacts();
  data = [...data, ...updateContacts];
  await writeContacts(data);
};

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  generateContacts(5);
}
