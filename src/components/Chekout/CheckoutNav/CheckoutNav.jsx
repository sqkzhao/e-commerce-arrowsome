import React from 'react';
import { Link } from 'react-router-dom';
import { Container, AppBar, Toolbar, Typography } from '@material-ui/core';
import useStyles from './styles';

const CheckoutNav = () => {
    const classes = useStyles();

    return (
        <>
            <AppBar className={classes.appbar} position="fixed" color="inherit" elevation={0}>
                <Toolbar>
                    <Container>
                        <Typography className={classes.title} align="left" variant="h6">
                            <Link to='/' className={classes.title}>
                                ARROWSOME
                            </Link>
                        </Typography>
                    </Container>
                </Toolbar>
            </AppBar>

            <div className={classes.toolbar} />
        </>
    );
};

export default CheckoutNav;
