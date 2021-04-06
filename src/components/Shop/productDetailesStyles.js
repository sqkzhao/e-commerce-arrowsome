import { makeStyles } from '@material-ui/core';

export default makeStyles(() => ({
    root: {
        maxWidth: 530,
        paddingBottom: 0,
    },
    media: {
        height: 500,
    },
    mobileMedia: {
        height: '100vw',
    },
    cartButton: {
        paddingTop: '15px',
        paddingBottom: '15px',
        margin: '25px 0 35px 0',
        borderRadius: '0',
    },
    productBox: {
        marginTop: 60,
        marginBottom: 80,
    },
    divider: {
        marginTop: 20,
    },
}));

