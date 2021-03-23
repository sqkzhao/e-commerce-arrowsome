import React from 'react';
import  { Grid, Card, CardContent, CardHeader, Button, Typography } from '@material-ui/core';
import useStyles from './styles';

const ShippingFormCollapsed = ({ section, shippingInfo, setSection }) => {
    const classes = useStyles();

    const handleOnClick = () => {
        setSection(2);
    }

    return (
        <>
            {/* COMPLETED SHIPPING FORM */}
            {(section > 2) &&
            <Card className={classes.box} elevation={0}>  
                <Grid container justify="space-between">
                    <Grid item xs={9} sm={8} md={8} lg={8}>
                        <CardHeader
                            title="2. Shipping"
                            className={classes.header}
                        /> 
                    </Grid>
                    <Grid item xs={3} sm={3} md={2} lg={2} align="right">
                        {(section !== 4) &&
                        <Button 
                            className={classes.editButton} 
                            onClick={handleOnClick} 
                            size="small" 
                            variant="outlined"
                        >
                            Edit
                        </Button>}
                    </Grid>
                </Grid>                                           
                <CardContent>
                    <Typography variant="body2" component="p">
                        {shippingInfo.firstName} {shippingInfo.firstName}
                    </Typography>
                    <Typography variant="body2" component="p">
                        {shippingInfo.address}
                    </Typography>
                    <Typography variant="body2" component="p">
                        {shippingInfo.city}, CA {shippingInfo.zipcode}
                    </Typography>
                </CardContent>
            </Card>}

            {/* INCOMPLETE SHIPPING FORM */}
            {(section < 2) && 
            <Card className={classes.box} elevation={0}>
                <Grid container justify="space-between">
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <CardHeader
                            title="2. Shipping"
                            className={classes.grayHeader}
                        /> 
                    </Grid>
                </Grid>
            </Card>}
        </>
    );
};

export default ShippingFormCollapsed;
