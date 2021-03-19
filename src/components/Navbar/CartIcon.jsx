import React from 'react';
import { Link } from 'react-router-dom';
import { IconButton, Badge } from '@material-ui/core';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import useStyles from './cartIconStyles';

const CartIcon = ({ cart }) => {
    const classes = useStyles();

    return (
        <Link to='/cart'>
            <IconButton edge="end" className={classes.cartIcon} color="inherit" aria-label="menu">
                <Badge badgeContent={cart.total_items} color="primary">
                    <ShoppingCartOutlinedIcon />
                </Badge>
            </IconButton>
        </Link>
    );
};

export default CartIcon;
