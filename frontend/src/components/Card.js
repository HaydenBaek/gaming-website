import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';

// Import images of brands
import Razer from '../images/razer.jpg';
import Logitech from '../images/logitech.png';
import HyperX from '../images/hyperX.png';
import Corsair from '../images/corsair.png';
import Steelseries from '../images/Steelseries-logo.png';

const gamingBrands = [
    {
        title: "Logitech",
        description: "Premium quality gaming accessories.",
        image: Logitech,
        link: "/logitech"   // Dynamic link
    },
    {
        title: "Razer",
        description: "Cutting-edge gaming gear for pro gamers.",
        image: Razer,
        link: "/razer"
    },
    {
        title: "Corsair",
        description: "High-performance gaming keyboards and mice.",
        image: Corsair,
        link: "/corsair"
    },
    {
        title: "HyperX",
        description: "Gaming headsets and accessories.",
        image: HyperX,
        link: "/hyperx"
    },
    {
        title: "Steelseries",
        description: "High-end gaming laptops and desktops.",
        image: Steelseries,
        link: "/steelseries"
    },
];

export default function MultiActionAreaCard() {
    return (
        <div className="cards-container">
            {gamingBrands.map((brand, index) => (
                <Paper
                    key={index}
                    elevation={16}
                    sx={{
                        width: '95%',
                        maxWidth: '1400px',
                        margin: '40px auto',
                        boxShadow: '0px 0px 60px rgba(255, 255, 255, 0.7)',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        borderRadius: '16px',
                        overflow: 'hidden',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                        '&:hover': {
                            transform: 'translateY(-10px)',
                            boxShadow: '0px 0px 80px rgba(255, 255, 255, 0.9)'
                        }
                    }}
                >
                    <Card sx={{ display: 'flex', flexDirection: 'row', alignItems: 'stretch' }}>
                        <CardMedia
                            component="img"
                            image={brand.image}
                            alt={brand.title}
                            sx={{
                                objectFit: 'cover',
                                height: '400px',
                                
                            }}
                        />

                        {/* Divider between image and text */}
                        <Divider
                            orientation="vertical"
                            flexItem
                            sx={{
                                height: 'auto',
                                width: '1px',
                                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                                boxShadow: '0px 0px 10px rgba(255, 255, 255, 0.7)'
                            }}
                        />

                        <CardContent sx={{ width: '50%', padding: '40px' }}>
                            <Typography gutterBottom variant="h3" sx={{ fontWeight: 'bold' }}>
                                {brand.title}
                            </Typography>
                            <Typography variant="h6" sx={{ color: 'text.secondary', marginBottom: '30px' }}>
                                {brand.description}
                            </Typography>
                            <Button
                                component={Link}
                                to={brand.link}
                                size="large"
                                variant="contained"
                                sx={{
                                    textTransform: 'none',
                                    fontSize: '1rem',
                                    backgroundColor: '#0077B6',
                                    '&:hover': {
                                        backgroundColor: '#005fa3'
                                    }
                                }}
                            >
                                Explore {brand.title}
                            </Button>
                        </CardContent>
                    </Card>
                </Paper>
            ))}
        </div>
    );
}
