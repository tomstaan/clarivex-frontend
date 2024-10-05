import React from 'react';
import './styles/Header.css';
import logo from '../assets/images/clarivex-logo-for-header.png'; // Update with your logo path
import doctorProfileIcon from '../assets/images/expand-doctor-profile.png'; // Add the correct path for the doctor icon

const Header = () => {
  return (
    <header className="app-header">
      <img src={logo} alt="Company Logo" className="company-logo" />
      <div className="doctor-info">
        <span className="doctor-name">Dr. Sam Harris, MD (Dermatology Department)</span>
        <img src={doctorProfileIcon} alt="Doctor Profile" className="doctor-profile-button" />
      </div>
    </header>
  );
};

export default Header;
