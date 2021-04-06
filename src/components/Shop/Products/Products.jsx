import React from 'react';
import { Container, Grid, Divider, Typography } from '@material-ui/core';
import Product from '../Product/Product';
import useStyles from './styles';

const Products = ({ products, handleAddToCart }) => { 
    const classes = useStyles();

    return (
        <Container className={classes.content}>
            <Divider/>
            <Grid container className={classes.root} justify="center" direction="column" >
                {/* <Typography className={classes.title} align="center" variant="h5">
                    SHOP
                </Typography> */}
            </Grid>
            <div className={classes.toolbar} />
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={4}>
                        <Product product={product} handleAddToCart={handleAddToCart} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Products;