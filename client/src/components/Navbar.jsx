// Navbar.jsx
import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';
import profileImage from '../assests/Images/profileimage.jpg'

function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState('light');
  const navigate = useNavigate();

  // Load user from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // // Load & apply theme
  // useEffect(() => {
  //   const storedTheme = localStorage.getItem('theme') || 'light';
  //   setTheme(storedTheme);
  //   document.body.className = storedTheme === 'dark' ? 'dark-theme' : 'light-theme';
  // }, []);

  // // Toggle between light and dark themes
  // const toggleTheme = () => {
  //   const newTheme = theme === 'light' ? 'dark' : 'light';
  //   setTheme(newTheme);
  //   localStorage.setItem('theme', newTheme);
  //   document.body.className = newTheme === 'dark' ? 'dark-theme' : 'light-theme';
  // };

  // Logout user
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <header className={`navbar ${theme}`}>
      <div className="navbar-brand">
        <h1>legARTsy</h1>
        <p>YourART.YourLEGACY</p>
      </div>

      <nav className="navbar-links">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/collections">Arts Collections</NavLink>
        <NavLink to="/exhibitions">Exhibitions</NavLink>
        <NavLink to="/visit">Visit</NavLink>
        <NavLink to="/cart">Cart</NavLink>

        {/* Theme toggle
        <button onClick={toggleTheme} className="theme-toggle">
          {theme === 'dark' ? '🌙 Dark' : '☀️ Light'}
        </button> */}

        {/* User profile icon + dropdown */}
        {user ? (
          <div className="profile-menu">
            <img
              src={user.profileImage || "/Images/profileImage"}
              alt="Profile"
              className="profile-icon"
              onClick={() => setShowDropdown(!showDropdown)}
            />
            {showDropdown && (
              <div className="dropdown">
                <NavLink to="/profile" onClick={() => setShowDropdown(false)}>Profile</NavLink>
                <button onClick={handleLogout}>Logout</button>
              </div>
            )}
          </div>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
