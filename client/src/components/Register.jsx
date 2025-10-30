import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/register.css';

function Register() {
  const [form, setForm] = useState({
    email: '',
    dob: '',
    gender: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ Updated handleSubmit function
const handleSubmit = async e => {
  e.preventDefault();
  try {
    const res = await axios.post('http://localhost:3001/api/auth/register', form); // ✅ FIXED
    alert(res.data.message);
    navigate('/login');
  } catch (err) {
    alert(err.response?.data?.message || 'Registration failed');
  }
};


  return (
    <div className="auth-container">
      <h2>Register</h2>
      <form className="auth-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email Address:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          required
          onChange={handleChange}
        />

        <label htmlFor="dob">Date of Birth:</label>
        <input
          type="date"
          id="dob"
          name="dob"
          required
          onChange={handleChange}
        />

        <label htmlFor="gender">Gender:</label>
        <select
          id="gender"
          name="gender"
          required
          onChange={handleChange}
        >
          <option value="">Select your gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Create a password"
          required
          onChange={handleChange}
        />

        <button type="submit" className="auth-btn">Register</button>
      </form>

      <div className="auth-footer">
        <p>Already have an account? <Link to="/Login">Login here</Link></p>
      </div>
    </div>
  );
}

export default Register;
