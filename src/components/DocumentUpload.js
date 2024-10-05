import React from 'react';

const DocumentUpload = ({ documents, setDocuments }) => {
  const handleUpload = (event) => {
    const files = Array.from(event.target.files);
    setDocuments([...documents, ...files]);
  };

  return (
    <div className="document-upload">
      <label htmlFor="upload">
        <img src="/upload-document-icon.png" alt="Upload" />
      </label>
      <input id="upload" type="file" multiple onChange={handleUpload} />
      <div className="document-preview">
        {documents.map((doc, index) => (
          <img key={index} src={URL.createObjectURL(doc)} alt="document" />
        ))}
      </div>
    </div>
  );
};

export default DocumentUpload;
