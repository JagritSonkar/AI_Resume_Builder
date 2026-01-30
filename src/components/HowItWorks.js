import React from 'react';
import './HowItWorks.css';

function HowItWorks({ darkMode }) {
  const steps = [
    {
      number: '01',
      title: 'Fill Your Details',
      description: 'Enter your personal information, skills, experience, education, and projects in our simple form.',
      icon: '📝'
    },
    {
      number: '02',
      title: 'AI Generates Resume',
      description: 'Our advanced AI analyzes your input and enhances it with professional language and formatting.',
      icon: '🤖'
    },
    {
      number: '03',
      title: 'Download PDF',
      description: 'Review your AI-powered resume and download it as a high-quality PDF ready to send to employers.',
      icon: '📥'
    }
  ];

  return (
    <section className="how-it-works" id="how-it-works">
      <div className="how-it-works-header">
        <h2 className="section-title">
          How It <span className="gradient-text">Works</span>
        </h2>
        <p className="section-subtitle">
          Create your professional resume in just 3 simple steps
        </p>
      </div>

      <div className="steps-container">
        {steps.map((step, index) => (
          <div 
            key={index} 
            className="step-card"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="step-number">{step.number}</div>
            <div className="step-icon">{step.icon}</div>
            <h3 className="step-title">{step.title}</h3>
            <p className="step-description">{step.description}</p>
            
            {index < steps.length - 1 && (
              <div className="step-connector">
                <svg width="100" height="40" viewBox="0 0 100 40">
                  <path 
                    d="M 0 20 Q 50 0, 100 20" 
                    stroke="url(#gradient)" 
                    strokeWidth="2" 
                    fill="none"
                    strokeDasharray="5,5"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#667eea" />
                      <stop offset="100%" stopColor="#764ba2" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="cta-section">
        <h3>Ready to Build Your Resume?</h3>
        <p>Join thousands of job seekers who landed their dream jobs</p>
        <button 
          className="btn btn-primary"
          onClick={() => document.getElementById('resume-builder')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Get Started Now
        </button>
      </div>
    </section>
  );
}

export default HowItWorks;

