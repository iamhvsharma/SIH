// import React, { useState } from 'react';

// const OrganizationLogin = ({ onLogin }) => {
//   const [metaMaskAddress, setMetaMaskAddress] = useState('');

//   const handleLogin = async () => {
//     try {
//       // Request MetaMask for access to the user's Ethereum account
//       const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });

//       // Get the selected account
//       const selectedAddress = accounts[0];

//       // Now you have the user's MetaMask address (selectedAddress)
//       setMetaMaskAddress(selectedAddress);

//       // Perform authentication or other actions here

//       // Call the onLogin function to notify the App component of the successful login
//       onLogin();

//       // Set the isLoggedIn flag in localStorage
//       localStorage.setItem('isLoggedIn', 'true');
//     } catch (error) {
//       // Handle errors (e.g., user rejected the request)
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <h2>Organization Login</h2>
//       <form onSubmit={handleLogin}>
//         <div>
//           <label>MetaMask Address:</label>
//           <input
//             type="text"
//             value={metaMaskAddress}
//             onChange={(e) => setMetaMaskAddress(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Log In</button>
//       </form>
//     </div>
//   );
// };

// export default OrganizationLogin;


// OrganizationLogin.js
import React from 'react';

const OrganizationLogin = () => {
  const handleLogin = async () => {
    try {
      // Check if MetaMask is installed
      if (window.ethereum) {
        // Request MetaMask for access to the user's Ethereum account
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        
        // User is logged in automatically with the current MetaMask account
        // You can add further logic or navigate to the organization dashboard here
      } else {
        // MetaMask is not installed or not connected
        console.error('MetaMask is not installed or not connected.');
      }
    } catch (error) {
      // Handle errors (e.g., user rejected the request)
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Hello, Login as Organization</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default OrganizationLogin;
