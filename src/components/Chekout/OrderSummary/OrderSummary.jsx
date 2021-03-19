import React from 'react';
import { Grid, Card, CardContent, CardHeader, Typography, Button } from '@material-ui/core';
import useStyles from './styles';

const OrderSummary = ({ cart }) => {
    const classes = useStyles();

    return (
        <Card className={classes.box} elevation={0}>
            <CardHeader
                title="Order Summary"
                className={classes.header}
            />
            <CardContent>
                {/* error: line_item is undefined when directly refresh checkout page */}
                {cart.line_items.map((item) => (
                    <Grid container className={classes.itemGrid}>
                        <Grid item lg={3}>
                            <img src={item.media.source} alt={item.description} width="80" height="80" />
                        </Grid>
                        <Grid item lg={6}>
                            {item.name}
                        </Grid>
                        <Grid item align="right" lg={3}>
                            <Typography>{item.price.formatted_with_symbol}</Typography>
                            <Typography>Qty. {item.quantity}</Typography>
                            
                            <Button size="small" variant="outlined" className={classes.removeButton}>Remove</Button>
                        </Grid>
                    </Grid>
                ))}
                <Grid container justify="space-between" className={classes.subtotalGrid}>
                    <Typography variant="subtitle2">Subtotal</Typography>
                    <Typography variant="subtitle2">{cart.subtotal.formatted_with_symbol}</Typography>
                </Grid>
                <Grid container justify="space-between" className={classes.subtotalGrid}>
                    <Typography variant="subtitle2">Shipping</Typography>
                    <Typography variant="subtitle2">-</Typography>
                </Grid>
                <Grid container justify="space-between" className={classes.totalGrid}>
                    <Typography variant="subtitle1">Total</Typography>
                    <Typography variant="subtitle2">{cart.subtotal.formatted_with_symbol}</Typography>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default OrderSummary;
