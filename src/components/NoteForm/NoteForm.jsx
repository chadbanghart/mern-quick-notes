import { useState } from 'react';

export default function NoteForm({handleAddNote}) {
  const [content, setContent] = useState('');

  function handleSubmit(evt) {
    evt.preventDefault();
    handleAddNote(content);
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={content}
        onChange={evt => setContent(evt.target.value)}
      />
      <button type='submit'>ADD NOTE</button>  
    </form>
  );
}