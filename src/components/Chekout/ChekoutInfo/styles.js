import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
    box: {
        border: 'solid 1px #DCDCDC',
        marginBottom: '15px',
        padding: '10px',
    },
    header: {
        paddingBottom: '0',
    },
    grayHeader: {
        color: '#808080',
    },
    cardContent: {
        paddingTop: '0',
    },
    continueButton: {
        marginTop: '15px',
        backgroundColor: '#313131',
        color: '#fff',
        width: '100%',
        paddingTop: '8px',
        paddingBottom: '8px',
        borderRadius: '0',
    },
    twoTextfield: {
        width: '48%',
    },
    editButton: {
        marginTop: theme.spacing(2),
        color: '#808080',
    },
}));