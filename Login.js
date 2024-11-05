import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase'; 
import { signInWithEmailAndPassword } from 'firebase/auth'; 
import '../styles/Login.css'; // Import your CSS styles

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState(''); // State for success message
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password); 
      setSuccessMessage(`Welcome, ${email.split('@')[0]}!`); // Set the welcome message
      setTimeout(() => {
        navigate('/');  // Navigate to the home page after 2 seconds
      }, 2000); // Delay for 2 seconds to show the message
    } catch (error) {
      console.error('Error logging in', error);
      alert(`${error.code}: ${error.message}`); // Display detailed error message
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin} className="login-form">
        <h2>Login</h2>
        {successMessage && <div className="success-message">{successMessage}</div>} {/* Display success message */}
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter your password"
          />
        </div>
        <button type="submit" className="login-button">Login</button>
        <span className="sign-up-link" onClick={() => navigate('/signup')}>
          Don't have an account? Sign up
        </span>
      </form>
    </div>
  );
};

export default Login;
