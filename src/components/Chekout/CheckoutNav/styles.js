import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
    appbar: {
        flexGrow: 1,
        padding: '10px',
        border: 'solid 1px #DCDCDC',
    },
    title: {
        flexGrow: 1,
        textDecoration: 'none',
        color: '#0d362f',
        paddingTop: 10,
    },
    icon: {
        textDecoration: 'none',
        color: '#000',
    },
    toolbar: theme.mixins.toolbar,
}));