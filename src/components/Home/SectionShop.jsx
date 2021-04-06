import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Card, Container, CardMedia, Typography, useMediaQuery, Divider } from '@material-ui/core';
import useStyles from './sectionShopStyles';

const SectionShop = ({ products }) => {
    const classes = useStyles();
    const matches = useMediaQuery('(min-width:600px)');

    return (
        <Grid container className={classes.root}>
            <Container className={classes.container}>
                <Grid className={classes.title}>
                    <Typography variant="h6" align="center">
                        Ut enim ad minim veniam, quis nostrud exercitation
                    </Typography>
                    <Divider className={classes.divider} />
                </Grid>
                <Grid container justify="center" spacing={3}>
                    {products.map((product, index) => ((index < 3) &&
                    <Grid item xs={8} sm={3} md={3} lg={3} key={index}>
                        {/* <Card square>
                            <CardMedia
                                className={matches ? classes.media : classes.mobileMedia}
                                image={product.media.source}
                                title={products.name}
                                component={Link}
                                to={`/shop/${product.id}`}
                            />
                        </Card> */}
                        <Link to='/shop'>
                        <button 
                            style={{
                                background: `url(${product.media.source}) no-repeat`, 
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                border: 'none',
                            }} 
                            className={matches ? classes.media : classes.mobileMedia}
                            id={product.media.source}
                            // onClick={HandlerSelect}
                        >
                            <Typography color="secondary" variant="h4" className={classes.innerButton}>
                                Shop
                            </Typography>
                        </button>
                        </Link>
                    </Grid>
                    ))}
                </Grid>
            </Container>
        </Grid>
    );
};

export default SectionShop;
