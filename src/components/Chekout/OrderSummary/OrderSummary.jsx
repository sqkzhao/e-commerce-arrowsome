import React from 'react';
import { Grid, Card, CardContent, CardHeader, Typography, CircularProgress } from '@material-ui/core';
import useStyles from './styles';

const OrderSummary = ({ token, cart }) => {
    const classes = useStyles();
    
    return (
        <Card className={classes.box} elevation={0}>
            <CardHeader
                title="Order Summary"
                className={classes.header}
            />
            <CardContent>
                {/* error: line_item is undefined when directly refresh checkout page */}
                {token ? token.live.line_items.map((item) => (
                    <Grid className={classes.itemGrid} container>
                        <Grid item xs={4} sm={3} md={3} lg={3}>
                            <img 
                                src={item.media.source} 
                                alt={item.description} 
                                width="80" 
                                height="80" 
                            />
                        </Grid>
                        <Grid item xs={5} sm={6} md={6} lg={6}>
                            {item.name}
                        </Grid>
                        <Grid item align="right" xs={3} sm={3} md={3} lg={3}>
                            <Typography>
                                {item.price.formatted_with_symbol}
                            </Typography>
                            <Typography>
                                Qty. {item.quantity}
                            </Typography>
                            {/* <Button size="small" variant="outlined" className={classes.removeButton}>Remove</Button> */}
                        </Grid>
                    </Grid>
                )) :
                <Grid container justify="center">
                    <CircularProgress className={classes.circle} />            
                </Grid>}

                <Grid className={classes.subtotalGrid} container justify="space-between">
                    <Typography variant="subtitle2">
                        Subtotal
                    </Typography>
                    <Typography variant="subtitle2">
                        {token && token.live.subtotal.formatted_with_symbol}
                    </Typography>
                </Grid>
                <Grid className={classes.subtotalGrid} container justify="space-between">
                    <Typography variant="subtitle2">
                        Shipping
                    </Typography>
                    <Typography variant="subtitle2">
                        -
                    </Typography>
                </Grid>
                <Grid className={classes.totalGrid} container justify="space-between">
                    <Typography variant="subtitle1">
                        Total
                    </Typography>
                    <Typography variant="subtitle2">
                        {token && token.live.subtotal.formatted_with_symbol}
                    </Typography>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default OrderSummary;
