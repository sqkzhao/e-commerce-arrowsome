import React from 'react';
import { Link } from 'react-router-dom';
import { Container, AppBar, Toolbar, Typography, Grid, IconButton } from '@material-ui/core';
import CartIcon from '../../Navbar/CartIcon';
import StoreIcon from '@material-ui/icons/Store';
import useStyles from './styles';

const CheckoutNav = ({ cart }) => {
    const classes = useStyles();

    return (
        <>
            <AppBar className={classes.appbar} position="fixed" color="inherit" elevation={0}>
                <Toolbar>
                    <Container>
                        <Grid container>
                            <Typography className={classes.title} align="left" variant="h6" component={Link} to='/'>
                                ARROWSOME
                            </Typography>
                            <IconButton component={Link} to='/shop' className={classes.icon}>
                                <StoreIcon />
                            </IconButton>
                            <CartIcon cart={cart} />
                        </Grid>
                    </Container>
                </Toolbar>
            </AppBar>

            <div className={classes.toolbar} />
        </>
    );
};

export default CheckoutNav;
