import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@material-ui/core';
import useStyles from './styles';

const Product = ({ product }) => {
    const classes = useStyles();

    return (
        <Card className={classes.root} elevation={0} square>
            <Link to={`/shop/${product.id}`} className={classes.link}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={product.media.source}
                        title={product.name}
                    />
                    <CardContent>
                        <Typography variant="h6" component="h6" align="center">
                            {product.name}
                        </Typography>
                        <Typography gutterBottom variant="subtitle1" align="center">
                            {product.price.formatted_with_symbol}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Link>
        </Card>
    );
};

export default Product;
