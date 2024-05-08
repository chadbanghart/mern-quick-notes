import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as notesAPI from '../../utilities/notes-api';
import NoteForm from "../../components/NoteForm/NoteForm";

export default function NotesListPage() {
  const [notes, setNotes] = useState([]);
  const { noteId } = useParams();

  useEffect(function() {
    async function getNotes() {
      const notes = await notesAPI.getAll();
      setNotes(notes);
    }
    getNotes();
  }, [noteId]);
  if (!notes) return null;

  async function handleAddNote(note) {
    const newNote = await notesAPI.add({text: note});
    setNotes([...notes, newNote]);
  }


  return (
    <main>
      <>
        <h1>NotesListPage</h1>
        <NoteForm handleAddNote={handleAddNote} />
        { notes.length > 0 ? 
        <>
        {notes.map(n => <p>- {n.text} - created: <span>{n.createdAt.toLocaleString()}</span></p>)}
        </>
        :
        <p>No notes Yet!</p>
      }
      </>
    </main>
  );
}