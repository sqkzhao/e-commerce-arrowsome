import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { commerce } from '../../lib/commerce';
import { Grid, Container, AppBar, Toolbar, Typography } from '@material-ui/core';
import CheckoutInfo from './ChekoutInfo/CheckoutInfo';
import OrderSummary from './OrderSummary/OrderSummary';
import useStyles from './styles';

const Checkout = ({ cart, order, handleCaptureCheckout, error }) => {
    const classes = useStyles();
    const [token, setToken] = useState(null);

    const fetchToken = async (cartId) => {
        try  {
            const data = await commerce.checkout.generateToken(cartId, { type: 'cart' });
            console.log(data);
            console.log("cart", cart);
            setToken(data);
        }
        catch(err) {

        }
    }

    useEffect(() => {
        fetchToken(cart.id);   
    }, [cart]);

    return (
        <div>
            <AppBar className={classes.appbar} position="fixed" color="inherit" elevation={0}>
                <Toolbar>
                    <Container>
                        <Typography className={classes.title} align="left" variant="h6">
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
                    <Grid item xs={12} sm={12} md={6} lg={5}>
                        {token && <CheckoutInfo 
                            token={token} 
                            order={order}
                            handleCaptureCheckout={handleCaptureCheckout}
                            error={error}
                        />}
                    </Grid>
                    
                    <Grid item xs={12} sm={12} md={6} lg={5}>
                        {token && <OrderSummary token={token} />}
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Checkout;

