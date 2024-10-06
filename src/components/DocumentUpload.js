import React from 'react';
import './styles/DocumentUpload.css'; // Import the CSS file for styling
import uploadIcon from '../assets/images/upload-document-icon.png'; // Upload icon

const DocumentUpload = ({ documents, setDocuments }) => {
  const handleUpload = (event) => {
    const files = Array.from(event.target.files);
    
    // Convert uploaded files into displayable images
    const newDocuments = files.map(file => ({
      name: file.name,
      imgSrc: URL.createObjectURL(file), // Create an object URL for the file
    }));
    
    setDocuments([...documents, ...newDocuments]); // Add the uploaded files to the current document list
  };

  return (
    <div className="document-upload-container">
      <h3 className="documents-title">Documents</h3>

      {/* Divider Line */}
      <hr className="divider-line" />

      {/* Document Preview Carousel */}
      <div className="document-carousel">
        {documents.map((doc, index) => (
          <div key={index} className="document-item">
            <img src={doc.imgSrc} alt={doc.name} className="document-thumbnail" />
            <span className="document-name">{doc.name}</span>
          </div>
        ))}

        {/* Upload More Files Button */}
        <label className="upload-more">
          <img src={uploadIcon} alt="Upload More" className="upload-icon" />
          <input
            id="upload"
            type="file"
            multiple
            onChange={handleUpload}
            className="upload-input"
          />
        </label>
      </div>
    </div>
  );
};

export default DocumentUpload;
