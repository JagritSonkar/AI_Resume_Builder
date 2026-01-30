import React from 'react';
import './Templates.css';

function Templates({ selectedTemplate, setSelectedTemplate, darkMode }) {
  const templates = [
    {
      id: 'modern',
      name: 'Modern',
      color: '#667eea',
      description: 'Clean and contemporary design perfect for tech roles',
      icon: '💼'
    },
    {
      id: 'professional',
      name: 'Professional',
      color: '#059669',
      description: 'Traditional layout ideal for corporate positions',
      icon: '🎯'
    },
    {
      id: 'creative',
      name: 'Creative',
      color: '#dc2626',
      description: 'Bold and unique design for creative industries',
      icon: '🎨'
    },
    {
      id: 'minimal',
      name: 'Minimal',
      color: '#6366f1',
      description: 'Simple and elegant design that focuses on content',
      icon: '✨'
    }
  ];

  // Handle template selection and scroll to resume builder
  const handleTemplateSelect = (templateId) => {
    setSelectedTemplate(templateId);

    // Smooth scroll to resume builder section
    setTimeout(() => {
      const resumeBuilder = document.getElementById('resume-builder');
      if (resumeBuilder) {
        resumeBuilder.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <section className="templates" id="templates">
      <div className="templates-header">
        <h2 className="section-title">
          Choose Your <span className="gradient-text">Perfect Template</span>
        </h2>
        <p className="section-subtitle">
          Select from our professionally designed, ATS-friendly resume templates
        </p>
      </div>

      <div className="templates-grid">
        {templates.map((template, index) => (
          <div
            key={template.id}
            className={`template-card card ${selectedTemplate === template.id ? 'selected' : ''}`}
            onClick={() => handleTemplateSelect(template.id)}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {selectedTemplate === template.id && (
              <div className="selected-badge">✓ Selected</div>
            )}
            
            <div className="template-preview" style={{ borderColor: template.color }}>
              <div className="template-icon" style={{ background: template.color }}>
                {template.icon}
              </div>
              <div className="template-lines">
                <div className="template-line" style={{ background: template.color }}></div>
                <div className="template-line short"></div>
                <div className="template-line medium"></div>
                <div className="template-section">
                  <div className="template-line short"></div>
                  <div className="template-line"></div>
                </div>
              </div>
            </div>

            <div className="template-info">
              <h3 className="template-name">{template.name}</h3>
              <p className="template-description">{template.description}</p>
            </div>

            <button
              className="template-select-btn"
              onClick={(e) => {
                e.stopPropagation();
                handleTemplateSelect(template.id);
              }}
              style={{
                background: selectedTemplate === template.id ? template.color : 'transparent',
                color: selectedTemplate === template.id ? 'white' : template.color,
                borderColor: template.color
              }}
            >
              {selectedTemplate === template.id ? 'Selected ✓' : 'Select Template'}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Templates;

