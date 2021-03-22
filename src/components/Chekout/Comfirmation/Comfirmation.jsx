import React from 'react';
import { Link } from 'react-router-dom'; 
import { Container, Grid, Card, CardContent, Button, Typography, CircularProgress } from '@material-ui/core';
import useStyles from './styles';

const Comfirmation = ({ order, isEmpty }) => {
    const classes = useStyles();
    
    return (
        <Container>
            {order.customer_reference ?
            <Grid containet lg={12}>
                <Card className={classes.box} elevation={0}>
                    {/* <CardHeader
                        title="Thank you for your order!"
                        variant="h2"
                        className={classes.header}
                    /> */}
                    <CardContent>
                        <Typography variant="h3">THANK YOU</Typography>
                        <Container>
                            <Typography></Typography>
                        </Container>
                    </CardContent>
                </Card>
            </Grid> :
            <Container>
                <Typography variant="h5">Invalid Checkout</Typography>
                <Typography variant="subtitle1">You have nothing in your shopping bag.</Typography>
                <br/>
                <Button variant="contained" component={Link} to='/shop' className={classes.button}>Go to shop</Button>
            </Container>}
        </Container>
    );
};

export default Comfirmation;

