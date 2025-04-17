// src/components/RegisterForm.jsx
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { registerUser } from '../api';
import './auth.css';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    role: 'job_seeker',
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
      const response = await registerUser(formData);
      setMessage(`${response.message} Registered as ${response.role}.`);
    } catch (err) {
      setError(err.error || 'Registration failed. Please try again.');
    }
  };

  return (
    <div className="auth-container page-register">
      <div className="auth-card">
        {/* Mobile banner - only shown on small screens */}
        <div className="mobile-auth-banner">
          <h3>Start Your Journey</h3>
          <p>Join our community of professionals and employers</p>
        </div>
        
        {/* Left side - form */}
        <div className="auth-form-container">
          <div className="auth-form-header">
            <h2>Create Account</h2>
            <p>Join our platform to find your dream job or perfect candidate</p>
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
              <label className="form-label" htmlFor="email">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>
            
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
                placeholder="Choose a username"
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="form-control"
                value={formData.password}
                onChange={handleChange}
                required
                minLength="6"
                placeholder="Minimum 6 characters"
              />
            </div>

            <div className="form-group">
              <label className="form-label">
                I want to join as:
              </label>
              <div className="auth-role-selector">
                <label className={`auth-role-option ${formData.role === 'job_seeker' ? 'selected' : ''}`}>
                  <input
                    type="radio"
                    name="role"
                    value="job_seeker"
                    checked={formData.role === 'job_seeker'}
                    onChange={handleChange}
                    style={{ display: 'none' }}
                  />
                  <span>Job Seeker</span>
                </label>
                <label className={`auth-role-option ${formData.role === 'recruiter' ? 'selected' : ''}`}>
                  <input
                    type="radio"
                    name="role"
                    value="recruiter"
                    checked={formData.role === 'recruiter'}
                    onChange={handleChange}
                    style={{ display: 'none' }}
                  />
                  <span>Recruiter</span>
                </label>
              </div>
            </div>

            <button 
              type="submit"
              className="btn btn-primary auth-submit-btn"
            >
              Create Account
            </button>
            
            <div className="auth-divider">
              <div className="auth-divider-line"></div>
              <span>OR</span>
              <div className="auth-divider-line"></div>
            </div>
            
            <div className="auth-alternate-action">
              <p>Already have an account?</p>
              <Link
                to="/login"
                className="btn btn-secondary"
              >
                Sign In
              </Link>
            </div>
          </form>
        </div>

        {/* Right side - illustration */}
        <div className="auth-sidebar">
          <div className="auth-sidebar-content">
            <h2>Start Your Journey</h2>
            <p>
              Creating an account is the first step towards finding your ideal job or candidate. Our AI-powered matching system connects the right talent with the right opportunity.
            </p>

            <div className="auth-testimonial">
              <div className="auth-testimonial-header">
                <div className="auth-testimonial-icon">
                  "
                </div>
                <span className="auth-testimonial-title">
                  Success Story
                </span>
              </div>
              <p className="auth-testimonial-text">
                "I found my dream job within two weeks of creating my profile. The AI matching was spot on with my skills and career goals!"
              </p>
              <div className="auth-testimonial-author">
                — Alex Chen, Software Engineer
              </div>
            </div>
          </div>

          {/* Background decoration */}
          <div className="auth-decoration-circle circle-1"></div>
          <div className="auth-decoration-circle circle-2"></div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;