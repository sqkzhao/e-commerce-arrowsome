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
            >
                <MenuIcon onClick={handleClickOpen} />
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
                            <Typography className={classes.title} align="center" variant="h6">
                                <Link to='/' className={classes.title}>ARROWSOME</Link>
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
                    alignItems="center" 
                >
                    <Link to='/shop' className={classes.link}>
                        <Button>
                            <Typography className={classes.menuItem} variant="h4">
                                Shop
                            </Typography>
                        </Button>
                    </Link>
                    <Link to='/ourstory' className={classes.link}>
                        <Button>
                            <Typography className={classes.menuItem} variant="h4">
                                Our Story
                            </Typography>
                        </Button>
                    </Link>
                    <Link to='/contact' className={classes.link}>
                        <Button>
                            <Typography className={classes.menuItem} variant="h4">
                                Contact
                            </Typography>
                        </Button>
                    </Link>
                </Grid>
            </Dialog>
        </div>
    );
};

export default Menu;
