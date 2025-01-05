import React from 'react';

export default function ResumeDownloadButton({ fileUrl, fileName }) {
    const handleDownload = () => {
        // Create an anchor element and trigger the download
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = fileName;
        link.click();
    };

    return (
        <button 
            onClick={handleDownload} 
            className="resume-download-button"
        >
            Download Resume
        </button>
    );
}


