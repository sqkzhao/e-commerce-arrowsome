import { makeStyles } from '@material-ui/core';
export default makeStyles((theme) => ({
    box: {
        border: 'solid 1px #DCDCDC',
        marginBottom: '15px',
        padding: '10px',
    },
    media: {
        height: 100,
    },
    mobileMedia: {
        height: '17.5vw',
    },
    header: {
        paddingBottom: '0',
    },
    removeButton: {
        padding: '0',
        marginTop: '5px',
        color: '#808080',
        fontSize: '10px',
        width: '50px',
    },
    itemGrid: {
        paddingBottom: '20px',
    },
    subtotalGrid: {
        color: '#808080',
    },
    totalGrid: {
        paddingTop: '20px',
    },
    circle: {
        padding: '10px',
    },
    picture: {
        boxShadow: 'none',
    },
}));