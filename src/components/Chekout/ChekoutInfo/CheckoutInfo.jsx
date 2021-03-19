import React from 'react';
import  { Grid, Card, CardContent, CardHeader, CardActions, TextField, Typography, Button } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
import useStyles from './styles';
import TextInput from '../TextInput';

const CheckoutInfo = () => {
    const classes = useStyles();
    const methods = useForm();

    return (
        <>
        {/* <FormProvider {...methods}>
        <form onSubmit=''>
        <TextInput name="firstName" label="First name" required />
        </form>
        </FormProvider> */}
            {/* EMAIL */}
            <Card className={classes.box} elevation={0}>
                <CardHeader
                    title="1. Your Email"
                    className={classes.header}
                />            
                <CardContent>
                    <TextField fullWidth size="small" id="email" variant="outlined" placeholder="Email" />
                    <Typography variant="body2" color="textSecondary" component="p">
                        You'll receive receipts and notifications at this email address.
                    </Typography>
                    <Button fullWidth variant="contained" color="primary" className={classes.continueButton}>
                        Continue
                    </Button>
                </CardContent>
            </Card>

            {/* SHIPPING */}
            <Card className={classes.box} elevation={0}>
                <CardHeader
                    title="2. Shipping"
                    className={classes.header}
                />            
                <CardContent className={classes.cardContent}>
                    <Grid container justify="space-between">
                        <TextField margin="normal" size="small" id="frist-name" variant="outlined" placeholder="First Name" className={classes.twoTextfield}/>
                        <TextField margin="normal" size="small" id="last-name" variant="outlined" placeholder="Last Name" className={classes.twoTextfield}/>
                    </Grid>
                    <TextField fullWidth margin="dense" size="small" id="address1" variant="outlined" placeholder="Address1" />
                    <TextField fullWidth margin="dense" size="small" id="address2" variant="outlined" placeholder="Address2" />
                    <Button fullWidth variant="contained" color="primary" squared className={classes.continueButton}>
                        Continue
                    </Button>
                </CardContent>
            </Card>
        </>
    );
};

export default CheckoutInfo;
