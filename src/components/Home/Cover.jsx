import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, Button, useMediaQuery, ThemeProvider } from '@material-ui/core';
import Navbar from '../Navbar/Navbar';
import { colortheme } from '../../lib/colortheme';
import useStyles from './coverstyles';

const Cover = ({ cart }) => {
    const classes = useStyles();
    const matches = useMediaQuery('(min-width:415px)');

    return (
        <div className={classes.root}>
            <Navbar cart={cart} />
            <Grid 
                className={classes.container} 
                container 
                direction="column" 
                justify="center" 
                alignItems="center"
            >
                <ThemeProvider theme={colortheme}>
                    <Typography 
                        className={matches ? classes.title : classes.mobileTitle} 
                        variant="h3" 
                        align="center"
                        color="primary"
                    >
                        Lorem ipsum dolor sit amet
                    </Typography>
                    <Button 
                        className={classes.shopButton}
                        color="primary"
                        component={Link} 
                        to='/shop'
                        size="large" 
                        variant="contained"
                    >
                        Shop Now
                    </Button>
                </ThemeProvider>
            </Grid>
        </div>
    );
};

export default Cover;
