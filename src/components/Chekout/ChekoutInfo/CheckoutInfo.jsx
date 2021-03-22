import React, { useState, useEffect } from 'react';
import { commerce } from '../../../lib/commerce';
import EmailForm from './EmailForm';
import ShippingForm from './ShippingForm';
import PaymentForm from './PaymentForm';
import useStyles from './styles';

const CheckoutInfo = ({ token, handleCaptureCheckout, error }) => {
    const classes = useStyles();
    const [customerInfo, setCustomerInfo] = useState({});
    const [shippingInfo, setShippingInfo] = useState({});
    const [deliveryDate, setDeliveryDate] = useState(new Date());
    const [giftMsg, setGiftMsg] = useState('');
    const [section, setSection] = useState(1);
    const [inputError, setInputError] = useState({});
    const cityList = ["SAN FRANCISCO", "DALY CITY"];

    // https://public.opendatasoft.com/api/records/1.0/search/?dataset=us-zip-codes&q=94103

    const setEmailSection = (info) => {
        const pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(info.email)) {
            setInputError({ email: "Invalid email address"});
        } else {
            setInputError({});
            setCustomerInfo(info);
            setSection(2);
        }
    };

    const setShippingSection = (info) => {
        // VALIDATE ZIPCODE
        if(info.zipcode.length !== 5) {
            setInputError({ zipcode: "Invalid zipcode"});
        } else {
            setInputError({});

            // VALIDATE CITY
            if(!cityList.includes(info.city.toUpperCase())) {
                setInputError({ city: "Sorry, delivery is not available in your area."});
            } else {
                setInputError({});

                // VALIDATE DELIVERY DATE
                const today = new Date();
                if(deliveryDate < today) {
                    // delivery is the same day
                    setInputError({ deliveryDate: "The selected delivery date is invalid"});
                } else {
                    setInputError({});
                    setShippingInfo(info);
                    setSection(3);   
                }
            }
        }
    };

    const setPaymentSection = (num) => {
        // click pay button 
        setSection(num);
    }

    const fetchShippingOptions = async (checkoutTokenId) => {
        const options = await commerce.checkout.getShippingOptions(checkoutTokenId, {
            country: 'US',
            region: 'CA',
        });
        const option = options[0];
        setShippingInfo({...shippingInfo, option});
    };

    useEffect(() => {
        if(token) {
            fetchShippingOptions(token.id);
        }
    }, [token])

    return (
        <>  
            {error}
            <EmailForm 
                section={section} 
                email={customerInfo.email} 
                setEmailSection={setEmailSection} 
                setSection={setSection} 
                inputError={inputError}
            />
            <ShippingForm 
                section={section} 
                shippingInfo={shippingInfo} 
                giftMsg={giftMsg}
                setGiftMsg={setGiftMsg}
                deliveryDate={deliveryDate}
                setDeliveryDate={setDeliveryDate}
                setShippingSection={setShippingSection} 
                setSection={setSection} 
                inputError={inputError}
            />
            <PaymentForm 
                token={token} 
                section={section} 
                giftMsg={giftMsg}
                shippingInfo={shippingInfo}
                customerInfo={customerInfo} 
                setCustomerInfo={setCustomerInfo}
                setPaymentSection={setPaymentSection}
                handleCaptureCheckout={handleCaptureCheckout}
            />
        </>
    );
};

export default CheckoutInfo;
