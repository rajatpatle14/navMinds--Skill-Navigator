import React from "react";

function UploadFile({ onFileSelect }) {
  const handleFileChange = (e) => {
    onFileSelect(e.target.files[0]);
  };

  return (
    <div className="upload-container">
      <h3>Upload files</h3>
      <input type="file" onChange={handleFileChange} />
    </div>
  );
}

export default UploadFile;
