import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Menu from './Menu';
import Menu2 from './Menu2';

// Define an interface for the structure of notes
interface Note {
  id: number;
  content: string;
}

export default function Necessidades() {
  const location = useLocation();
  const username = location.state?.username || '';

  const [note, setNote] = useState('');
  const [notesList, setNotesList] = useState<Note[]>([]); // Use the Note interface

  useEffect(() => {
    // Fetch notes when the component mounts
    const buscaNotas = async () => {
      try {
        const resp = await fetch(`http://localhost:3000/notas`)
        const note = await resp.json()
        if (resp.ok){
          setNotesList(note) // atualiza vetor de produtos com dados da API
        }
        else {
          console.log('Falha na busca por dados')
        }
      }
      catch(error) {
        console.log(error)
      }
    }
      buscaNotas()
  } , [username])

  const handleNoteChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNote(event.target.value);
  };

  const saveNote = () => {
    fetch('/api/notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content: note }), // Send the note content
    })
      .then(() => {
        // Clear the note input and fetch updated notes list
        setNote('');
        fetch('/api/notes')
          .then((response) => response.json())
          .then((data) => setNotesList(data))
          .catch((error) => console.error('Error fetching updated notes:', error));
      })
      .catch((error) => console.error('Error saving note:', error));
  };

  return (
    <>
      <div className="flex-col">
        <Menu username={username} />
      </div>
      <div className="flex-row place-content-start bg-[#FFF6E8]">
        <div className="flex-col">
          <Menu2 username={username} />
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="max-w-md mx-10 my-5 mb-4 text-[#0b0722]">
            Pagina de Necessidades
          </div>

          <textarea
            value={note}
            onChange={handleNoteChange}
            placeholder="Write your notes here..."
            className="w-80 h-40 p-2 border rounded-md"
          />

          <button onClick={saveNote} className="mt-3 px-4 py-2 bg-blue-500 text-white rounded">
            Save Note
          </button>

          {/* Display saved notes */}
          <div className="mt-3 text-[#0b0722]">
            <h2>Saved Notes</h2>
            <ul>
              {notesList.map((savedNote) => (
                <li key={savedNote.id}>{savedNote.content}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
