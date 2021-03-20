import React from 'react';
import Product from '../Product/Product';

import { Grid } from '@material-ui/core';
import useStyles from './styles';

const Products = ({ products, handleAddToCart }) => { 
    const classes = useStyles();

    return (
        <div className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={4}>
                        <Product product={product} handleAddToCart={handleAddToCart} />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default Products;