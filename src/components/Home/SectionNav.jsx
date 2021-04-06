import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, Container, Card, CardMedia, Divider, useMediaQuery, IconButton } from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import useStyles from './sectionNavStyles';

const SectionNav = ({ products }) => {
    const classes = useStyles();
    // const matches = useMediaQuery('(min-width:415px)');
    const matches = useMediaQuery('(min-width:600px)');

    return (
        <Grid container className={classes.root}>
            <Container className={classes.container}>
                <Typography variant="h6">   
                    <strong>Arrowsome</strong>
                </Typography>
                <Divider className={classes.divider} />
                <br/>
                <Grid container justify="center" spacing={3}>
                    <Grid item xs={4} sm={5} md={5} lg={5}>
                        <Grid className={classes.link} component={Link} to='/about'>
                            <Typography variant="subtitle1">   
                                About
                            </Typography>
                        </Grid>
                        <br/>
                        <Grid className={classes.link} component={Link} to='/shop'>
                            <Typography variant="subtitle1">Shop</Typography>
                        </Grid>
                        <br/>
                        <Grid className={classes.link} component={Link} to='/shop'>
                            <Typography variant="subtitle1">Contact</Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs={8} sm={7} md={7} lg={7}>
                        {/* <InstagramIcon /> */}
                        <Typography variant="subtitle1">
                            Follow us on instagram @sdfkljsdklf
                        </Typography>
                        <Grid className={classes.posts} container justify="center" spacing={1}>
                            {products.map((product, index) => ((index < 4) &&
                            <Grid item xs={6} sm={3} md={3} lg={3} key={index}>
                                <Card square>
                                    <CardMedia
                                        className={matches ? classes.media : classes.mobileMedia}
                                        image={product.media.source}
                                        title={products.name}
                                        component={Link}
                                        to={`/shop/${product.id}`}
                                    /> 
                                </Card>
                            </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Grid>
    );
};

export default SectionNav;
