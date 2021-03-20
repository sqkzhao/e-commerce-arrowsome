import { Grid, Typography, Button } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import useStyles from './coverstyles';

const Cover = ({ cart }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
        <div className={classes.bg}>
            <Navbar cart={cart} />
            <Grid container direction="column" justify="center" alignItems="center" className={classes.container}>
                <Typography variant="h3" className={classes.title} align="center">
                    Lorem ipsum dolor sit amet
                </Typography>
                <Button 
                    component={Link} 
                    to='/shop'
                    size="large" 
                    variant="contained" 
                    color="primary" 
                    className={classes.shopButton}
                >
                    Shop Now
                </Button>
            </Grid>
        </div>
        </div>
    );
};

export default Cover;
