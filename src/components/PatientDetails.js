import React, { useState, useEffect } from 'react';
import DocumentUpload from './DocumentUpload';
import NotesSection from './NotesSection';
import DiagnosisModal from './DiagnosisModal';
import Spinner from './Spinner'; // Import the spinner
import patientPlaceholder from '../assets/images/patient-image-placeholder.png'; // Placeholder image
import moreInfoIcon from '../assets/images/more-info-patient.png'; // "More Info" icon

import jackScanImage1 from '../assets/images/jack-scan-1.png'; // Import the image for Jack Turner
import jackScanImage2 from '../assets/images/jack-scan-2.png'; // Import the image for Jack Turner
import jackScanImage3 from '../assets/images/jack-scan-3.png'; // Import the image for Jack Turner
import johnScanImage1 from '../assets/images/john-scan-1.png'; // Import the image for John Doe
import johnScanImage2 from '../assets/images/john-scan-2.png'; // Import the image for John Doe
import lilyScanImage1 from '../assets/images/lily-scan-1.png'; // Import the image for Lily Morgan

import './styles/PatientDetails.css'; // Import the new CSS for styling

const PatientDetails = ({ patient }) => {
  // Define initial documents per patient (dummy data)
  const initialDocuments = {
    'John Doe': [
      { name: 'john-scan-1.png', imgSrc: johnScanImage1 }, 
      { name: 'john-scan-2.png', imgSrc: johnScanImage2 },
    ],
    'Lily Morgan': [
      { name: 'lily-scan-1.png', imgSrc: lilyScanImage1 }
    ],
    'Jack Turner': [
      { name: 'jack-scan-1.png', imgSrc: jackScanImage1 }, 
      { name: 'jack-scan-2.png', imgSrc: jackScanImage2 },
      { name: 'jack-scan-3.png', imgSrc: jackScanImage3 }
    ]
  };

  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false); // State to manage button loading state
  const [documents, setDocuments] = useState(initialDocuments[patient.name] || []);

  // Update documents whenever a new patient is selected
  useEffect(() => {
    setDocuments(initialDocuments[patient.name] || []);
  }, [patient.name]); // Trigger when the patient changes

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

      {/* Pass dynamic documents based on patient */}
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
