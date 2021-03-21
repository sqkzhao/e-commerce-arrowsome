import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, Button } from '@material-ui/core';
import Navbar from '../Navbar/Navbar';
import useStyles from './coverstyles';

const Cover = ({ cart }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.bg}>
                <Navbar cart={cart} />
                <Grid 
                    className={classes.container} 
                    container 
                    direction="column" 
                    justify="center" 
                    alignItems="center"
                >
                    <Typography className={classes.title} variant="h3" align="center">
                        Lorem ipsum dolor sit amet
                    </Typography>
                    <Button 
                        className={classes.shopButton}
                        component={Link} 
                        to='/shop'
                        size="large" 
                        variant="contained" 
                        color="primary" 
                    >
                        Shop Now
                    </Button>
                </Grid>
            </div>
        </div>
    );
};

export default Cover;