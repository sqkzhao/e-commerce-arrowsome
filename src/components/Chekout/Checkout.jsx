import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { commerce } from '../../lib/commerce';
import { Grid, Container } from '@material-ui/core';
import CheckoutInfo from './ChekoutInfo/CheckoutInfo';
import OrderSummary from './OrderSummary/OrderSummary';
import CheckoutNav from './CheckoutNav/CheckoutNav';
import useStyles from './styles';

const Checkout = ({ cart, handleCaptureCheckout, error }) => {
    const classes = useStyles();
    const history = useHistory();
    const [token, setToken] = useState(null);
    const [section, setSection] = useState(1);

    useEffect(() => {
        if(cart.id) {
            const fetchToken = async (cartId) => {
                try  {
                    const data = await commerce.checkout.generateToken(cartId, { type: 'cart' });
                    console.log("token", data);
                    console.log("cart", cart);
                    setToken(data);
                } catch(error) {
                    history.push('/');
                }
            }
            fetchToken(cart.id); 
        }  
    }, [cart]);

    return (
        <Grid className={classes.checkoutBox}>
            <CheckoutNav cart={cart} />

            <Container className={classes.container}>
                <div>
                    <Grid container justify="center" spacing={5}>
                        <Grid item xs={12} sm={12} md={6} lg={5}>
                            <CheckoutInfo 
                                token={token} 
                                handleCaptureCheckout={handleCaptureCheckout}
                                error={error}
                                section={section}
                                setSection={setSection}
                            />
                        </Grid>
                        
                        <Grid item xs={12} sm={12} md={6} lg={5}>
                            <OrderSummary token={token} cart={cart} />
                        </Grid> 
                    </Grid>
                </div> 
            </Container>
        </Grid>
    );
};

export default Checkout;


