import React from 'react';
import  { Grid, Card, CardContent, CardHeader, Button, TextField, Typography } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
import TextInput from './TextInput';
import ShippingFormCollapsed from './ShippingFormCollapsed';
import useStyles from './styles';

const ShippingForm = ({ section, shippingInfo, setShippingSection, setSection }) => {
    const classes = useStyles();
    const methods = useForm();
    const state = 'US-CA';

    return (
        <>
            {(section === 2) ?

            // EXPANDED SHIPPING FORM
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit((data) => setShippingSection({...data, state}))}>
                    <Card className={classes.box} elevation={0}>
                        <CardHeader
                            title="2. Shipping"
                            className={classes.header}
                        />            
                        <CardContent className={classes.cardContent}>
                            <Grid container justify="space-between" spacing={2}>
                                <Grid item xs={6} sm={6} md={6} lg={6}>
                                    <TextInput 
                                        name="firstName" 
                                        label="First name" 
                                        defaultValue={shippingInfo.firstName} 
                                    />
                                </Grid>
                                <Grid item xs={6} sm={6} md={6} lg={6}>
                                    <TextInput 
                                        name="lastName" 
                                        label="Last name" 
                                        defaultValue={shippingInfo.lastName} 
                                    />
                                </Grid>
                            </Grid>
                            <TextInput 
                                name="address" 
                                label="Address" 
                                defaultValue={shippingInfo.address} 
                            />
                            <Grid container justify="space-between" spacing={2}>
                                <Grid item xs={3} sm={3} md={3} lg={3}>
                                    <TextInput 
                                        name="zipcode" 
                                        label="Zip Code" 
                                        defaultValue={shippingInfo.zipcode} 
                                    />
                                </Grid>
                                <Grid item xs={5} sm={5} md={5} lg={5}>
                                    <TextInput 
                                        name="city" 
                                        label="City" 
                                        defaultValue={shippingInfo.city} 
                                    />
                                </Grid>
                                <Grid item xs={4} sm={4} md={4} lg={4}>
                                    <TextField 
                                        disabled 
                                        fullWidth 
                                        label="State" 
                                        margin="normal" 
                                        size="small" 
                                        id="US-CA" 
                                        variant="outlined" 
                                        defaultValue="California" 
                                    /> 
                                </Grid>
                            </Grid>
                            <Button 
                                className={classes.continueButton}
                                type="submit"
                                fullWidth 
                                variant="contained" 
                                color="primary" 
                            >
                                Continue
                            </Button>
                        </CardContent>
                    </Card>
                </form>
            </FormProvider> :

            // COLLAPSED SHIPPING FORM
            <ShippingFormCollapsed section={section} shippingInfo={shippingInfo} setSection={setSection} />
            }
        </>
    );
};

export default ShippingForm;
