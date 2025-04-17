import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Check if token exists in localStorage
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    setIsLoggedIn(false);
    navigate('/login');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <Link to={isLoggedIn ? '/jobs' : '/'}>
            JobMatch
          </Link>
        </div>
        
        {/* Mobile menu toggle */}
        <button 
          className="navbar-toggle" 
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>

        {/* Desktop Navigation */}
        <div className="navbar-menu">
          {isLoggedIn ? (
            <>
              <Link 
                to="/jobs" 
                className={location.pathname === '/jobs' ? 'active' : ''}
              >
                Jobs
              </Link>
              <Link 
                to="/jobs/recommendations" 
                className={location.pathname === '/jobs/recommendations' ? 'active' : ''}
              >
                Recommendations
              </Link>
              <Link 
                to="/my-resume" 
                className={location.pathname === '/my-resume' ? 'active' : ''}
              >
                My Resume
              </Link>
              <button onClick={handleLogout}>
                Sign Out
              </button>
            </>
          ) : (
            <>
              <Link to="/login">
                Sign In
              </Link>
              <Link to="/" className="btn btn-primary">
                Sign Up
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="mobile-menu">
            {isLoggedIn ? (
              <>
                <Link 
                  to="/jobs" 
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Jobs
                </Link>
                <Link 
                  to="/jobs/recommendations" 
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Recommendations
                </Link>
                <Link 
                  to="/my-resume" 
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  My Resume
                </Link>
                <button
                  onClick={() => {
                    handleLogout();
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link 
                  to="/login" 
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Sign In
                </Link>
                <Link 
                  to="/" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mobile-menu-signup"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 