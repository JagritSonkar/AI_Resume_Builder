import React, { useState } from 'react';
import './ResumeBuilder.css';
import html2pdf from 'html2pdf.js';

function ResumeBuilder({ resumeData, setResumeData, selectedTemplate, darkMode }) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [isGenerated, setIsGenerated] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setResumeData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // AI Enhancement Helper Functions
  const enhanceSkills = (skills) => {
    if (!skills || skills.trim() === '') {
      return 'JavaScript, React, Node.js, Python, SQL, Git, Agile Methodologies, Problem Solving, Team Collaboration';
    }

    // Clean and format skills
    const skillsList = skills.split(',').map(s => s.trim()).filter(s => s);

    // Add professional formatting
    const professionalSkills = skillsList.map(skill => {
      // Capitalize first letter of each word
      return skill.split(' ').map(word =>
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      ).join(' ');
    });

    return professionalSkills.join(', ');
  };

  const enhanceExperience = (experience) => {
    if (!experience || experience.trim() === '') {
      return 'Senior Software Engineer at Tech Corp (2020-Present)\n• Led development of scalable web applications serving 100K+ users\n• Improved application performance by 40% through code optimization and best practices\n• Mentored junior developers and conducted comprehensive code reviews\n• Collaborated with cross-functional teams to deliver high-quality solutions';
    }

    // Split by lines and enhance each
    const lines = experience.split('\n').filter(line => line.trim());
    const enhanced = [];

    lines.forEach(line => {
      const trimmed = line.trim();
      // If line doesn't start with bullet, add it
      if (!trimmed.startsWith('•') && !trimmed.startsWith('-')) {
        enhanced.push(trimmed);
      } else {
        // Remove existing bullet and add professional one
        const cleaned = trimmed.replace(/^[•\-]\s*/, '');
        enhanced.push('• ' + cleaned.charAt(0).toUpperCase() + cleaned.slice(1));
      }
    });

    return enhanced.join('\n');
  };

  const enhanceEducation = (education) => {
    if (!education || education.trim() === '') {
      return 'Bachelor of Science in Computer Science\nUniversity of Technology (2016-2020)\nGPA: 3.8/4.0';
    }

    // Format education entries
    const lines = education.split('\n').filter(line => line.trim());
    const enhanced = lines.map(line => {
      const trimmed = line.trim();
      // Capitalize first letter
      return trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
    });

    return enhanced.join('\n');
  };

  const enhanceProjects = (projects) => {
    if (!projects || projects.trim() === '') {
      return 'E-Commerce Platform\n• Built full-stack application with React and Node.js\n• Implemented secure payment gateway and user authentication\n• Achieved 99.9% uptime with optimized database queries\n\nAI Chatbot\n• Developed intelligent chatbot using NLP and machine learning\n• Integrated with multiple messaging platforms\n• Improved customer response time by 60%';
    }

    // Split by lines and enhance
    const lines = projects.split('\n').filter(line => line.trim());
    const enhanced = [];

    lines.forEach(line => {
      const trimmed = line.trim();
      if (!trimmed.startsWith('•') && !trimmed.startsWith('-')) {
        // Project title
        enhanced.push('\n' + trimmed.charAt(0).toUpperCase() + trimmed.slice(1));
      } else {
        // Project detail
        const cleaned = trimmed.replace(/^[•\-]\s*/, '');
        enhanced.push('• ' + cleaned.charAt(0).toUpperCase() + cleaned.slice(1));
      }
    });

    return enhanced.join('\n').trim();
  };

  // AI Resume Generation
  const generateWithAI = () => {
    if (!resumeData.name || resumeData.name.trim() === '') {
      alert('⚠️ Please enter your name first!');
      return;
    }

    setIsGenerating(true);

    // Simulate AI processing with realistic delay
    setTimeout(() => {
      // Generate AI-enhanced content
      const aiEnhancedData = {
        ...resumeData,
        skills: enhanceSkills(resumeData.skills),
        experience: enhanceExperience(resumeData.experience),
        education: enhanceEducation(resumeData.education),
        projects: enhanceProjects(resumeData.projects)
      };

      setResumeData(aiEnhancedData);
      setIsGenerating(false);
      setIsGenerated(true);

      // Show success message
      setTimeout(() => {
        alert('✨ Your resume has been enhanced with AI! Check the preview on the right.');
      }, 300);
    }, 2500);
  };

  // Download Resume as PDF
  const downloadPDF = () => {
    const element = document.getElementById('resume-preview');
    const opt = {
      margin: 0,
      filename: `${resumeData.name || 'resume'}_resume.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    
    html2pdf().set(opt).from(element).save();
  };

  // Get template display name
  const getTemplateName = () => {
    const names = {
      modern: 'Modern',
      professional: 'Professional',
      creative: 'Creative',
      minimal: 'Minimal'
    };
    return names[selectedTemplate] || 'Modern';
  };

  return (
    <section className="resume-builder" id="resume-builder">
      <div className="builder-header">
        <h2 className="section-title">
          Create Your <span className="gradient-text">Professional Resume</span>
        </h2>
        <p className="section-subtitle">
          Fill in your details and let AI enhance your resume
        </p>
        <div className="selected-template-badge">
          Using <strong>{getTemplateName()}</strong> Template
        </div>
      </div>

      <div className="builder-container">
        {/* Form Section */}
        <div className="builder-form">
          <div className="form-group">
            <label>Full Name *</label>
            <input
              type="text"
              name="name"
              className="input-field"
              placeholder="John Doe"
              value={resumeData.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Email *</label>
              <input
                type="email"
                name="email"
                className="input-field"
                placeholder="john@example.com"
                value={resumeData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Phone *</label>
              <input
                type="tel"
                name="phone"
                className="input-field"
                placeholder="+1 234 567 8900"
                value={resumeData.phone}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Skills</label>
            <textarea
              name="skills"
              className="input-field"
              placeholder="JavaScript, React, Node.js, Python..."
              value={resumeData.skills}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Education</label>
            <textarea
              name="education"
              className="input-field"
              placeholder="Degree, University, Year..."
              value={resumeData.education}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Experience</label>
            <textarea
              name="experience"
              className="input-field"
              placeholder="Job Title, Company, Duration, Achievements..."
              value={resumeData.experience}
              onChange={handleChange}
              rows="5"
            />
          </div>

          <div className="form-group">
            <label>Projects</label>
            <textarea
              name="projects"
              className="input-field"
              placeholder="Project Name, Description, Technologies..."
              value={resumeData.projects}
              onChange={handleChange}
            />
          </div>

          <div className="form-actions">
            <button
              className="btn btn-primary"
              onClick={generateWithAI}
              disabled={isGenerating || !resumeData.name}
            >
              {isGenerating ? (
                <>
                  <span className="spinner"></span>
                  <span>AI is Generating...</span>
                </>
              ) : (
                <>✨ Generate Resume with AI</>
              )}
            </button>

            {isGenerated && (
              <button className="btn btn-secondary" onClick={downloadPDF}>
                📥 Download PDF
              </button>
            )}
          </div>
        </div>

        {/* Resume Preview */}
        <div className="resume-preview-container">
          <div className="preview-header">
            <h3>Live Preview</h3>
            {isGenerated && <span className="preview-badge">✨ AI Enhanced</span>}
          </div>

          <div className={`resume-preview ${selectedTemplate}`} id="resume-preview">
            <div className="resume-header">
              <h1>{resumeData.name || 'Your Name'}</h1>
              <div className="resume-contact">
                <span>{resumeData.email || 'email@example.com'}</span>
                <span>•</span>
                <span>{resumeData.phone || '+1 234 567 8900'}</span>
              </div>
            </div>

            {resumeData.skills && (
              <div className="resume-section">
                <h2>Skills</h2>
                <p>{resumeData.skills}</p>
              </div>
            )}

            {resumeData.experience && (
              <div className="resume-section">
                <h2>Experience</h2>
                <p className="whitespace-pre">{resumeData.experience}</p>
              </div>
            )}

            {resumeData.education && (
              <div className="resume-section">
                <h2>Education</h2>
                <p className="whitespace-pre">{resumeData.education}</p>
              </div>
            )}

            {resumeData.projects && (
              <div className="resume-section">
                <h2>Projects</h2>
                <p className="whitespace-pre">{resumeData.projects}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ResumeBuilder;

