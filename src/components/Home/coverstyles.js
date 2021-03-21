import { makeStyles } from '@material-ui/core';

export default makeStyles(() => ({
    root: {
        width: '100vw',
        height: '100vh',        
        // backgroundImage: `url("https://magnolia.a58jq0h9-liquidwebsites.com/wp-content/uploads/2019/04/image10-2-e1555292318643.jpg")`,
        backgroundImage: `url("https://images.unsplash.com/photo-1561181286-d3fee7d55364?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80")`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
    },
    container: {
        height: '75vh',
    },
    title: {
        color: '#262626',
        // backgroundColor: 'rgb(0,0,0, 0.1)',
        // padding: '10px',
    },
    shopButton: {
        color: '#fff',
        marginTop: '28px',
        borderRadius: '0',
        padding: '18px 35px',
        fontSize: '15px',
    },
}));