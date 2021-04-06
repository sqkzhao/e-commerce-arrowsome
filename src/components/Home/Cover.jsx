import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, Button, useMediaQuery, ThemeProvider, Divider, Container } from '@material-ui/core';
import Navbar from '../Navbar/Navbar';
import { colortheme } from '../../lib/colortheme';
import useStyles from './coverstyles';

const Cover = ({ cart }) => {
    const classes = useStyles();
    const matches = useMediaQuery('(min-width:415px)');

    return (
        <Grid className={classes.bg}>
            {/* <Container> */}
            {/* <Grid className={classes.root} item justify="center" spacing={3}> */}
            <Grid className={classes.root}>
                <Navbar cart={cart} />

                <Container>
                    {/* <Divider className={classes.divider} /> */}

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
                                color="secondary"
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
                </Container>

            </Grid>
            {/* </Container> */}
        </Grid>
    );
};

export default Cover;
