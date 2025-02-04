import React from 'react';
import ResumeDownloadButton from '../components/resumeDownloadButton';

export default function Resume() {
    return (
        <div style={{ marginTop: '2rem' }}>
            <h2>Resume</h2>
            <p>Want to download my resume? Click the button below:</p>
            <ResumeDownloadButton 
                fileUrl="AmélieTremblay-Resume.pdf"
                fileName="AmélieTremblay-Resume.pdf"
            />
        </div>
    );
}
