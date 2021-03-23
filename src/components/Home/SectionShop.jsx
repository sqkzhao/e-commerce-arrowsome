import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Card, Container, CardMedia, Typography } from '@material-ui/core';
import useStyles from './sectionStyles';

const SectionShop = ({ products }) => {
    const classes = useStyles();

    return (
        <Grid container className={classes.root}>
            <Container className={classes.container}>
                <Grid className={classes.title}>
                    <Typography variant="h6" align="center">
                        Ut enim ad minim veniam, quis nostrud exercitation
                    </Typography>
                </Grid>
                <Grid container justify="center" spacing={3}>
                    {products.map((product, index) => ((index < 3) &&
                    <Grid item xs={12} s={12} m={3} lg={3} key={index}>
                        <Card square>
                            <CardMedia
                                className={classes.media}
                                image={product.media.source}
                                title={products.name}
                                component={Link}
                                to={`/shop/${product.id}`}
                            />
                        </Card>
                    </Grid>
                    ))}
                </Grid>
            </Container>
        </Grid>
    );
};

export default SectionShop;
