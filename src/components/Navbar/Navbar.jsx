import React from 'react';
import { Link } from 'react-router-dom';
import { Container, AppBar, Toolbar, Typography } from '@material-ui/core';
import Menu from './Menu';
import CartIcon from './CartIcon';
import InstagramIcon from '@material-ui/icons/Instagram';
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

