import React, { useState, useEffect } from 'react';
import { commerce } from '../../../lib/commerce';
import EmailForm from './EmailForm';
import ShippingForm from './ShippingForm';
import PaymentForm from './PaymentForm';
import useStyles from './styles';

const CheckoutInfo = ({ token, order, handleCaptureCheckout, error }) => {
    const classes = useStyles();
    const [customerInfo, setCustomerInfo] = useState({});
    const [shippingInfo, setShippingInfo] = useState({});
    const [section, setSection] = useState(1);

    const setEmailSection = (info) => {
        setCustomerInfo(info);
        setSection(2);
    };

    const setShippingSection = (info) => {
        setShippingInfo(info);
        setSection(3);
        console.log(shippingInfo);
    };


    const fetchShippingOptions = async (checkoutTokenId) => {
        const options = await commerce.checkout.getShippingOptions(checkoutTokenId, {
            country: 'US',
            region: 'CA',
        });
        const option = options[0];
        setShippingInfo({...shippingInfo, option});
    };

    useEffect(() => {
        fetchShippingOptions(token.id);
    }, [token])
    // const setPaymentSection = (info) => {
    //     setBillingInfo(info);
    //     setPayment(info);
    //     setSection(4);
    //     console.log(billingInfo);
    // };

    return (
        <>
            <EmailForm 
                section={section} 
                email={customerInfo.email} 
                setEmailSection={setEmailSection} 
                setSection={setSection} 
            />
            <ShippingForm 
                section={section} 
                shippingInfo={shippingInfo} 
                setShippingSection={setShippingSection} 
                setSection={setSection} 
            />
            <PaymentForm 
                token={token} 
                shippingInfo={shippingInfo}
                customerInfo={customerInfo} 
                setCustomerInfo={setCustomerInfo}
                handleCaptureCheckout={handleCaptureCheckout}
            />
            {shippingInfo.option && shippingInfo.option.description}
        </>
    );
};

export default CheckoutInfo;
