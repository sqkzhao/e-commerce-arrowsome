import { makeStyles } from '@material-ui/core';

export default makeStyles(() => ({
    root: {
        maxWidth: 530,
        paddingBottom: 0,
      },
    media: {
        // aspectRatio: 0.9,
        height: 500,
    },
    cartButton: {
        paddingTop: '15px',
        paddingBottom: '15px',
        margin: '25px 0 35px 0',
        borderRadius: '0',
        color: '#fff',
        backgroundColor: '#000',
    },
    productBox: {
        marginTop: 60,
        marginBottom: 80,
    },
    divider: {
        marginTop: 20,
    },
}));

