import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CardActionArea from '@mui/material/CardActionArea';

export default function SmallCard({ title, description, image, price, review, colorVariants }) {
    return (
        <Card
            sx={{
                width: '100%',
                maxWidth: '500px',
                boxShadow: '0px 0px 20px rgba(255, 255, 255, 0.2)',
                transition: 'transform 0.3s ease',
                '&:hover': {
                    transform: 'translateY(-10px)',
                },
            }}
        >
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="300"
                    image={image}
                    alt={title}
                    sx={{
                        objectFit: 'contain',
                        width: '100%',
                        maxHeight: '400px',
                    }}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 2 }}>
                        {description}
                    </Typography>

                    {/* Product Details Table */}
                    <TableContainer component={Paper} sx={{ boxShadow: 'none', backgroundColor: 'transparent' }}>
                        <Table aria-label="product specifications">
                            <TableBody>
                                <TableRow>
                                    <TableCell>Price</TableCell>
                                    <TableCell align="right">${price}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Review</TableCell>
                                    <TableCell align="right">{review} / 5</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Colours</TableCell>
                                    <TableCell align="right">
                                        {colorVariants.join(', ')}
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
