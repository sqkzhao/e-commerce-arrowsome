import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    title: {
        marginBottom: '3%',
    },
    itemGrid: {
        width: '100vw',
        // borderBottom: 'solid 1px #DCDCDC',
        // paddingTop: '10px',s
        // paddingBottom: '10px',
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
        backgroundColor: '#000',
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
}));

