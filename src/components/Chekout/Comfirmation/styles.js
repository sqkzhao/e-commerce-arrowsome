import { makeStyles } from '@material-ui/core';
export default makeStyles((theme) => ({
    box: {
        border: 'solid 1px #DCDCDC',
        marginBottom: '15px',
        padding: '10px',
        width: '85%',
        textAlign: 'center',
    },
    divider: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
    button: {
        marginTop: '15px',
        backgroundColor: '#313131',
        color: '#fff',
        width: '100%',
        paddingTop: '8px',
        paddingBottom: '8px',
        borderRadius: '0',
    },
    circle: {
        padding: '7px',
        color: '#000',
    },
}));