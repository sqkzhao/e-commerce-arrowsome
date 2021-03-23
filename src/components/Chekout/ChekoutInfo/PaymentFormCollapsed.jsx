import React from 'react';
import  { Grid, Card, CardHeader } from '@material-ui/core';
import useStyles from './styles';

const PaymentFormCollapsed = () => {
    const classes = useStyles();

    return (
        <div>
            <Card className={classes.box} elevation={0}>  
                <Grid container justify="space-between">
                    <Grid item xs={12} sm={12} md={12} lg={12}>
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
