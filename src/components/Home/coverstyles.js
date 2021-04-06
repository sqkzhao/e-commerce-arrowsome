import { makeStyles } from '@material-ui/core';

export default makeStyles(() => ({
    root: {
        // width: '100vw',
        // width: '70vw',
        // marginTop: 15,
        // height: '88vh',    
        height: '100vh',    
        // backgroundImage: `url("https://images.unsplash.com/photo-1588278409822-17cd6339d16d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80")`,
        backgroundImage: `url("https://images.unsplash.com/photo-1527061011665-3652c757a4d4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=933&q=80")`,
        // backgroundImage: `url("https://magnolia.a58jq0h9-liquidwebsites.com/wp-content/uploads/2019/04/image10-2-e1555292318643.jpg")`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
    },
    divider: {
        marginTop: 15,
        // marginBottom: 30,
    },
    bg: {
        // backgroundColor: '#0d362f',
        // background: `linear-gradient(#0d362f, #fefeff)`,
        // paddingBottom: 120,
    },
    container: {
        height: '75vh',
        marginTop: 25,
        backgroundColor: 'rgba(13,54,47, 0.3)',
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