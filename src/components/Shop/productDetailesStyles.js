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
    backToShop: {
        textDecoration: 'none',
        color: '#0d362f',
        marginBottom: 40, 
    },
    productBox: {
        marginTop: 40,
        marginBottom: 80,
    },
    divider: {
        marginTop: 20,
    },
    previewContainer: {
        maxWidth: 530,
        marginTop: 15,
    },
    preview: {
        width: '100%',
        height: 85,
    },
    mobilePreview: {
        width: '100%',
        height: '15vw',
    }
}));

