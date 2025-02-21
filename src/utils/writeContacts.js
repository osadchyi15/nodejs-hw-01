import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const writeContacts = async (updateContacts) => {
  fs.writeFile(PATH_DB, JSON.stringify(updateContacts, undefined, 2));
};
