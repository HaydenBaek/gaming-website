import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: 'black',  // Fully transparent
        boxShadow: 'none',                    // No shadow
        backdropFilter: 'none',               // No blur or tint
        borderBottom: '1px solid white',      // Bottom border
      }}
    >
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, color: 'white',  fontSize: '1.4rem' }}>
          Gaming Gear
        </Typography>
        <Button color="inherit" component={Link} to="/" sx={{ fontSize: '1.1rem' }}>Home</Button>
        <Button color="inherit" component={Link} to="/blog" sx={{ fontSize: '1.1rem' }}>Blog</Button>
        <Button color="inherit" component={Link} to="/aboutUs" sx={{ fontSize: '1.1rem' }}>About Us</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
