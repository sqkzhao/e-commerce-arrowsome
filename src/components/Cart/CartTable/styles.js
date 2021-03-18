import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
    table: {
        minWidth: 550,
        flexGrow: 1,
    },
    clearBorder: {
        border: 0
    },
    checkoutButton: {
        // margin: theme.spacing(1),
    },
    tableSubtotal: {
        marginTop: '15%',
    },
    textField: {
        // paddingLeft: theme.spacing(3),
    },
    toolbar: theme.mixins.toolbar,
}));