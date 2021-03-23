import { makeStyles } from '@material-ui/core';

export default makeStyles(() => ({
    root: {
        width: '100vw',
        height: '100vh',        
        backgroundImage: `url("https://magnolia.a58jq0h9-liquidwebsites.com/wp-content/uploads/2019/04/image10-2-e1555292318643.jpg")`,
        // backgroundImage: `url("")`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
    },
    container: {
        height: '75vh',
    },
    title: {
        color: '#393939',
    },
    shopButton: {
        color: '#1f1f1f',
        backgroundColor: '#dbf1c5',
        marginTop: '28px',
        borderRadius: '0',
        padding: '18px 35px',
        fontSize: '15px',
    },
}));