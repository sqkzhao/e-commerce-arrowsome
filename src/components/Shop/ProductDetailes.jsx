import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Container, Grid, Typography, Divider, Button, Card, CardMedia, TextField } from '@material-ui/core';
import Navbar from '../Navbar/Navbar';
import useStyles from './productDetailesStyles';

const ProductDetailes = ({ cart, products, handleAddToCart }) => {
    let { productId } = useParams();
    const classes = useStyles();
    const [qty, setQty] = useState(1);

    const handleChange = (e) => {
        setQty(e.target.value);
    };

    return (
        <Container>
            <Navbar cart={cart} />            
            <Divider className={classes.divider} />

            <Container className={classes.productBox}>
            {products.map((product) => {
                if(product.id === productId) {
                    return (
                        <Grid container justify="space-around" spacing={5}>
                            <Grid className={classes.root} item xs={12} sm={6} md={6} lg={6}>
                                <Card className={classes.root}>
                                    <CardMedia
                                        className={classes.media}
                                        image={product.media.source}
                                        title={product.name}
                                    />
                                </Card>
                            </Grid>
                            <Grid className={classes.root} item xs={12} sm={6} md={6} lg={6}>
                                <Typography gutterBottom variant="h4" component="h4">
                                    {product.name}
                                </Typography>
                                <Typography variant="h5" component="h5">
                                    {product.price.formatted_with_symbol}
                                </Typography>
                                <Typography 
                                    component="p" 
                                    dangerouslySetInnerHTML={{ __html: product.description }} 
                                />
                                <Grid container lg={3}>
                                    <TextField 
                                        fullWidth
                                        margin="normal"
                                        label="Quantity" 
                                        variant="outlined" 
                                        type="number"
                                        defaultValue={1}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Button 
                                    className={classes.cartButton}
                                    color="primary"
                                    fullWidth 
                                    variant="contained"
                                    onClick={() => handleAddToCart(product.id, qty)}
                                >   
                                    Add To Cart
                                </Button>
                            </Grid>
                        </Grid>
                    )
                }
            })}
            </Container>
        </Container>
    );
};

export default ProductDetailes;
