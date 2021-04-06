import React from 'react';
import { 
    Grid, Card, CardContent, CardHeader, 
    Typography, CircularProgress, CardMedia,
    useMediaQuery, ThemeProvider
} from '@material-ui/core';
import { colortheme } from '../../../lib/colortheme';
import useStyles from './styles';

const OrderSummary = ({ token, cart }) => {
    const classes = useStyles();
    const matches = useMediaQuery('(min-width:961px)');

    return (
        <Card className={classes.box} elevation={0}>
            <CardHeader
                title="Order Summary"
                className={classes.header}
            />
            <CardContent>
                {token ? token.live.line_items.map((item) => (
                    <Grid className={classes.itemGrid} key={item.id} container spacing={2}>
                        <Grid item xs={3} sm={3} md={3} lg={3}>
                            <Card className={classes.picture} square>
                                {matches ? 
                                <CardMedia image={item.media.source} className={classes.media} /> :
                                <CardMedia image={item.media.source} className={classes.mobileMedia} />}
                            </Card>
                        </Grid>
                        <Grid item xs={6} sm={6} md={6} lg={6} variant='body1'>
                            {item.name}
                        </Grid>
                        <Grid item align="right" xs={3} sm={3} md={3} lg={3}>
                            <Typography variant="subtitle2">
                                {item.price.formatted_with_symbol}
                            </Typography>
                            <Typography variant="subtitle2">
                                Qty. {item.quantity}
                            </Typography>
                        </Grid>
                    </Grid>
                )) :
                <Grid container justify="center">
                    <ThemeProvider theme={colortheme}>
                        <CircularProgress className={classes.circle} />     
                    </ThemeProvider>       
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
