import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, AppBar, Toolbar, IconButton, Typography, Badge, Button, Snackbar } from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';

import Menu from './Menu';
import CartIcon from './CartIcon';
import useStyles from './navbarStyles';

const Navbar = ({ cart }) => {
    const classes = useStyles();

    return (
        <Container className={classes.root}>
            <AppBar position="static" color="transparent" elevation={0}>
                <Toolbar>
                    <Menu cart={cart} />
                    <Typography align="center" variant="h6" className={classes.title}>
                        <Link to='/' className={classes.title}>ARROWSOME</Link>
                    </Typography>
                    {/* <IconButton edge="end" className={classes.menuButton} color="inherit" aria-label="menu">
                        <InstagramIcon />
                    </IconButton> */}
                    <CartIcon cart={cart} className={classes.cartButton}/>
                </Toolbar>
            </AppBar>
        </Container>
    );
};

export default Navbar;

