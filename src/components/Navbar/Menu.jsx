import React from 'react';
import { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Slide, Button, List, ListItem, ListItemText, Dialog, Grid } from '@material-ui/core';
import MenuIcon  from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import CartIcon from './CartIcon';

import useStyles from './menuStyles';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

const Menu = ({ cart }) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    return (
        <div>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon onClick={handleClickOpen} />
            </IconButton>
            <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                <AppBar className={classes.appBar} color="inherit" elevation={0}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                            <CloseIcon />
                        </IconButton>
                        <Typography align="center" variant="h6" className={classes.title}>
                            ARROWSOME
                        </Typography>
                        <CartIcon cart={cart} className={classes.carticon} />
                    </Toolbar>
                </AppBar>
                <Grid container direction="column" justify="center" alignItems="center" className={classes.itemContianer}>
                    <Button>
                        <Typography variant="h4" className={classes.menuItem}>
                            Shop
                        </Typography>
                    </Button>
                    <Button>
                        <Typography variant="h4" className={classes.menuItem}>
                            Our Story
                        </Typography>
                    </Button>
                    <Button>
                        <Typography variant="h4" className={classes.menuItem}>
                            Contact
                        </Typography>
                    </Button>
                </Grid>
            </Dialog>
        </div>
    );
};

export default Menu;