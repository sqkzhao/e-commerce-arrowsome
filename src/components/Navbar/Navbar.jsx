import React from 'react';
import { Link } from 'react-router-dom';
import { Container, AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import Menu from './Menu';
import CartIcon from './CartIcon';
import useStyles from './navbarStyles';

const Navbar = ({ cart }) => {
    const classes = useStyles();

    return (
        <Container className={classes.root}>
            <AppBar 
                position="static" 
                color="transparent" 
                elevation={0}
            >
                <Toolbar>
                    <Menu cart={cart} />
                    <Typography className={classes.title} align="center" variant="h6">
                        <Link to='/' className={classes.title}>ARROWSOME</Link>
                    </Typography>
                    <CartIcon cart={cart} className={classes.cartButton}/>
                </Toolbar>
            </AppBar>
        </Container>
    );
};

export default Navbar;

