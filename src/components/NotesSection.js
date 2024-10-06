import React, { useState, useRef } from 'react';
import './styles/NotesSection.css'; // Import the CSS file for styling
import speechIcon from '../assets/images/text-to-speech-icon.png'; // Your microphone icon

const NotesSection = () => {
  const [notes, setNotes] = useState(''); // For storing the notes
  const [isRecording, setIsRecording] = useState(false); // For toggling recording state
  const [isProcessing, setIsProcessing] = useState(false); // For showing processing state
  const mediaRecorderRef = useRef(null); // Ref to store MediaRecorder instance
  const audioChunksRef = useRef([]); // To store audio data chunks

  // Start recording
  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/mp3' });
        audioChunksRef.current = []; // Clear audio chunks
        sendToBackend(audioBlob); // Send audio to backend for transcription
      };

      mediaRecorder.start();
      setIsRecording(true);
      console.log('Recording started');
    } catch (error) {
      console.error('Error accessing microphone:', error);
    }
  };

  // Stop recording
  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      console.log('Recording stopped');
    }
  };

  // Send audio file to backend for transcription
  const sendToBackend = async (audioBlob) => {
    const formData = new FormData();
    formData.append('file', audioBlob, 'audio.mp3'); // Append file as audio.mp3

    setIsProcessing(true);
    console.log('Sending audio file to backend...');

    try {
      const response = await fetch('http://localhost:5002/transcribe', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Transcription received:', data.transcription);
        setNotes((prevNotes) => `${prevNotes} ${data.transcription}`);
      } else {
        console.error('Transcription failed:', response.statusText);
      }
    } catch (error) {
      console.error('Error sending audio to backend:', error);
    } finally {
      setIsProcessing(false);
      console.log('Transcription process finished.');
    }
  };

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

        {/* Recording Button */}
        <div className="speech-buttons">
          <button
            className={`speech-button ${isRecording ? 'recording' : ''}`}
            onClick={isRecording ? stopRecording : startRecording}
            disabled={isProcessing}
          >
            {isProcessing ? (
              <div className="spinner"></div> // Show spinner when processing
            ) : isRecording ? (
              <div className="cancel-icon">&times;</div> // Red cancel button with "×" symbol
            ) : (
              <img src={speechIcon} alt="Start Recording" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotesSection;
