import React, { useState, useEffect } from 'react';

const Resume = ({ data }) => {
  const resumeData = data.items[0];
  const fileName = resumeData.resumeFile.split('/').pop();
  const [isLoading, setIsLoading] = useState(true);
  
  // Check if we're in production by looking at the hostname
  const isProduction = !window.location.hostname.includes('localhost') && 
                      !window.location.hostname.includes('127.0.0.1');
  
  // Create the full URL for the PDF
  const fullPdfUrl = window.location.origin + resumeData.resumeFile;

  // Set loading to false after a short delay in development
  useEffect(() => {
    if (!isProduction) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isProduction]);
  
  return (
    <div className="resume-content">
      <div className="resume-preview">
        {isLoading && <div className="loading">Loading PDF...</div>}
        <iframe
          src={isProduction 
            ? `https://docs.google.com/gview?url=${encodeURIComponent(fullPdfUrl)}&embedded=true`
            : `${resumeData.resumeFile}#view=FitH`
          }
          width="100%"
          height="450px"
          className="resume-viewer"
          frameBorder="0"
          onLoad={() => setIsLoading(false)}

        />
      </div>
      <div className="resume-actions d-flex justify-content-center mt-4">
        <button 
          className="btn btn-highlight rounded-pill px-4 py-3 send-message-btn" 
          onClick={() => window.open(resumeData.resumeFile, '_blank')}

        >
          <i className="fa-solid fa-file-pdf"></i>
          {' '}
          VIEW RESUME
        </button>
      </div>
    </div>
  );
};

export default Resume; 