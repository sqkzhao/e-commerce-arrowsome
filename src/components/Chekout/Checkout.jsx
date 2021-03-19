import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { commerce } from '../../lib/commerce';
import { CheckoutInfo } from '../../components';
import OrderSummary from './OrderSummary/OrderSummary';
import { Grid, Container, AppBar, Toolbar, IconButton, Typography, Badge, Button, Stepper, Step, StepLabel, StepContent, TextField } from '@material-ui/core';
import useStyles from './styles';

const Checkout = ({ cart }) => {
    const classes = useStyles();
    const [token, setToken] = useState(null);

    const generateToken = async () => {
        try  {
            const data = await commerce.checkout.generateToken(cart.id, { type: 'cart' });
            console.log(data);
            setToken(data);
        }
        catch(error) {

        }
    }

    useEffect(() => {
        generateToken();   
    }, []);

    return (
        <div>
            <AppBar position="fixed" color="inherit" className={classes.appbar} elevation={0}>
                <Toolbar>
                    <Container>
                        <Typography align="left" variant="h6" className={classes.title}>
                            <Link to='/' className={classes.title}>ARROWSOME</Link>
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

