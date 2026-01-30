import React from 'react';
import './Features.css';

function Features({ darkMode }) {
  const features = [
    {
      icon: '🤖',
      title: 'AI Resume Writing',
      description: 'Our advanced AI helps you write professional resume content that stands out to recruiters.'
    },
    {
      icon: '✅',
      title: 'ATS Friendly',
      description: 'All templates are optimized to pass Applicant Tracking Systems with 95% success rate.'
    },
    {
      icon: '🎨',
      title: 'Custom Templates',
      description: 'Choose from beautiful, professionally designed templates that match your industry.'
    },
    {
      icon: '📥',
      title: 'Instant Download',
      description: 'Download your resume as a high-quality PDF instantly with just one click.'
    },
    {
      icon: '💡',
      title: 'Smart Suggestions',
      description: 'Get intelligent suggestions for skills, experience, and achievements based on your role.'
    },
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Create a professional resume in under 5 minutes. No complex forms or lengthy processes.'
    }
  ];

  return (
    <section className="features" id="features">
      <div className="features-header">
        <h2 className="section-title">
          Why Choose <span className="gradient-text">AI Resume Builder</span>
        </h2>
        <p className="section-subtitle">
          Everything you need to create a winning resume that gets you hired
        </p>
      </div>

      <div className="features-grid">
        {features.map((feature, index) => (
          <div 
            className="feature-card card" 
            key={index}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;

