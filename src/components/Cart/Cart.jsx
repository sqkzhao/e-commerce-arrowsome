import React from 'react';
import { Navbar, CartItem } from '../../components';
import { Typography, Grid, Container, Button } from '@material-ui/core';
import useStyles from './styles';
import { Link } from 'react-router-dom';

const Cart = ({ cart, handelUpdateCart, handleRemoveFromCart }) => {
    const classes = useStyles();
    const isEmpty = !cart.total_items;

    const EmptyCart = () => (
        <Typography variant="subtitle">
            You have nothing in your shopping cart. Continue Shopping
        </Typography>
    );

    const FullCart = () => (
        <Grid container>
            {/* header */}
            <Grid container direction="row" className={classes.itemGrid}>
                <Grid item xs={1} sm={1} md={1} lg={1}>
                    <Typography variant='body2' className={classes.header}>ITEM</Typography>
                </Grid>
                <Grid item xs={3} sm={3} md={3} lg={3}></Grid>
                <Grid item xs={4} sm={4} md={4} lg={4}></Grid>
                <Grid item xs={2} sm={2} md={2} lg={2}>
                    <Typography align='right' variant='body2' className={classes.header}>QTY.</Typography>
                </Grid>
                <Grid item xs={2} sm={2} md={2} lg={2}>
                    <Typography align='right' variant='body2' className={classes.header}>PRICE</Typography>
                </Grid>
            </Grid>
            {/* cart items */}
            {cart.line_items.map((item) => (
                <CartItem item={item} handelUpdateCart={handelUpdateCart} handleRemoveFromCart={handleRemoveFromCart}/>
            ))}
            <Grid container direction="row" justify="flex-end">
                <Grid item className={classes.subtotal}>
                    <Typography align='right'>
                        Subtotal {cart.subtotal.formatted_with_symbol}
                    </Typography>
                </Grid>
            </Grid>
            <Grid container direction="row" justify="flex-end" className={classes.cartButton}>
                <Button component={Link} to='/checkout' size="large" color="primary" variant="contained">
                    CHECKOUT
                </Button>
            </Grid>
        </Grid>
    );

    if (!cart.line_items) return 'Loading';

    return (
        <div>
            <Navbar cart={cart} />
            <Container>
                <div className={classes.toolbar} />
                <Typography variant="h5" className={classes.title}>
                    SHOPPING CART
                </Typography>
                {isEmpty ? <EmptyCart /> : <FullCart />}
            </Container>
        </div>
       
    );
};

export default Cart;
