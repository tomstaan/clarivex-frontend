import React from 'react';
import '../styles.css';

const DiagnosisModal = ({ onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Diagnosis Report</h2>
        <div className="report-content">
          {/* Here will be the LLM-generated report */}
        </div>
      </div>
    </div>
  );
};

export default DiagnosisModal;
