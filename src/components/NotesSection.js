import React, { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const NotesSection = () => {
  const [notes, setNotes] = useState('');
  const { transcript, resetTranscript } = useSpeechRecognition();

  const handleSpeech = () => {
    SpeechRecognition.startListening();
  };

  const stopSpeech = () => {
    SpeechRecognition.stopListening();
    setNotes(transcript);
  };

  return (
    <div className="notes-section">
      <textarea value={notes} onChange={(e) => setNotes(e.target.value)} />
      <button onMouseDown={handleSpeech} onMouseUp={stopSpeech}>
        <img src="/text-to-speech-icon.png" alt="Speech" />
      </button>
    </div>
  );
};

export default NotesSection;
