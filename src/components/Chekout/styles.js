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
        color: 'black',
    },
    toolbar: theme.mixins.toolbar,
    container: {
        paddingTop: '70px',
        flexGrow: '1',
    },
    box: {
        border: 'solid 1px #DCDCDC',
    }
}));