// import React, { useState } from 'react';
// import OrganizationLogin from './components/OrganizationLogin';

// import UploadCertificate from './components/UploadCertificate'; // Import your UploadCertificate component
// import CertificateHistory from './components/CertificateHistory'; // Import your CertificateHistory component

// function App() {
//   const [loggedIn, setLoggedIn] = useState(false);
//   const [selectedOption, setSelectedOption] = useState(null);

//   // Define functions to handle login and logout
//   const handleLogin = () => {
//     // Perform MetaMask login, and if successful, set loggedIn to true
//     // You can implement this part based on your MetaMask integration
//     // For simplicity, we'll just set it to true here
//     setLoggedIn(true);
//   };

//   const handleLogout = () => {
//     // Handle logout, and set loggedIn to false
//     // You can implement this based on your requirements
//     // For simplicity, we'll just set it to false here
//     setLoggedIn(false);
//     setSelectedOption(null); // Reset selected option on logout
//   };

//   const handleOptionSelect = (option) => {
//     setSelectedOption(option);
//   };

//   return (
//     <div className="App">
//       {/* Other components and content */}
//       {loggedIn ? (
//         /* Render options for logged-in users */
//         <div>
//           <h2>Logged In as Organization</h2>
//           <button onClick={handleLogout}>Logout</button>
//           {/* Add buttons for Upload Certificate and View Certificate History */}
//           <button onClick={() => handleOptionSelect('upload')}>Upload</button>
//           <button onClick={() => handleOptionSelect('history')}>History</button>
//         </div>
//       ) : (
//         /* Render the login component when not logged in */
//         <OrganizationLogin onLogin={handleLogin} />
//       )}

//       {selectedOption === 'upload' && <UploadCertificate />}
//       {selectedOption === 'history' && <CertificateHistory />}
//     </div>
//   );
// }

// export default App;


import React, { useState, useEffect } from 'react';
import './App.css';
import OrganizationLogin from './components/OrganizationLogin';
import UploadCertificate from './components/UploadCertificate';
import CertificateHistory from './components/CertificateHistory';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  // Check if the user is already logged in when the page loads
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn) {
      setLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    // Perform MetaMask login, and if successful, set loggedIn to true
    // You can implement this part based on your MetaMask integration
    // For simplicity, we'll just set it to true here

    // Set the isLoggedIn flag in localStorage
    localStorage.setItem('isLoggedIn', 'true');
    setLoggedIn(true);
  };

  const handleLogout = () => {
    // Handle logout, and set loggedIn to false
    // You can implement this based on your requirements
    // For simplicity, we'll just set it to false here

    // Remove the isLoggedIn flag from localStorage
    localStorage.removeItem('isLoggedIn');
    setLoggedIn(false);
    setSelectedOption(null); // Reset selected option on logout
  };

  const renderContent = () => {
    if (!loggedIn) {
      return <OrganizationLogin onLogin={handleLogin} />;
    }

    switch (selectedOption) {
      case 'upload':
        return <UploadCertificate />;
      case 'CertificateHistory':
        return <CertificateHistory />;
      default:
        return (
          <div>
            <h2>Welcome to the Organization Dashboard</h2>
            <button onClick={() => setSelectedOption('upload')}>Upload</button>
            <button onClick={() => setSelectedOption('CertificateHistory')}>CertificateHistory</button>
            <button onClick={handleLogout}>Logout</button>
          </div>
        );
    }
  };

  return (
    <div className="App">
      {renderContent()}
    </div>
  );
}

export default App;

