import React, { useState } from 'react';
import DocumentUpload from './DocumentUpload';
import NotesSection from './NotesSection';
import DiagnosisModal from './DiagnosisModal';

const PatientDetails = ({ patient }) => {
  const [showModal, setShowModal] = useState(false);
  const [documents, setDocuments] = useState([]);

  const handleGenerateReport = () => {
    // Logic for report generation
    setShowModal(true);
  };

  return (
    <div className="patient-details-container">
      <h2>{patient.name}</h2>
      <DocumentUpload documents={documents} setDocuments={setDocuments} />
      <NotesSection />
      <button onClick={handleGenerateReport}>Generate Diagnosis Report</button>

      {showModal && <DiagnosisModal onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default PatientDetails;
