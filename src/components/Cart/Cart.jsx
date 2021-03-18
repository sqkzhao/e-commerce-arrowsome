import React from 'react';
import { Typography, Grid, Container } from '@material-ui/core';
import useStyles from './styles';

import CartTable from './CartTable/CartTable';


const Cart = ({ cart, handleRemoveFromCart }) => {
    const classes = useStyles();
    const isEmpty = !cart.total_items;

    const EmptyCart = () => (
        <Typography variant="subtitle">
            You have nothing in your shopping cart. Continue Shopping
        </Typography>
    );

    const FullCart = () => (
        <div>
            <Grid container >
                <CartTable cart={cart} handleRemoveFromCart={handleRemoveFromCart} />
            </Grid>
        </div>
    );

    if (!cart.line_items) return 'Loading';

    return (
        <Container>
            <div className={classes.toolbar} />
            <Typography variant="h5" className={classes.title}>
                SHOPPING CART
            </Typography>
            {isEmpty ? <EmptyCart /> : <FullCart />}
        </Container>
    );
};

export default Cart;
