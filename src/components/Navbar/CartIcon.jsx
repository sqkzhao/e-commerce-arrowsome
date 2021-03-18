import React from 'react';
import { IconButton, Badge } from '@material-ui/core';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import useStyles from './cartIconStyles';

const CartIcon = ({ cart }) => {
    const classes = useStyles();

    return (
        <IconButton edge="end" className={classes.menuButton} color="inherit" aria-label="menu">
            <Badge badgeContent={cart.total_items} color="primary">
                <ShoppingCartOutlinedIcon />
            </Badge>
        </IconButton>
    );
};

export default CartIcon;
