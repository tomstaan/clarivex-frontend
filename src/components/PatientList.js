import React, { useState } from 'react';
import './styles/PatientList.css';
import clarityLogo from '../assets/images/clarity-tool-logo.png'; // Import the logo image
import addPatientIcon from '../assets/images/add-patient.png'; // Import the add patient icon

const patients = [
  { id: 1, name: 'John Doe', age: 52 },
  { id: 2, name: 'Sam Smith', age: 45 },
];

const PatientList = ({ onPatientSelect }) => {
  const [selectedPatient, setSelectedPatient] = useState(null);

  const handleSelect = (patient) => {
    setSelectedPatient(patient);
    onPatientSelect(patient);
  };

  return (
    <div className="patient-list-container">
      {/* Logo and Text directly above the patient list */}
      <div className="logo-header">
        <img src={clarityLogo} alt="Clarity Tool Logo" className="logo" />
        <span className="tool-text">Clarity AI Diagnosis Tool</span>
      </div>
      
      <div className="patient-list-child-container">
        <div className="patient-header">
          <span className="patient-title">Patients</span>
          <img src={addPatientIcon} alt="Add Patient" className="add-patient-icon" />
        </div>

        <div className="patient-list">
          {patients.map((patient) => (
            <div
              key={patient.id}
              className={`patient-item ${selectedPatient?.id === patient.id ? 'selected' : ''}`}
              onClick={() => handleSelect(patient)}
            >
              <span>{patient.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PatientList;
