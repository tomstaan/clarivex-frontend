import React, { useState } from 'react';
import DocumentUpload from './DocumentUpload';
import NotesSection from './NotesSection';
import DiagnosisModal from './DiagnosisModal';
import Spinner from './Spinner'; // Import the spinner
import patientPlaceholder from '../assets/images/patient-image-placeholder.png'; // Placeholder image
import moreInfoIcon from '../assets/images/more-info-patient.png'; // "More Info" icon
import './styles/PatientDetails.css'; // Import the new CSS for styling

const PatientDetails = ({ patient }) => {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false); // State to manage button loading state
  const [documents, setDocuments] = useState([]);

  const handleGenerateReport = () => {
    setLoading(true); // Start loading (show spinner)
    
    // Simulate an API call (replace this with actual backend integration)
    setTimeout(() => {
      setLoading(false); // Stop loading
      setShowModal(true); // Open the modal once the process is complete
    }, 2000); // Simulate 2 seconds delay
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
        <button 
          className="generate-report-btn-right" 
          onClick={handleGenerateReport} 
          disabled={loading} // Disable button during loading
        >
          {loading ? (
            <>
              <Spinner /> {/* Show spinner inside the button */}
              <span>Generating Diagnosis...</span>
            </>
          ) : (
            "Generate Diagnosis Report"
          )}
        </button>
      </div>

      {showModal && <DiagnosisModal onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default PatientDetails;
