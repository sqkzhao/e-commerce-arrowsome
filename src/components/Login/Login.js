import { React, useEffect } from 'react';
import { commerce } from '../../lib/commerce';
import { TextField, Button } from '@material-ui/core';

const Login = () => {

    const fetchLogin = async () => {
        if(commerce) {
        commerce.customers.login('SQKZHAO@GMAIL.COM', 'http://localhost:3000/login/callback')
        .then((token) => console.log(token))
        .catch((err) => console.log(err))
        }
    };

    useEffect(() => {
        fetchLogin();
    }, []);

    return (
        <>
        <form noValidate autoComplete="off">
            <TextField id="standard-basic" label="Standard" />
            <Button>dfsf</Button>
        </form>
        </>
    )
};

export default Login;
