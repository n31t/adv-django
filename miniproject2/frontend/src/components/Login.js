// src/components/Login.jsx
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { loginUser } from '../api';
import './auth.css'; // Will create this shared CSS file later

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');
    try {
      const response = await loginUser(formData);
      if (response.error) {
        setError(response.error);
        return;
      }
      setMessage(response.message || 'Login successful!');
      // setMessage('Login successful!');
      // Redirect to /jobs after successful login
      setTimeout(() => navigate('/jobs'), 1000); // Optional delay for message visibility
    } catch (err) {
      setError(err.error || 'Login failed. Please try again.');
    }
  };

  return (
    <div className="auth-container page-login">
      <div className="auth-card">
        {/* Mobile banner - only shown on small screens */}
        <div className="mobile-auth-banner">
          <h3>Welcome Back</h3>
          <p>Sign in to continue your journey</p>
        </div>
      
        {/* Left side - decorative */}
        <div className="auth-sidebar">
          <div className="auth-sidebar-content">
            <h2>Welcome to JobMatch</h2>
            <p>
              Discover opportunities that match your skills and experience. Your dream job is just a sign-in away.
            </p>
            <div className="auth-features">
              <div className="auth-feature">
                <div className="auth-feature-icon">✓</div>
                <span>Easy Application</span>
              </div>
              <div className="auth-feature">
                <div className="auth-feature-icon">⚡</div>
                <span>AI Matching</span>
              </div>
            </div>
          </div>
          {/* Background decoration */}
          <div className="auth-decoration-circle circle-1"></div>
          <div className="auth-decoration-circle circle-2"></div>
        </div>

        {/* Right side - login form */}
        <div className="auth-form-container">
          <div className="auth-form-header">
            <h2>Sign In</h2>
            <p>Enter your credentials to access your account</p>
          </div>

          {message && (
            <div className="alert alert-info" role="alert">
              {message}
            </div>
          )}
          
          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label" htmlFor="username">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="form-control"
                value={formData.username}
                onChange={handleChange}
                required
                placeholder="Enter your username"
              />
            </div>
            
            <div className="form-group">
              <div className="form-label-with-link">
                <label className="form-label" htmlFor="password">
                  Password
                </label>
                <Link to="/password-reset" className="form-link">
                  Forgot password?
                </Link>
              </div>
              <input
                type="password"
                id="password"
                name="password"
                className="form-control"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="Enter your password"
              />
            </div>

            <button 
              type="submit" 
              className="btn btn-primary auth-submit-btn"
            >
              Sign In
            </button>
            
            <div className="auth-divider">
              <div className="auth-divider-line"></div>
              <span>OR</span>
              <div className="auth-divider-line"></div>
            </div>
            
            <div className="auth-alternate-action">
              <p>Don't have an account yet?</p>
              <Link
                to="/"
                className="btn btn-secondary"
              >
                Create Account
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;