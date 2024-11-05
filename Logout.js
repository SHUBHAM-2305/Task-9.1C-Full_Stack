// Logout.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import '../styles/Logout.css'; // Use similar styling as Login.css

const Logout = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      // Re-authenticate the user with email and password
      await signInWithEmailAndPassword(auth, email, password);
      await signOut(auth); // Sign out the user
      setSuccessMessage(`Logged out successfully, ${email.split('@')[0]}!`);
      setTimeout(() => {
        navigate('/login'); // Redirect to login page after 2 seconds
      }, 2000);
    } catch (error) {
      console.error('Error logging out', error);
      alert(`${error.code}: ${error.message}`); // Display detailed error message
    }
  };

  return (
    <div className="logout-container">
      <form onSubmit={handleLogout} className="logout-form">
        <h2>Logout</h2>
        {successMessage && <div className="success-message">{successMessage}</div>} {/* Success message */}
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <div className="input-wrapper">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
            />
          </div>
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <div className="input-wrapper">
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
            />
          </div>
        </div>
        <button type="submit" className="logout-button">Confirm Logout</button>
      </form>
    </div>
  );
};

export default Logout;
