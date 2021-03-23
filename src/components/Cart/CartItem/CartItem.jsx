import React, { useState } from 'react';
import { createMuiTheme, ThemeProvider, Card, Typography, Grid, TextField, IconButton, CardMedia, Divider } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import useStyles from './styles';

const CartItem = ({ item, handelUpdateCart, handleRemoveFromCart }) => {
    const classes = useStyles();
    const [qty, setQty] = useState(item.quantity);
    const qtyError = 'Invalid qty';

    const handleOnChange = (e) => {
        setQty(e.target.value);
        if(e.target.value !== '') {
            handelUpdateCart(item.id, e.target.value);
        }
    };

    const theme = createMuiTheme();

    theme.typography.body1 = {
        fontSize: '1.3rem',
        '@media (max-width:400px)': {
            fontSize: '0.9rem',
    },
    [theme.breakpoints.up('md')]: {
            fontSize: '1.3rem',
        },
    };

    theme.typography.body2 = {
        fontSize: '1.1rem',
        '@media (max-width:400px)': {
            fontSize: '0.8rem',
    },
    [theme.breakpoints.up('md')]: {
            fontSize: '1.1rem',
        },
    };

    return (
        <>
            <Grid className={classes.itemGrid} container direction="row" alignItems="center" spacing={2}>
                <Grid item xs={1} sm={1} md={1} lg={1}>
                    <IconButton onClick={() => handleRemoveFromCart(item.id)} edge="start" color="inherit" aria-label="close">
                        <CloseIcon className={classes.closeIcon} />
                    </IconButton>
                </Grid>
                <Grid className={classes.itemContent} item xs={3} sm={3} md={3} lg={2} >
                    <Card className={classes.picture} square>
                        <CardMedia image={item.media.source} className={classes.media} />
                    </Card>
                </Grid>
                <Grid item xs={3} sm={3} md={3} lg={5}>
                    <ThemeProvider theme={theme}>
                        <Typography variant='body1'>
                            {item.name}
                        </Typography>
                    </ThemeProvider>
                </Grid>
                <Grid item xs={3} sm={3} md={3} lg={2}>
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
                    <Typography variant='body2'>
                        {item.price.formatted_with_symbol}
                    </Typography>
                </Grid>
            </Grid>
            <Divider className={classes.divider} />
        </>
    );
};

export default CartItem;
