import React, { useState, useEffect } from 'react';
import EmailForm from './EmailForm';
import ShippingForm from './ShippingForm';
import PaymentForm from './PaymentForm';
import useStyles from './styles';

const CheckoutInfo = () => {
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
    }

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
            <PaymentForm />
        </>
    );
};

export default CheckoutInfo;
