import React from 'react';
import './styles/DocumentUpload.css'; // Import the CSS file for styling
import sampleScanDocument from '../assets/images/sample-patient-scan-document.jpg'; // Dummy image
import sampleDocumentImage from '../assets/images/sample-patient-document-image.jpg'; // Dummy document image
import uploadIcon from '../assets/images/upload-document-icon.png'; // Upload icon

const DocumentUpload = ({ documents, setDocuments }) => {
  const handleUpload = (event) => {
    const files = Array.from(event.target.files);
    setDocuments([...documents, ...files]);
  };

  // Dummy data for now, replace this with dynamic uploaded documents
  const dummyDocuments = [
    { name: 'patient-scan-image-1.jpg', imgSrc: sampleScanDocument },
    { name: 'patient-scan-image-2.jpg', imgSrc: sampleDocumentImage }
  ];

  return (
    <div className="document-upload-container">
      <h3 className="documents-title">Documents</h3>

      {/* Divider Line */}
      <hr className="divider-line" />

      {/* Document Preview Carousel */}
      <div className="document-carousel">
        {dummyDocuments.map((doc, index) => (
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
