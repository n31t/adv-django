import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer style={{
      backgroundColor: 'var(--background-light)',
      borderTop: '1px solid var(--border-color)',
      padding: '40px 0',
      marginTop: '60px'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '30px',
          marginBottom: '30px'
        }}>
          <div>
            <h4 style={{ fontSize: '20px', marginBottom: '16px', color: 'var(--text-dark)' }}>JobMatch</h4>
            <p style={{ color: 'var(--text-light)', lineHeight: '1.6' }}>
              Connecting talented professionals with amazing job opportunities. Find your dream job today!
            </p>
          </div>
          
          <div>
            <h5 style={{ fontSize: '16px', marginBottom: '16px', color: 'var(--text-dark)' }}>Quick Links</h5>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '10px' }}>
                <Link to="/jobs" style={{ color: 'var(--text-medium)', textDecoration: 'none' }}>
                  Browse Jobs
                </Link>
              </li>
              <li style={{ marginBottom: '10px' }}>
                <Link to="/jobs/recommendations" style={{ color: 'var(--text-medium)', textDecoration: 'none' }}>
                  Job Recommendations
                </Link>
              </li>
              <li style={{ marginBottom: '10px' }}>
                <Link to="/my-resume" style={{ color: 'var(--text-medium)', textDecoration: 'none' }}>
                  Resume Management
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h5 style={{ fontSize: '16px', marginBottom: '16px', color: 'var(--text-dark)' }}>Resources</h5>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '10px' }}>
                <Link to="/" style={{ color: 'var(--text-medium)', textDecoration: 'none' }}>
                  Resume Tips
                </Link>
              </li>
              <li style={{ marginBottom: '10px' }}>
                <Link to="/" style={{ color: 'var(--text-medium)', textDecoration: 'none' }}>
                  Interview Preparation
                </Link>
              </li>
              <li style={{ marginBottom: '10px' }}>
                <Link to="/" style={{ color: 'var(--text-medium)', textDecoration: 'none' }}>
                  Career Advice
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h5 style={{ fontSize: '16px', marginBottom: '16px', color: 'var(--text-dark)' }}>Contact</h5>
            <p style={{ color: 'var(--text-medium)', marginBottom: '8px' }}>
              <span style={{ marginRight: '8px' }}>✉️</span> support@jobmatch.com
            </p>
            <p style={{ color: 'var(--text-medium)', marginBottom: '8px' }}>
              <span style={{ marginRight: '8px' }}>📞</span> (555) 123-4567
            </p>
            <div style={{ display: 'flex', gap: '15px', marginTop: '15px' }}>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary-color)' }}>
                Twitter
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary-color)' }}>
                LinkedIn
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary-color)' }}>
                Facebook
              </a>
            </div>
          </div>
        </div>
        
        <div style={{ 
          borderTop: '1px solid var(--border-color)', 
          paddingTop: '20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '10px'
        }}>
          <p style={{ color: 'var(--text-light)', margin: 0 }}>
            © {year} JobMatch. All rights reserved.
          </p>
          <div>
            <Link to="/" style={{ color: 'var(--text-medium)', marginRight: '20px', textDecoration: 'none' }}>
              Privacy Policy
            </Link>
            <Link to="/" style={{ color: 'var(--text-medium)', textDecoration: 'none' }}>
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 