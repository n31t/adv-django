import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterForm from './components/RegisterForm';
import VerifyEmail from './components/VerifyEmail';
import Login from './components/Login';
import PasswordResetRequest from './components/PasswordResetRequest';
import PasswordResetConfirm from './components/PasswordResetConfirm';
import ResumeUpload from './components/ResumeUpload';
import ResumeFeedback from './components/ResumeFeedback';
import JobList from './components/JobList';
import JobCreate from './components/JobCreate';
import JobManage from './components/JobManage';
import JobRecommendations from './components/JobRecommendations';
import MyResume from "./components/MyResume";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
      <Router>
      <div className="App">
        <Navbar />
        <main className="container" style={{ padding: '20px 0', minHeight: 'calc(100vh - 200px)' }}>
          <Routes>
            <Route path="/" element={<RegisterForm />} />
            <Route path="/verify-email" element={<VerifyEmail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/password-reset" element={<PasswordResetRequest />} />
            <Route path="/password-reset-confirm" element={<PasswordResetConfirm />} />
            <Route path="/upload-resume" element={<ResumeUpload />} />
            <Route path="/resume-feedback" element={<ResumeFeedback />} />
            <Route path="/jobs" element={<JobList />} />
            <Route path="/jobs/create" element={<JobCreate />} />
            <Route path="/jobs/manage" element={<JobManage />} />
            <Route path="/jobs/recommendations" element={<JobRecommendations />} />
            <Route path="/my-resume" element={<MyResume />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;