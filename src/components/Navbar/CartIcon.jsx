import React from 'react';
import { Link } from 'react-router-dom';
import { IconButton, Badge } from '@material-ui/core';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';

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
            <Badge badgeContent={cart.total_items} color="primary">
                <LocalMallOutlinedIcon />
            </Badge>
        </IconButton>
    );
};

export default CartIcon;
