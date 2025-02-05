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
        {isProduction ? (
          <iframe
            src={`https://docs.google.com/gview?url=${encodeURIComponent(fullPdfUrl)}&embedded=true`}
            width="100%"
            height="600px"
            className="resume-viewer"
            frameBorder="0"
            onLoad={() => setIsLoading(false)}
          />
        ) : (
          <embed
            src={resumeData.resumeFile}
            type="application/pdf"
            width="100%"
            height="600px"
            className="resume-viewer"
          />
        )}
      </div>
      <div className="resume-actions">
        <a
          href={resumeData.resumeFile}
          download={fileName}
          className="download-button"
        >
          View and Download
        </a>
      </div>
    </div>
  );
};

export default Resume; 