import React, { useState } from 'react';
import PatientList from './components/PatientList';
import PatientDetails from './components/PatientDetails';
import Header from './components/Header';
import MainContainer from './components/MainContainer';
import './App.css';

function App() {
  const [selectedPatient, setSelectedPatient] = useState(null);

  const handlePatientSelect = (patient) => {
    setSelectedPatient(patient);
  };

  return (
    <div>
      <Header />
      <MainContainer>
        <div className="app-container">
          <aside className="patient-list">
            <PatientList onPatientSelect={handlePatientSelect} />
          </aside>
          <main className="patient-details">
            {selectedPatient ? (
              <PatientDetails patient={selectedPatient} />
            ) : (
              <div>Select a patient to view details</div>
            )}
          </main>
        </div>
      </MainContainer>
    </div>
  );
}

export default App;
