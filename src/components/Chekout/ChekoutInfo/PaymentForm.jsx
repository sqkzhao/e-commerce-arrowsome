import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import  { Grid, Card, CardContent, CardHeader, Button, TextField, Typography } from '@material-ui/core';
import { Elements, ElementsConsumer, CardElement } from '@stripe/react-stripe-js';
import useStyles from './styles';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const PaymentForm = ({ token, shippingInfo, customerInfo, setCustomerInfo, handleCaptureCheckout }) => {
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState('');
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState('');
    const classes = useStyles();
    // const methods = useForm();

    const handleOnChange = (e) => {
        setCustomerInfo({...customerInfo, [e.target.name]: e.target.value});
        // console.log(customerInfo);
    };

    // const handleChange = async (e) => {
    //     setDisabled(e.empty);
    //     setError(e.error ? e.error.message : '');
    // };

    const handleSubmit = async (e, elements, stripe) => {
        e.preventDefault();
        console.log("processing", !stripe, !elements);
        // setProcessing(true);


        if(!stripe || !elements)  return;

        const cardElement = elements.getElement(CardElement);
        const { error, paymentMethod } = await stripe.createPaymentMethod({ type: 'card', card: cardElement });
        if(error) {
            console.log('[error]', error);
        } else {
            const orderInfo = {
                line_items: token.live.line_items,
                customer: { 
                    firstname: customerInfo.firstName,
                    lastname: customerInfo.lastName,
                    email: customerInfo.email
                },
                shipping: {
                    name: shippingInfo.firstName + " " + shippingInfo.lastName,
                    street: shippingInfo.address,
                    town_city: shippingInfo.city,
                    county_state: shippingInfo.state,
                    postal_zip_code: shippingInfo.zipcode,
                    country: 'US'
                },
                fulfillment: {
                    shipping_method: shippingInfo.option.id
                },
                payment: {
                    gateway: 'stripe',
                    stripe: {
                        payment_method_id: paymentMethod.id
                    },
                },
            };
            console.log(orderInfo);
            handleCaptureCheckout(token.id, orderInfo);
        }
    };

    return (
        <>
            <Card className={classes.box} elevation={0}>
                <CardHeader
                    title="3. Payment"
                    className={classes.header}
                /> 
                <Elements stripe={stripePromise}>
                    <ElementsConsumer>
                        {({elements, stripe}) => (
                            <form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
                                <CardContent>
                                    <Grid container justify="space-around" spacing={3}>
                                        <Grid item xs={6} sm={6} md={6} lg={6}>
                                            <TextField fullWidth name="firstName" label="First Name" onChange={handleOnChange}/>
                                        </Grid>
                                        <Grid item xs={6} sm={6} md={6} lg={6}>
                                            <TextField fullWidth name="lastName" label="Last Name" onChange={handleOnChange} />
                                        </Grid>
                                    </Grid>
                                    <CardElement />
                                    <Button 
                                        // disabled={processing || disabled || succeeded}
                                        className={classes.continueButton} 
                                        type="submit"
                                        fullWidth 
                                        disabled={!stripe}
                                        variant="contained"
                                        color="primary"
                                    >
                                        Pay {token.live.subtotal.formatted_with_symbol}
                                    </Button>
                                    {/* {error &&
                                        <div>{error}</div>
                                    } */}
                                </CardContent>
                            </form>
                        )}
                    </ElementsConsumer>
                </Elements>
            </Card>
        </>
    );
};

export default PaymentForm;
