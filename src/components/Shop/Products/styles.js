import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        marginBottom: 50,
    },
    root: {
        backgroundImage: `url("https://images.unsplash.com/photo-1491994336086-44f5d76dd8f2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        width: '100%',
        height: 80,
        // paddingLeft: 5,
        // paddingRight: 5,
    },
    title: {
        color: '#fffff2',
        backgroundColor: 'rgba(13,54,47, 0.8)',
        // height: '60%',
        height: '100%',
        paddingTop: 25,
    },
}));