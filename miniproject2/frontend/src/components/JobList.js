import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getJobList } from '../api';

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const data = await getJobList();
        setJobs(data.jobs);
      } catch (err) {
        setError('Failed to load jobs');
      }
    };
    fetchJobs();
  }, []);

  const handleManageJobs = () => {
    navigate('/jobs/manage');
  };

  const handleCreateJob = () => {
    navigate('/jobs/create');
  };

  const handleRecommendations = () => {
    navigate('/jobs/recommendations');
  };

  return (
    <div className="container">
      <div style={{ 
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        marginBottom: '30px'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <h1 style={{ 
            color: 'var(--text-dark)', 
            fontSize: '32px', 
            margin: 0,
            fontWeight: '600'
          }}>
            Available Jobs
          </h1>
          
          <button
            onClick={handleCreateJob}
            className="btn btn-primary"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <span>+</span> Post a Job
          </button>
        </div>
        
        <p style={{ color: 'var(--text-light)', margin: 0 }}>
          Browse through the latest job postings from companies looking for talent like you.
        </p>
      </div>
      
      <div style={{ 
        display: 'flex', 
        gap: '15px',
        marginBottom: '25px',
        flexWrap: 'wrap'
      }}>
        <button
          onClick={handleManageJobs}
          className="btn btn-secondary"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          <span>📋</span> Manage My Jobs
        </button>
        <button
          onClick={handleRecommendations}
          className="btn btn-secondary"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          <span>✨</span> Job Recommendations
        </button>
      </div>
      
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
      
      {jobs.length === 0 && !error && (
        <div className="card" style={{
          textAlign: 'center',
          padding: '40px 20px'
        }}>
          <div style={{ marginBottom: '15px' }}>
            <span style={{ fontSize: '48px' }}>🔍</span>
          </div>
          <h3 style={{ color: 'var(--text-dark)', marginBottom: '10px' }}>No Jobs Found</h3>
          <p style={{ color: 'var(--text-light)', maxWidth: '400px', margin: '0 auto' }}>
            There are no job listings available at the moment. Check back later or post a job yourself!
          </p>
        </div>
      )}
      
      <div style={{ display: 'grid', gap: '20px' }}>
        {jobs.map((job) => (
          <div 
            key={job.id} 
            className="card"
            style={{
              padding: '24px',
              transition: 'transform 0.2s, box-shadow 0.2s',
              cursor: 'pointer',
              marginBottom: '0',
              ':hover': {
                transform: 'translateY(-3px)',
                boxShadow: 'var(--shadow-md)'
              }
            }}
            onClick={() => {/* View job details functionality */}}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <h3 style={{ margin: '0 0 10px 0', color: 'var(--text-dark)', fontSize: '20px' }}>{job.title}</h3>
              <div style={{ 
                backgroundColor: 'var(--primary-light)', 
                padding: '6px 12px', 
                borderRadius: 'var(--radius-sm)', 
                fontSize: '13px',
                color: 'var(--primary-color)',
                fontWeight: '500'
              }}>
                {new Date(job.created_at).toLocaleDateString()}
              </div>
            </div>
            
            <div style={{ display: 'flex', gap: '15px', marginBottom: '12px', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <span style={{ color: 'var(--text-light)' }}>🏢</span>
                <span style={{ fontWeight: '500', color: 'var(--text-medium)' }}>{job.company}</span>
              </div>
              {job.location && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <span style={{ color: 'var(--text-light)' }}>📍</span>
                  <span style={{ color: 'var(--text-medium)' }}>{job.location}</span>
                </div>
              )}
            </div>
            
            <p style={{ 
              margin: '16px 0', 
              color: 'var(--text-medium)',
              lineHeight: '1.6',
              borderLeft: '3px solid var(--primary-color)',
              paddingLeft: '16px',
              backgroundColor: 'var(--background-gray)',
              padding: '12px 16px',
              borderRadius: '0 var(--radius-sm) var(--radius-sm) 0'
            }}>
              {job.description}
            </p>
            
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: '16px',
              paddingTop: '16px',
              borderTop: '1px solid var(--border-color)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <span style={{ color: 'var(--text-light)', fontSize: '14px' }}>Posted by:</span>
                <span style={{ fontWeight: '500', color: 'var(--text-medium)', fontSize: '14px' }}>{job.posted_by}</span>
              </div>
              
              <button 
                className="btn btn-primary"
                style={{
                  padding: '8px 16px',
                  fontSize: '14px'
                }}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobList;