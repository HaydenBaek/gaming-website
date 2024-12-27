import React from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import '../styles/Home.css';  // Import the CSS file
import Slide from '../components/Slide'
import Card from '../components/Card'

function Home() {
    return (
        <div className="home-container">

            <div className="firstDiv">
            <div className="welcome-banner" >
                <Paper
                    elevation={16}
                    sx={{
                        height: 150,
                        width: 500,
                        display: 'flex',
                        flexDirection: 'column',  // Stack content vertically
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0px 0px 30px rgba(255, 255, 255, 0.6)',  // Soft white glow
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',  // Light tint
                        border: '1px solid rgba(255, 255, 255, 0.4)',  // White border
                        color: 'white',
                        gap: 1  // Adds space between lines
                    }}
                >
                    <Typography variant="h5">Welcome to MetaGear</Typography>
                    <Typography variant="h6">Explore Gaming Gears!</Typography>
                </Paper>


            </div>
            <div className="slider" style={{marginBottom: "10%"}}>
                <Slide />
            </div>

            </div>


            <div className="gaming-brands">
                <Typography
                    variant="h2"
                    className="rainbow-text"
                >
                    Explore Different Gaming Brands
                </Typography>
            </div>

            <div className="cards">
                
                    <Card />
               
            </div>

        </div>
    );
}

export default Home;
