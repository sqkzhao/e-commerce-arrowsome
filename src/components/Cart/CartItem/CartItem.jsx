import React, { useState } from 'react';
import { 
    Card, Typography, 
    Grid, TextField, IconButton, CardMedia, 
    Divider, useMediaQuery, ThemeProvider
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { colortheme } from '../../../lib/colortheme';
import useStyles from './styles';

const CartItem = ({ item, handelUpdateCart, handleRemoveFromCart }) => {
    const classes = useStyles();
    const matches = useMediaQuery('(min-width:800px)');
    const [qty, setQty] = useState(item.quantity);
    const qtyError = 'Invalid qty';

    const handleOnChange = (e) => {
        setQty(e.target.value);
        if(e.target.value !== '') {
            handelUpdateCart(item.id, e.target.value);
        }
    };

    return (
        <>
        <ThemeProvider theme={colortheme}>
            <Grid className={classes.itemGrid} container direction="row" alignItems="center" spacing={2}>
                <Grid item xs={1} sm={1} md={1} lg={1}>
                    <IconButton onClick={() => handleRemoveFromCart(item.id)} edge="start" color="inherit" aria-label="close">
                        <CloseIcon className={classes.closeIcon} />
                    </IconButton>
                </Grid>
                <Grid className={classes.itemContent} item xs={3} sm={3} md={2} lg={2} >
                    <Card className={classes.picture} square>
                        <CardMedia image={item.media.source} className={matches ? classes.media : classes.mobileMedia} /> 
                    </Card>
                </Grid>
                <Grid item xs={3} sm={3} md={5} lg={5}>
                    <Typography className={matches ? classes.name : classes.mobileName}>
                        {item.name}
                    </Typography> 
                </Grid>
                <Grid item xs={3} sm={3} md={2} lg={2}>
                    <TextField
                        id="outlined-number"
                        type="number"
                        variant="outlined"
                        value={qty}
                        size="small"
                        onChange={handleOnChange}
                        error={(qty < 0) ? true : false}
                        helperText={(qty < 0) ? qtyError : ''}
                    />
                </Grid>
                <Grid item xs={2} sm={2} md={2} lg={2} align='right'>
                    <Typography className={matches ? classes.price : classes.mobilePrice}>
                        {item.price.formatted_with_symbol}
                    </Typography> 
                </Grid>
            </Grid>
            <Divider className={classes.divider} />
        </ThemeProvider>
        </>
    );
};

export default CartItem;
