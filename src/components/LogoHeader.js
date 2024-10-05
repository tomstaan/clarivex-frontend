import React from 'react';
import './styles/LogoHeader.css';
import clarityLogo from '../assets/images/clarity-tool-logo.png'; // Import the logo image

const LogoHeader = () => {
  return (
    <div className="logo-header">
      <span className="tool-text">Clarity AI Diagnosis Tool</span>
      <img src={clarityLogo} alt="Clarity Tool Logo" className="logo" />
    </div>
  );
};

export default LogoHeader;
