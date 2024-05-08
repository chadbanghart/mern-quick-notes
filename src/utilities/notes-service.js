import * as notesAPI from './notes-api';

export async function getAll(notes) {
  const note = await notesAPI.getAll(notes);
  localStorage.setItem('note', note);
}