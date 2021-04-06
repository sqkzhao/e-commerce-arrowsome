import { makeStyles } from '@material-ui/core';

export default makeStyles(() => ({
    root: {
        width: '100vw',
        height: '100vh',        
        backgroundImage: `url("https://magnolia.a58jq0h9-liquidwebsites.com/wp-content/uploads/2019/04/image10-2-e1555292318643.jpg")`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
    },
    container: {
        height: '75vh',
    },
    mobileTitle: {
        fontSize: '2rem',
    },
    shopButton: {
        marginTop: '28px',
        borderRadius: '0',
        padding: '18px 35px',
        fontSize: '15px',
    },
}));