import React from 'react';
import { Link, useHistory } from 'react-router-dom'; 
import { Container, Grid, Card, CardContent, Button, Typography, CircularProgress, Divider } from '@material-ui/core';
import CheckoutNav from '../CheckoutNav/CheckoutNav';
import useStyles from './styles';

const Comfirmation = ({ order, error }) => {
    const classes = useStyles();

    const OrderComfirmation = () => (
        <CardContent>
            <Typography component="h5" variant="h5">Thank you for your order!</Typography>
            <Divider className={classes.divider}/>
            <Grid className={classes.textBox}>
                <Typography>Your order reference is {order.customer_reference}.</Typography>
                <Typography>A comfirmation has benn sent to your email.</Typography>
            </Grid>
            <Button 
                className={classes.button}
                color="primary"
                variant="contained"
                component={Link}
                to='/'
            >
                Back to home
            </Button> 
        </CardContent>
    );

    const OrderIncomplete = () => (
        <CardContent>
            <Typography component="h5" variant="h5">Sorry, your order is incompleted.</Typography>
            <Divider className={classes.divider}/>
            <Typography className={classes.textBox}>
                {error}. Please try again.
            </Typography>
            <Button 
                className={classes.button}
                variant="contained"
                color="primary"
                component={Link}
                to='/'
            >
                Back to home
            </Button>
        </CardContent>
    );

    return (
        <>
            <CheckoutNav />

            <Container>
                <Grid container justify="center">
                    <Card className={classes.box} elevation={0}>
                        {(!error && !order.customer) &&
                        <Grid className={classes.textBox} container justify="center">
                            <CircularProgress className={classes.circle}/>
                        </Grid>}
                        
                        {order.customer && <OrderComfirmation />}
                        {error && <OrderIncomplete />}

                    </Card>
                </Grid>
            </Container>
        </>
    );
};

export default Comfirmation;

