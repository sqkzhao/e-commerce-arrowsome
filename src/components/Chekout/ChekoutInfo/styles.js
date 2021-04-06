import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
    box: {
        border: 'solid 1px #DCDCDC',
        marginBottom: '15px',
        padding: '10px',
    },
    header: {
        // color: '#0d362f',
        paddingBottom: '0',
    },
    grayHeader: {
        color: '#808080',
    },
    cardContent: {
        paddingTop: '0',
    },
    continueButton: {
        backgroundColor: '#0d362f',
        marginTop: '15px',
        width: '100%',
        paddingTop: '8px',
        paddingBottom: '8px',
        borderRadius: '0',
        '&:hover': {
            backgroundColor: '#254A43',
        },
    },
    twoTextfield: {
        width: '48%',
    },
    editButton: {
        marginTop: theme.spacing(2),
        marginRight: theme.spacing(2),
        color: '#808080',
    },
    inputErr: {
        color: '#ff0000',
    },
    // ShippingForm
    divider: {
        marginTop: 20,
        marginBottom: 10,
    },
    // PaymentForm
    payButton: {
        backgroundColor: '#0d362f',
        marginTop: '8px',
        width: '100%',
        paddingTop: '5px',
        paddingBottom: '5px',
        borderRadius: '0',
        '&:hover': {
            backgroundColor: '#254A43',
        },
    },
    nameField: {
        marginBottom: '20px',
    },
    creditCard: {
        backgroundColor: '#e6eaea',
    },
    errorMsg: {
        color: '#ff0000',
        width: '100%',
        textAlign: 'right',
    },
}));