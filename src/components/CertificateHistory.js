import React, { useEffect, useState } from 'react';

const CertificateHistory = () => {
  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    // Fetch the organization's certificate history from the blockchain or a backend API
    // Update the 'certificates' state with the fetched data
  }, []);

  return (
    <div>
      <h2>Certificate History</h2>
      <ul>
        {certificates.map((certificate, index) => (
          <li key={index}>
            {/* Display certificate details */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CertificateHistory;
