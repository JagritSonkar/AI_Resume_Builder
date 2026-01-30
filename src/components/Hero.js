import React from 'react';
import './Hero.css';

function Hero({ scrollToBuilder, scrollToTemplates, darkMode }) {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        {/* Left Content */}
        <div className="hero-content fade-in-up">
          <h1 className="hero-title">
            Build Your <span className="gradient-text">AI Powered</span> Resume in Minutes
          </h1>
          <p className="hero-subtitle">
            Create ATS-friendly resumes with the power of AI. Stand out from the crowd and land your dream job faster.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={scrollToBuilder}>
              Build Resume
            </button>
            <button className="btn btn-secondary" onClick={scrollToTemplates}>
              View Templates
            </button>
          </div>
          
          {/* Stats */}
          <div className="hero-stats">
            <div className="stat-item">
              <h3 className="gradient-text">10K+</h3>
              <p>Resumes Created</p>
            </div>
            <div className="stat-item">
              <h3 className="gradient-text">95%</h3>
              <p>ATS Pass Rate</p>
            </div>
            <div className="stat-item">
              <h3 className="gradient-text">4.9/5</h3>
              <p>User Rating</p>
            </div>
          </div>
        </div>

        {/* Right Illustration */}
        <div className="hero-illustration fade-in-up">
          <div className="resume-preview-card">
            <div className="card-header">
              <div className="card-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
            </div>
            <div className="card-content">
              <div className="preview-line long"></div>
              <div className="preview-line medium"></div>
              <div className="preview-line short"></div>
              <div className="preview-section">
                <div className="preview-line medium"></div>
                <div className="preview-line long"></div>
              </div>
              <div className="preview-section">
                <div className="preview-line short"></div>
                <div className="preview-line medium"></div>
                <div className="preview-line long"></div>
              </div>
            </div>
            <div className="ai-badge">
              <span className="ai-icon">✨</span>
              <span>AI Powered</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

