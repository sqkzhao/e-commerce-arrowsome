import React from 'react';
import { Container, Grid, Typography, Button, Card, CardActionArea, CardMedia } from '@material-ui/core';
import Navbar from '../Navbar/Navbar';

const ProductDetailes = ({ cart, products }) => {
    
    return (
        <Container>
            <Navbar cart={cart} />
            <Grid container justify="space-between" spacing={2}>
                <Grid item xs={12} sm={6} md={6} lg={6} align="center">
                    <Card>
                        <CardMedia
                            // className={classes.media}
                            image="https://i.pinimg.com/564x/fa/04/8e/fa048ebed9f9a9e65180d8e76f42161c.jpg"
                            title="Contemplative Reptile"
                        />
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6} align="center">
                    <Typography>
                        name
                    </Typography>
                    <Typography>
                        $10.00
                    </Typography>
                    <Typography component="p">
                        sdfaafa
                    </Typography>
                    <Typography>
                        quantity
                    </Typography>
                    <Button>Add To Cart</Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default ProductDetailes;
