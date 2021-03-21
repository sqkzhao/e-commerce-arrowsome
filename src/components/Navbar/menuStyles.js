import { makeStyles } from '@material-ui/core';

export default makeStyles(() => ({
    appBar: {
      position: 'relative',
      paddingTop: '25px',
    },
    title: {
      flexGrow: 1,
      textDecoration: 'none',
      color: 'black',
    },
    carticon: {
      flexGrow: 1,
    },
    menuItem: {
      width: '100vw',
    },
    itemContianer: {
      height: '80vh',
    },
    link: {
      textDecoration: 'none',
      color: 'black',
    },
}));
