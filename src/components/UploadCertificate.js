import React, { useState } from 'react';

const UploadCertificate = () => {
  const [certificateData, setCertificateData] = useState({
    image: null,
    name: '',
    title: '',
    recipientAddress: '',
    date: '',
    authority: '',
  });

  const handleFileUpload = (e) => {
    // Handle file upload and set the image in the state
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCertificateData({ ...certificateData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, including sending data to the blockchain and storing it
    console.log('Certificate Data:', certificateData);
    // Add code here to send data to the blockchain
  };

  return (
    <div>
      <h2>Upload Certificate</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="file" onChange={handleFileUpload} />
        </div>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={certificateData.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Certificate Title:</label>
          <input type="text" name="title" value={certificateData.title} onChange={handleChange} required />
        </div>
        <div>
          <label>Recipient Address:</label>
          <input type="text" name="recipientAddress" value={certificateData.recipientAddress} onChange={handleChange} required />
        </div>
        <div>
          <label>Date:</label>
          <input type="text" name="date" value={certificateData.date} onChange={handleChange} required />
        </div>
        <div>
          <label>Authority who issued certificate:</label>
          <input type="text" name="authority" value={certificateData.authority} onChange={handleChange} required />
        </div>
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default UploadCertificate;
