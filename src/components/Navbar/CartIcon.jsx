import React from 'react';
import { Link } from 'react-router-dom';
import { IconButton, Badge, ThemeProvider } from '@material-ui/core';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import { colortheme } from '../../lib/colortheme';

const CartIcon = ({ cart }) => {
    if(!cart) return;

    return (
        <IconButton 
            edge="end" 
            color="inherit" 
            aria-label="menu"
            component={Link}
            to='/cart'
        >
            <ThemeProvider theme={colortheme}>
                <Badge badgeContent={cart.total_items} color="primary">
                    <LocalMallOutlinedIcon />
                </Badge>
            </ThemeProvider>
        </IconButton>
    );
};

export default CartIcon;
