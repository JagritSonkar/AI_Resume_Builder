import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import ResumeBuilder from './components/ResumeBuilder';
import Templates from './components/Templates';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';

function App() {
  // Dark mode state
  const [darkMode, setDarkMode] = useState(false);
  
  // Resume data state
  const [resumeData, setResumeData] = useState({
    name: '',
    email: '',
    phone: '',
    skills: '',
    education: '',
    experience: '',
    projects: ''
  });

  // Selected template state
  const [selectedTemplate, setSelectedTemplate] = useState('modern');

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Apply dark mode class to body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    } else {
      document.body.classList.add('light');
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  // Scroll to resume builder
  const scrollToBuilder = () => {
    document.getElementById('resume-builder')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Scroll to templates
  const scrollToTemplates = () => {
    document.getElementById('templates')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero scrollToBuilder={scrollToBuilder} scrollToTemplates={scrollToTemplates} darkMode={darkMode} />
      <Features darkMode={darkMode} />
      <ResumeBuilder 
        resumeData={resumeData} 
        setResumeData={setResumeData}
        selectedTemplate={selectedTemplate}
        darkMode={darkMode}
      />
      <Templates 
        selectedTemplate={selectedTemplate}
        setSelectedTemplate={setSelectedTemplate}
        darkMode={darkMode}
      />
      <HowItWorks darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;

