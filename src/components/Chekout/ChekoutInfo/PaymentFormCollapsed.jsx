import React from 'react';
import  { Grid, Card, CardHeader, CardContent } from '@material-ui/core';
import useStyles from './styles';

const PaymentFormCollapsed = () => {
    const classes = useStyles();

    return (
        <div>
            <Card className={classes.box} elevation={0}>  
                <Grid container justify="space-between">
                    <Grid item xs={6} sm={6} md={6} lg={6}>
                        <CardHeader
                            title="3. Payment"
                            className={classes.grayHeader}
                        /> 
                    </Grid>
                </Grid>                                           
            </Card>
        </div>
    );
};

export default PaymentFormCollapsed;
