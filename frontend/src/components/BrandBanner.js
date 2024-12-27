import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function BrandBanner({ 
  title, 
  description, 
  glowColorStart = '#0077B6', 
  glowColorEnd = '#00FF7F',
  buttonText = 'Visit Website',
  buttonColor = '#0077B6',
  link = 'https://www.logitech.com'   // Default link to Logitech
}) {
  return (
    <Paper
      elevation={20}
      sx={{
        height: 'auto',
        width: '600px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px',
        gap: 3,
        position: 'relative',
        background: `linear-gradient(145deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))`,
        borderRadius: '20px',
        boxShadow: `0px 0px 50px 10px ${glowColorStart}, 
                    0px 0px 80px 30px ${glowColorEnd}`,
        transition: 'transform 0.4s ease, box-shadow 0.4s ease',
        '&:hover': {
          transform: 'translateY(-12px)',
          boxShadow: `0px 0px 70px 20px ${glowColorEnd}, 
                      0px 0px 100px 50px ${glowColorStart}`
        },
        border: `1px solid ${glowColorStart}`,
        backdropFilter: 'blur(15px)'
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: '700',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          backgroundImage: `linear-gradient(90deg, ${glowColorStart}, ${glowColorEnd})`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="h6"
        sx={{
          color: 'rgba(255, 255, 255, 0.8)',
          textAlign: 'center',
          maxWidth: '500px'
        }}
      >
        {description}
      </Typography>

      {/* Button to Visit Logitech */}
      <Button
        variant="contained"
        sx={{
          marginTop: '20px',
          textTransform: 'none',
          fontSize: '1rem',
          fontWeight: '500',
          backgroundColor: buttonColor,
          '&:hover': {
            backgroundColor: buttonColor !== '#0077B6' 
              ? buttonColor 
              : '#005fa3'
          },
          padding: '12px 24px',
          borderRadius: '8px',
        }}
        href={link}
        target="_blank"  // Open in new tab
        rel="noopener noreferrer"
      >
        {buttonText}
      </Button>
    </Paper>
  );
}

export default BrandBanner;
