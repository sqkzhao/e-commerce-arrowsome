import React from 'react';
import { 
    Grid, Card, CardContent, CardHeader, FormHelperText,
    Button, TextField, Divider, ThemeProvider
} from '@material-ui/core';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { useForm, FormProvider } from 'react-hook-form';
import TextInput from './TextInput';
import ShippingFormCollapsed from './ShippingFormCollapsed';
import { colortheme } from '../../../lib/colortheme';
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
    };

    return (
        <>
            {(section === 2) ?

            // EXPANDED SHIPPING FORM
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit((data) => setShippingSection({...shippingInfo, ...data}))}>
                    <Card className={classes.box} elevation={0}>
                        <CardHeader
                            title="2. Shipping"
                            className={classes.header}
                        />            
                        <CardContent className={classes.cardContent}>
                            <ThemeProvider theme={colortheme}>
                            <Grid container justify="space-between" spacing={1}>
                                <Grid item xs={12} sm={6} md={6} lg={6}>
                                    <TextInput 
                                        name="firstName" 
                                        label="First name" 
                                        defaultValue={shippingInfo.firstName} 
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} md={6} lg={6}>
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
                                <Grid item xs={12} sm={3} md={3} lg={3}>
                                    <TextInput 
                                        name="zipcode" 
                                        label="Zipcode" 
                                        defaultValue={shippingInfo.zipcode} 
                                        helperText={inputError.zipcode}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={5} md={5} lg={5}>
                                    {/* <TextInput 
                                        name="city" 
                                        label="City" 
                                        defaultValue={shippingInfo.city} 
                                        helperText={inputError.city}
                                    /> */}
                                    <TextField 
                                        disabled 
                                        fullWidth 
                                        name="city" 
                                        label="City" 
                                        margin="normal" 
                                        size="small" 
                                        variant="outlined" 
                                        defaultValue="San Francisco" 
                                    /> 
                                </Grid>
                                <Grid item xs={12} sm={4} md={4} lg={4}>
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
                            <Grid>
                                <FormHelperText error>
                                    {inputError.location ? inputError.location : ''}
                                </FormHelperText>
                            </Grid>
                            </ThemeProvider>

                            <Divider className={classes.divider} />
                            
                            <ThemeProvider theme={colortheme}>
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <KeyboardDatePicker
                                        margin="normal"
                                        label="Schedule delivery date"
                                        format="MM/dd/yyyy"
                                        value={deliveryDate}
                                        onChange={handleDateChange}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                        helperText={inputError.deliveryDate}
                                        error={inputError.deliveryDate ? true : false}
                                    />
                                </MuiPickersUtilsProvider>
                                <TextField
                                    label="Enter a gift message"
                                    onChange={handleMsgChange}
                                    fullWidth
                                    multiline
                                    margin="normal"
                                    rows={5}
                                    defaultValue={giftMsg}
                                    variant="outlined"
                                    name="gift_msg"
                                />
                            </ThemeProvider>
                            <ThemeProvider theme={colortheme}>
                                <Button 
                                    className={classes.continueButton} 
                                    type="submit" 
                                    fullWidth 
                                    variant="contained" 
                                    color="primary"
                                >
                                    Continue
                                </Button>
                            </ThemeProvider>
                        </CardContent>
                    </Card>
                </form>
            </FormProvider> :

            // COLLAPSED SHIPPING FORM
            <ShippingFormCollapsed 
                section={section} 
                shippingInfo={shippingInfo} 
                giftMsg={giftMsg}
                deliveryDate={deliveryDate}
                setSection={setSection} 
            />
            }
        </>
    );
};

export default ShippingForm;
