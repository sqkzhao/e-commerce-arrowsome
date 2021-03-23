import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Grid, Container, Button, CircularProgress, Divider } from '@material-ui/core';
import { Navbar, CartItem } from '../../components';
import useStyles from './styles';

const Cart = ({ cart, handelUpdateCart, handleRemoveFromCart }) => {
    const classes = useStyles();
    const isEmpty = !cart.total_items;

    const EmptyCart = () => (
        <Typography variant="subtitle">
            You have nothing in your shopping bag.
        </Typography>
    );

    const FullCart = () => (
        <Grid container>
            {/* header */}
            <Grid className={classes.itemGrid} container direction="row">
                <Grid item xs={1} sm={1} md={1} lg={1}>
                    <Typography className={classes.header} variant='body2'>
                        ITEM
                    </Typography>
                </Grid>
                <Grid item xs={3} sm={3} md={3} lg={3}></Grid>
                <Grid item xs={4} sm={4} md={4} lg={4}></Grid>
                <Grid item xs={2} sm={2} md={2} lg={2}>
                    <Typography className={classes.header} align='right' variant='body2'>
                        QTY.
                    </Typography>
                </Grid>
                <Grid item xs={2} sm={2} md={2} lg={2}>
                    <Typography className={classes.header} align='right' variant='body2'>
                        PRICE
                    </Typography>
                </Grid>
            </Grid>
            <Divider className={classes.divider} />
            {/* cart items */}
            {cart.line_items.map((item) => (
                <CartItem 
                    key={item.id}
                    item={item} 
                    handelUpdateCart={handelUpdateCart} 
                    handleRemoveFromCart={handleRemoveFromCart}
                />
            ))}
            <Grid container direction="row" justify="flex-end">
                <Grid className={classes.subtotal} item>
                    <Typography align='right'>
                        Subtotal {cart.subtotal.formatted_with_symbol}
                    </Typography>
                </Grid>
            </Grid>
            <Grid container direction="row" justify="flex-end">
                <Button 
                    className={classes.checkoutButton}
                    component={Link} 
                    to='/checkout' 
                    size="large" 
                    color="primary" 
                    variant="contained"
                >
                    CHECKOUT
                </Button>
            </Grid>
        </Grid>
    );

    if (!cart.line_items) {
        return (
            <Container className={classes.circle} align="center">
                <CircularProgress />
            </Container>
        );
    }

    return (
        <div>
            <Navbar cart={cart} />
            <Container>
                <div className={classes.toolbar} />
                <Container className={classes.cartBox}>
                    <Typography className={classes.title} variant="h5">
                        SHOPPING BAG
                    </Typography>
                    {isEmpty ? <EmptyCart /> : <FullCart />}
                </Container>
            </Container>
        </div>
       
    );
};

export default Cart;
