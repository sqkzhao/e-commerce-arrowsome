import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { commerce } from '../../lib/commerce';
import { Grid, Container, AppBar, Toolbar, Typography } from '@material-ui/core';
import CheckoutInfo from './ChekoutInfo/CheckoutInfo';
import OrderSummary from './OrderSummary/OrderSummary';
import useStyles from './styles';

const Checkout = ({ cart }) => {
    const classes = useStyles();
    const [token, setToken] = useState(null);

    const fetchToken = async (cartId) => {
        try  {
            const data = await commerce.checkout.generateToken(cartId, { type: 'cart' });
            console.log(data);
            setToken(data);
        }
        catch(error) {

        }
    }

    useEffect(() => {
        fetchToken(cart.id);   
    }, [cart]);

    return (
        <div>
            <AppBar position="fixed" color="inherit" elevation={0} className={classes.appbar}>
                <Toolbar>
                    <Container>
                        <Typography align="left" variant="h6" className={classes.title}>
                            <Link to='/' className={classes.title}>
                                ARROWSOME
                            </Link>
                        </Typography>
                    </Container>
                </Toolbar>
            </AppBar>

            <div className={classes.toolbar} />

            <Container className={classes.container}>
                <Grid container justify="center" spacing={5}>
                    <Grid item xs={12} md={6} lg={5}>
                        <CheckoutInfo />
                    </Grid>
                    
                    <Grid item xs={12} md={6} lg={5}>
                        <OrderSummary cart={cart} />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Checkout;

