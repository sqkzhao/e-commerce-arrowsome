import React from 'react';
import { Grid, TextField, IconButton, Button, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

import useStyles from './styles';

const CartTable = ({ cart, handleRemoveFromCart }) => {
    const classes = useStyles();

    return (
        <TableContainer>
            <Table className={classes.table} aria-label="spanning table">
                <TableHead>
                    <TableRow>
                        <TableCell>ITEM</TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell align="right">QTY.</TableCell>
                        <TableCell align="right">PRICE</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {cart.line_items.map((item) => (
                    <TableRow key={item.id}>
                        <TableCell>
                            <IconButton edge="start" color="inherit" aria-label="close">
                                <CloseIcon onClick={() => handleRemoveFromCart(item.id)}/>
                            </IconButton>
                        </TableCell>
                        <TableCell>
                            <img src={item.media.source} alt={item.description} width="110" height="120" />
                        </TableCell>
                        <TableCell>{item.name}</TableCell>
                        <TableCell align="right" className={classes.textField}>
                            <TextField
                                id="outlined-number"
                                type="number"
                                variant="outlined"
                                value={item.quantity}
                                size="small"
                            />
                        </TableCell>
                        <TableCell align="right">{item.price.formatted_with_symbol}</TableCell>
                    </TableRow>
                    ))}
                    <TableRow>
                        <TableCell rowSpan={2} colSpan={4} className={classes.clearBorder} />
                        <TableCell align="right" className={classes.clearBorder}>
                            <Typography className={classes.tableSubtotal}>
                                Sutotal {cart.subtotal.formatted_with_symbol}
                            </Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="right" className={classes.clearBorder}>
                            <Button size="large" color="primary" variant="contained" className={classes.checkoutButton}>
                                CHECKOUT
                            </Button>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default CartTable;



{/* <TableContainer >
<Table className={classes.table} aria-label="spanning table">
    <TableHead>
        <TableRow>
            <TableCell>ITEM</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell align="right">QTY.</TableCell>
            <TableCell align="right">PRICE</TableCell>
        </TableRow>
    </TableHead>
    <TableBody>
        {cart.line_items.map((item) => (
        <TableRow key={item.id}>
            <TableCell>
                <IconButton edge="start" color="inherit" aria-label="close">
                    <CloseIcon onClick={() => handleRemoveFromCart(item.id)}/>
                </IconButton>
            </TableCell>
            <TableCell>
                <img src={item.media.source} alt={item.description} width="110" height="120" />
            </TableCell>
            <TableCell>{item.name}</TableCell>
            <TableCell align="right" className={classes.textField}>
                <TextField
                    id="outlined-number"
                    type="number"
                    variant="outlined"
                    value={item.quantity}
                    size="small"
                />
            </TableCell>
            <TableCell align="right">{item.price.formatted_with_symbol}</TableCell>
        </TableRow>
        ))}
        <TableRow>
            <TableCell rowSpan={2} colSpan={4} className={classes.clearBorder} />
            <TableCell align="right" className={classes.clearBorder}>
                <Typography className={classes.tableSubtotal}>
                    Sutotal {cart.subtotal.formatted_with_symbol}
                </Typography>
            </TableCell>
        </TableRow>
        <TableRow>
            <TableCell align="right" className={classes.clearBorder}>
                <Button size="large" color="primary" variant="contained" className={classes.checkoutButton}>
                    CHECKOUT
                </Button>
            </TableCell>
        </TableRow>
    </TableBody>
</Table>
</TableContainer> */}