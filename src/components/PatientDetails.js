import React, { useState } from 'react';
import DocumentUpload from './DocumentUpload';
import NotesSection from './NotesSection';
import DiagnosisModal from './DiagnosisModal';
import patientPlaceholder from '../assets/images/patient-image-placeholder.png'; // Placeholder image
import moreInfoIcon from '../assets/images/more-info-patient.png'; // "More Info" icon
import './styles/PatientDetails.css'; // Import the new CSS for styling

const PatientDetails = ({ patient }) => {
  const [showModal, setShowModal] = useState(false);
  const [documents, setDocuments] = useState([]);

  const handleGenerateReport = () => {
    // Logic for report generation
    setShowModal(true);
  };

  return (
    <div className="patient-details-container-right">
      <div className="patient-header-right">
        {/* Patient image placeholder */}
        <img src={patientPlaceholder} alt="Patient" className="patient-image-right" />
        
        {/* Patient Name and More Info */}
        <div className="patient-info-wrapper-right">
          <h2 className="patient-name-right">{patient.name}</h2>
          <img src={moreInfoIcon} alt="More Info" className="more-info-icon-right" />
        </div>
      </div>

      <DocumentUpload documents={documents} setDocuments={setDocuments} />

      <NotesSection />

      {/* Move the button to the right side */}
      <div className="button-container-right">
        <button className="generate-report-btn-right" onClick={handleGenerateReport}>
          Generate Diagnosis Report
        </button>
      </div>

      {showModal && <DiagnosisModal onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default PatientDetails;
