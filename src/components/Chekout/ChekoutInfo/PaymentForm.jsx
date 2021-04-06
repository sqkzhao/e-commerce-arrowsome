import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useHistory } from 'react-router-dom';
import  { 
    Grid, Card, CardContent, CardHeader, Button, 
    TextField, FormHelperText, Typography, ThemeProvider 
} from '@material-ui/core';
import { Elements, ElementsConsumer, CardElement } from '@stripe/react-stripe-js';
import CreditCardOutlinedIcon from '@material-ui/icons/CreditCardOutlined';
import PaymentFormCollapsed from './PaymentFormCollapsed';
import { colortheme } from '../../../lib/colortheme';
import useStyles from './styles';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const PaymentForm = ({ section, setPaymentSection, token, giftMsg, deliveryDate, shippingInfo, customerInfo, setCustomerInfo, handleCaptureCheckout }) => {
    const [disabled, setDisabled] = useState(true);
    const [cardError, setCardError] = useState('');
    const classes = useStyles();
    const history = useHistory();

    const handleOnChange = (e) => {
        setCustomerInfo({...customerInfo, [e.target.name]: e.target.value});
    };

    const handleChange = async (e) => {
        setDisabled(e.empty);
        setCardError(e.error ? e.error.message : '');
    };

    const handleSubmit = async (e, elements, stripe) => {
        e.preventDefault();
        
        if(!stripe || !elements)  return;

        const cardElement = elements.getElement(CardElement);

        const { error, paymentMethod } = await stripe.createPaymentMethod({ type: 'card', card: cardElement });
        if(error) {
            // console.log('[error]', error);
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
                    // town_city: shippingInfo.city,
                    town_city: 'San Francisco',
                    county_state: 'US-CA',
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
                extra_fields: {
                    "extr_DWy4oG4Jn56Jx2": giftMsg,
                    "extr_RyWOwmdOplnEa2": deliveryDate.toLocaleDateString(),
                },
            };
            handleCaptureCheckout(token.id, orderInfo);
            setPaymentSection();
            history.push('/comfirmation');
        }
    };

    const cardStyle = {
        style: {
          base: {
            color: "#000",
            fontFamily: 'Roboto, Arial, sans-serif',
            fontSmoothing: "antialiased",
            fontSize: "16px",
            "::placeholder": {
              color: "#808080"
            }
          },
          invalid: {
            color: "#fa755a",
            iconColor: "#fa755a"
          }
        }
    };

    return (
        <>
            {(section === 3) ?
            
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
                                    <Card className={classes.creditCard}>
                                        <CardContent>
                                            <Grid container spacing={1}>
                                            <Grid item>
                                                <CreditCardOutlinedIcon />
                                            </Grid>
                                            <Grid item>
                                                <Typography variant="subtitle1">
                                                    Card holder
                                                </Typography>
                                            </Grid>
                                            </Grid>
                                            <Grid container justify="space-around" spacing={3}>
                                                <ThemeProvider theme={colortheme}>
                                                    <Grid item xs={6} sm={6} md={6} lg={6}>
                                                        <TextField 
                                                            fullWidth 
                                                            required
                                                            className={classes.nameField}
                                                            color='primary'
                                                            name="firstName" 
                                                            size="small" 
                                                            placeholder="First name*"
                                                            onChange={handleOnChange} 
                                                        />
                                                    </Grid>
                                                    <Grid item xs={6} sm={6} md={6} lg={6}>
                                                        <TextField 
                                                            fullWidth 
                                                            required
                                                            name="lastName" 
                                                            className={classes.nameField}
                                                            size="small" 
                                                            placeholder="Last name*"
                                                            onChange={handleOnChange} 
                                                        />
                                                    </Grid>
                                                </ThemeProvider>
                                            </Grid> 

                                            <CardElement options={cardStyle} onChange={handleChange} />
                                            
                                            {cardError ? 
                                            <FormHelperText className={classes.errorMsg}>{cardError}</FormHelperText> : 
                                            <FormHelperText> </FormHelperText>}

                                            <ThemeProvider theme={colortheme}>
                                                <Button 
                                                    disabled={disabled || !stripe}
                                                    className={classes.payButton} 
                                                    type="submit"
                                                    fullWidth 
                                                    variant="contained"
                                                    color="primary"
                                                >
                                                    Pay {token && token.live.subtotal.formatted_with_symbol}
                                                </Button>
                                            </ThemeProvider>
                                        </CardContent>
                                    </Card>
                                </CardContent>
                            </form>
                        )}
                    </ElementsConsumer>
                </Elements>
            </Card> :

            <PaymentFormCollapsed />}
        </>
    );
};

export default PaymentForm;
