import sendRequest from "./send-requests";
const BASE_URL = `/api/notes`;

export function getAll() {
  return sendRequest(BASE_URL);
}

export function add(noteData) {
  return sendRequest(BASE_URL, 'POST', noteData);
}