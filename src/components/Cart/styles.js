import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    itemGrid: {
        width: '100vw',
    },
    header: {
        color: '#b6b6b6',
    },
    subtotal: {
        paddingTop: '40px',
    },
    checkoutButton: {
        marginTop: '40px',
        marginBottom: '40px',
        borderRadius: '0',
    },
    circle: {
        paddingTop: '40vh',
    },
    divider: {
        width: '100%',
        marginBottom: 15,
    },
    cartBox: {
        marginBottom: 80,
    },
    title: {
        marginBottom: '3%',
        fontSize: '2rem',
    },
    mobileTitle: {
        fontSize: '1.35rem',
        marginBottom: '5%',
    },
    backToShop: {
        textDecoration: 'none',
        color: '#0d362f',
        marginBottom: 40, 
    },
}));

