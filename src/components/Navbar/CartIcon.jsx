import React from 'react';
import { Link } from 'react-router-dom';
import { IconButton, Badge } from '@material-ui/core';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import useStyles from './cartIconStyles';

const CartIcon = ({ cart }) => {
    const classes = useStyles();

    if(!cart) return 'Loading';

    return (
        <Link to='/cart'>
            <IconButton 
                className={classes.cartIcon} 
                edge="end" 
                color="inherit" 
                aria-label="menu"
            >
                <Badge badgeContent={cart.total_items} color="primary">
                    <LocalMallOutlinedIcon />
                </Badge>
            </IconButton>
        </Link>
    );
};

export default CartIcon;
