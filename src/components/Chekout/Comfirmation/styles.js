import { makeStyles } from '@material-ui/core';
export default makeStyles((theme) => ({
    box: {
        border: 'solid 1px #DCDCDC',
        marginTop: 70,
        marginBottom: '15px',
        padding: '10px',
        width: '85%',
        textAlign: 'center',
        height: '65vh',
    },
    divider: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
    button: {
        marginTop: '15px',
        color: '#fff',
        width: '100%',
        paddingTop: '8px',
        paddingBottom: '8px',
        borderRadius: '0',
        backgroundColor: '#0d362f',
        '&:hover': {
            backgroundColor: '#254A43',
        },
    },
    circularButton: {
        backgroundColor: '#313131',
        color: '#fff',
        paddingTop: '8px',
        paddingBottom: '8px',
        borderRadius: '0',
    },
    circle: {
        marginTop: '100px',
        color: '#000',
    },
    textBox: {
        padding: '50px 0',
    },
}));