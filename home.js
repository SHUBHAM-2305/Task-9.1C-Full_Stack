import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';
import { FaSearch, FaPaperPlane, FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/logout'); // Navigate to the Logout page
  };

  return (
    <div className="home-container">
      <header className="header">
        <h1 className="title">Shuham_Rana@Deakin</h1>
        <div className="search-container">
          <input type="text" placeholder="Search" className="search-bar" />
          <FaSearch className="search-icon" />
        </div>
        <div className="button-container">
          <button className="post-button" onClick={() => navigate('/post')}>
            <FaPaperPlane /> Post
          </button>
          <button className="login-button" onClick={() => navigate('/login')}>
            <FaSignInAlt /> Login
          </button>
          <button className="logout-button" onClick={handleLogout}>
            <FaSignOutAlt /> Logout
          </button>
        </div>
      </header>
    </div>
  );
};

export default Home;
