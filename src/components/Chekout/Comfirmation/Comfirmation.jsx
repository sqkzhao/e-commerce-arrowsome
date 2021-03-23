import React from 'react';
import { Link } from 'react-router-dom'; 
import { Container, Grid, Card, CardContent, Button, Typography, CircularProgress, Divider } from '@material-ui/core';
import useStyles from './styles';

const Comfirmation = ({ order, isEmpty, error }) => {
    const classes = useStyles();

    const OrderComfirmation = () => (
        (order ? 
        // Order Comfirmation
        (<CardContent>
            <Typography component="h5" variant="h5">Thank you for your order, {order.customer.firstName} {order.customer.lastName}!</Typography>
            <Divider className={classes.divider}/>
            <Typography>Order reference: {order.customer_reference}.</Typography>
            <Typography>Your order recipe will be sent to {order.customer.email}.</Typography>
            <Button 
                className={classes.button}
                color="primary"
                variant="contained"
                component={Link}
                to='/'
            >
                Back to home
            </Button> 
        </CardContent>) : (
        // Loading
        <Grid container justify="center">
            <CircularProgress className={classes.circle}/>
        </Grid>))
    );

    const OrderIncomplete = () => (
        <CardContent>
            <Typography component="h5" variant="h5">Sorry, your order is incompleted.</Typography>
            <Divider className={classes.divider}/>
            <Typography>{error} Please try again.</Typography>
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
        <Container>
            <Grid container justify="center">
                <Card className={classes.box} elevation={0}>
                    {error ?
                    <OrderComfirmation /> :
                    <OrderIncomplete />}
                </Card>
            </Grid>
        </Container>
    );
};

export default Comfirmation;

