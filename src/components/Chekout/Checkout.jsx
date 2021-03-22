import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { commerce } from '../../lib/commerce';
import { Grid, Container, AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import CheckoutInfo from './ChekoutInfo/CheckoutInfo';
import OrderSummary from './OrderSummary/OrderSummary';
import Comfirmation from './Comfirmation/Comfirmation';
import useStyles from './styles';

const Checkout = ({ cart, order, handleCaptureCheckout, error }) => {
    const classes = useStyles();
    const [token, setToken] = useState(null);
    const isEmpty = !cart.total_items;

    const fetchToken = async (cartId) => {
        try  {
            const data = await commerce.checkout.generateToken(cartId, { type: 'cart' });
            console.log("token", data);
            console.log("cart", cart);
            setToken(data);
        }
        catch(error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchToken(cart.id);   
    }, []);

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
                { !isEmpty ?
                <Grid container justify="center" spacing={5}>
                    <Grid item xs={12} sm={12} md={6} lg={5}>
                        <CheckoutInfo 
                            token={token} 
                            handleCaptureCheckout={handleCaptureCheckout}
                            error={error}
                        />
                    </Grid>
                    
                    <Grid item xs={12} sm={12} md={6} lg={5}>
                        <OrderSummary token={token} cart={cart} />
                    </Grid> 
                </Grid> : 
                <Comfirmation order={order} isEmpty={isEmpty}/>
                }

                
            </Container>
        </div>
    );
};

export default Checkout;


