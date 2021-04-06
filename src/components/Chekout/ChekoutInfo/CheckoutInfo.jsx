import React, { useState, useEffect } from 'react';
import { commerce } from '../../../lib/commerce';
import EmailForm from './EmailForm';
import ShippingForm from './ShippingForm';
import PaymentForm from './PaymentForm';

const CheckoutInfo = ({ section, setSection, token, handleCaptureCheckout, error }) => {
    const [customerInfo, setCustomerInfo] = useState({});
    const [shippingInfo, setShippingInfo] = useState({});
    const [deliveryDate, setDeliveryDate] = useState(new Date());
    const [giftMsg, setGiftMsg] = useState('');
    const [inputError, setInputError] = useState({});
    const cityList = ["SAN FRANCISCO"];
    const locations = [ '94102', '94103', '94104', '94105', '94107', '94108', '94109', '94110', 
        '94111', '94112', '94114', '94115', '94116', '94117', '94118', '94121', '94122', '94123', '94124', 
        '94127', '94129', '94130', '94131', '94132', '94133', '94134'];

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
            setInputError({ ...inputError, zipcode: "Invalid zipcode"});
        } 

        else {
            setInputError({ ...inputError, zipcode: '' });

            // VALIDATE CITY
            // const formattedCityInput = info.city.toUpperCase();
            if(!locations.includes(info.zipcode)) {
                setInputError({ ...inputError, zipcode: true, location: "Delivery is not valid in your area."})
            } else {
                setInputError({ ...inputError, zipcode: false, locatio: false });

                // VALIDATE DELIVERY DATE
                const today = new Date();
                if(deliveryDate < today) {
                    // delivery is the same day
                    setInputError({ ...inputError, deliveryDate: "The selected delivery date is invalid"});
                } else {
                    setInputError({ ...inputError, deliveryDate: '' });
                    setShippingInfo(info);
                    setSection(3);   
                }
            }
        }
    };

    const setPaymentSection = () => {
        // click pay button 
        setSection(4);
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
                deliveryDate={deliveryDate}
                setCustomerInfo={setCustomerInfo}
                setPaymentSection={setPaymentSection}
                handleCaptureCheckout={handleCaptureCheckout}
            />
        </>
    );
};

export default CheckoutInfo;
