import React from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography, Grid, CardActions, IconButton, Badge } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import useStyles from './styles';

const Product = ({ product, handleAddToCart }) => {
    const classes = useStyles();

    return (
        <Card className={classes.root} elevation={0} square>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={product.media.source}
                    title={product.name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="h6" align="center">
                        {product.name}
                    </Typography>
                    <Typography gutterBottom variant="subtitle1" align="center">
                        {product.price.formatted_with_symbol}
                    </Typography>
                </CardContent>

                {/* <CardActions disableSpacing className={classes.cardActions}>
                    <IconButton aria-label="Add to Cart" onClick={() => handleAddToCart(product.id, 1)}>
                        <AddShoppingCart />
                    </IconButton>
                </CardActions> */}
            </CardActionArea>
        </Card>
    );
};

export default Product;
