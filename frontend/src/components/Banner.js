import React from 'react';
import Paper from '@mui/material/Paper';
import '../styles/Home.css';  // Import the CSS file

function Banner({ children }) {  // Accept children as props
  return (
    <div className="welcome-banner">
      <Paper
        elevation={16}
        sx={{
          height: 'auto',  // Allow height to adjust to content
          width: 500,
          display: 'flex',
          flexDirection: 'column',  // Stack content vertically
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0px 0px 30px rgba(255, 255, 255, 0.6)',  
          backgroundColor: 'rgba(255, 255, 255, 0.1)',  
          border: '1px solid rgba(255, 255, 255, 0.4)',  
          color: 'white',
          gap: 1,
          padding: 2  // Add padding inside Paper
        }}
      >
        {children}  {/* Render the Card or any child passed to Banner */}
      </Paper>
    </div>
  );
}

export default Banner;
