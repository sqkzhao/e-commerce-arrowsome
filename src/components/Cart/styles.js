import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    title: {
        marginBottom: '3%',
    },
    itemGrid: {
        width: '100vw',
        borderBottom: 'solid 1px #DCDCDC',
        paddingTop: '10px',
        paddingBottom: '10px',
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
}));

