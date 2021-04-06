import { makeStyles } from '@material-ui/core';
import { CenterFocusStrong } from '@material-ui/icons';

export default makeStyles(() => ({
    root: {
        width: '100vw',
        // height: '500px',
        // backgroundColor: '#dbf1c5',
    },
    container: {
        marginTop: 105,
        marginBottom: 135,
    },
    media: {
        // height: 290,
        width: '100%',
        height: '21.5vw',
    },
    mobileMedia: {
        // height: '74vw',
        width: '100%',
        height: '60vw',
    },
    title: {
        marginBottom: 45,
    },
    innerButton: {
        color: '#fff',
        border: '3px solid #fff',
        padding: '15px 0',
        width: '80%',
        margin: '0 auto',
        backgroundColor: 'rgba(13,54,47, 0.28)',
    },
    divider: {
        margin: '40px auto',
        width: '25%',
    },
}));