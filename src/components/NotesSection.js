import React, { useState } from 'react';
import './styles/NotesSection.css'; // Import the CSS file for styling
import speechIcon from '../assets/images/text-to-speech-icon.png';

const NotesSection = () => {
  const [notes, setNotes] = useState('');

  const handleNotesChange = (event) => {
    setNotes(event.target.value);
  };

  return (
    <div className="notes-section-container">
      <h3 className="notes-title">Notes</h3>

      {/* Divider Line */}
      <hr className="divider-line" />

      <div className="notes-input-wrapper">
        <textarea
          className="notes-textarea"
          value={notes}
          onChange={handleNotesChange}
          placeholder="Enter your notes here..."
        />
        <button className="speech-button">
          <img src={speechIcon} alt="Speech to Text" />
        </button>
      </div>
    </div>
  );
};

export default NotesSection;
