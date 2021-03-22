import React from 'react';
import { 
    Grid, Card, CardContent, CardHeader, 
    Button, TextField, Divider,  
} from '@material-ui/core';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { useForm, FormProvider } from 'react-hook-form';
import TextInput from './TextInput';
import ShippingFormCollapsed from './ShippingFormCollapsed';
import useStyles from './styles';

const ShippingForm = ({ section, inputError, shippingInfo, setShippingSection, setSection, giftMsg, setGiftMsg, deliveryDate, setDeliveryDate }) => {
    const classes = useStyles();
    const methods = useForm();
    const state = 'US-CA';

    const handleMsgChange = (e) => {
        setGiftMsg(e.target.value);
    };

    const handleDateChange = (date) => {
        setDeliveryDate(date);
        console.log(date);
    };

    return (
        <>
            {(section === 2) ?

            // EXPANDED SHIPPING FORM
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit((data) => setShippingSection({...data, state, ...shippingInfo}))}>
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
                            <Grid container justify="space-between" spacing={1}>
                                <Grid item xs={3} sm={3} md={3} lg={3}>
                                    <TextInput 
                                        name="zipcode" 
                                        label="Zip-code" 
                                        defaultValue={shippingInfo.zipcode} 
                                        helperText={inputError.zipcode}
                                    />
                                </Grid>
                                <Grid item xs={5} sm={5} md={5} lg={5}>
                                    <TextInput 
                                        name="city" 
                                        label="City" 
                                        defaultValue={shippingInfo.city} 
                                        helperText={inputError.city}
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

                            <Divider className={classes.divider} />

                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <KeyboardDatePicker
                                    margin="normal"
                                    // id="date-picker-dialog"
                                    label="Schedule delivery date"
                                    format="MM/dd/yyyy"
                                    value={deliveryDate}
                                    onChange={handleDateChange}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                    helperText={inputError.deliveryDate}
                                    error={inputError.deliveryDate}
                                />
                            </MuiPickersUtilsProvider>
                            <TextField
                                label="Enter a special message for the recipient here"
                                onChange={handleMsgChange}
                                fullWidth
                                multiline
                                margin="normal"
                                rows={5}
                                defaultValue={giftMsg}
                                variant="outlined"
                                name="gift_msg"
                            />
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
            <ShippingFormCollapsed 
                section={section} 
                shippingInfo={shippingInfo} 
                setSection={setSection} 
            />
            }
        </>
    );
};

export default ShippingForm;
