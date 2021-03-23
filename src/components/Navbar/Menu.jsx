import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, AppBar, Toolbar, IconButton, Typography, Slide, Button, Dialog, Grid } from '@material-ui/core';
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
            <IconButton 
                className={classes.menuButton} 
                edge="start" 
                color="inherit" 
                aria-label="menu"
                onClick={handleClickOpen}
            >
                <MenuIcon />
            </IconButton>
            <Dialog 
                onClose={handleClose} 
                fullScreen 
                open={open} 
                TransitionComponent={Transition}
            >
                <Container>
                    <AppBar className={classes.appBar} color="inherit" elevation={0}>
                        <Toolbar>
                            <IconButton 
                                onClick={handleClose} 
                                edge="start" 
                                color="inherit" 
                                aria-label="close"
                            >
                                <CloseIcon />
                            </IconButton>
                            <Typography 
                                component={Link}
                                to='/' 
                                className={classes.title} 
                                align="center" 
                                variant="h6"
                            >
                                ARROWSOME
                            </Typography>
                            <CartIcon cart={cart} className={classes.carticon} />
                        </Toolbar>
                    </AppBar>
                </Container>
                <Grid 
                    className={classes.itemContianer}
                    container 
                    direction="column" 
                    justify="center" 
                >
                    <Button
                        component={Link}
                        to='/shop'
                    >
                        <Typography className={classes.menuItem} variant="h4" align="center">
                            Shop
                        </Typography>
                    </Button>
                    <Button
                        component={Link}
                        to='/ourstory'
                    >
                        <Typography className={classes.menuItem} variant="h4" align="center">
                            Our Story
                        </Typography>
                    </Button>
                    <Button
                        component={Link}
                        to='/contact'
                    >
                        <Typography className={classes.menuItem} variant="h4" align="center">
                            Contact
                        </Typography>
                    </Button>
                </Grid>
            </Dialog>
        </div>
    );
};

export default Menu;
