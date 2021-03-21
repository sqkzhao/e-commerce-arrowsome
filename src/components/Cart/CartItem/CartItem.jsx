import React, { useState } from 'react';
import { Typography, Grid, TextField, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import useStyles from './styles';

const CartItem = ({ item, handelUpdateCart, handleRemoveFromCart }) => {
    const classes = useStyles();
    const [qty, setQty] = useState(item.quantity);

    const handleOnChange = (e) => {
        if(e.target.value > 0) {
            setQty(e.target.value);
            handelUpdateCart(item.id, e.target.value);
        }
    };

    return (
        <Grid className={classes.itemGrid} container direction="row" alignItems="center">
            <Grid item xs={1} sm={1} md={1} lg={1}>
                <IconButton edge="start" color="inherit" aria-label="close">
                    <CloseIcon onClick={() => handleRemoveFromCart(item.id)} className={classes.closeIcon} />
                </IconButton>
            </Grid>
            <Grid className={classes.itemContent} item xs={4} sm={3} md={2} lg={2} >
                <img src={item.media.source} alt={item.description} width="100" height="120" />
            </Grid>
            <Grid item xs={3} sm={4} md={6} lg={6}>
                <Typography variant='subtitle1'>{item.name}</Typography>
            </Grid>
            <Grid item xs={2} sm={2} md={1} lg={1}>
                <TextField
                    id="outlined-number"
                    type="number"
                    variant="outlined"
                    value={qty}
                    size="small"
                    onChange={handleOnChange}
                />            
            </Grid>
            <Grid align='right' item xs={2} sm={2} md={2} lg={2}>
                {item.price.formatted_with_symbol}
            </Grid>
        </Grid>
    );
};

export default CartItem;
