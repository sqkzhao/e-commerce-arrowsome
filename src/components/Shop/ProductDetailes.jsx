import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { commerce } from '../../lib/commerce';
import { 
    Container, Grid, Typography, Divider, ThemeProvider,
    Button, Card, CardMedia, TextField, useMediaQuery, IconButton
} from '@material-ui/core';
import Navbar from '../Navbar/Navbar';
import SectionNav from '../Home/SectionNav';
import { colortheme } from '../../lib/colortheme';
import useStyles from './productDetailesStyles';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import styles from '../../module.css/Preview.module.css';

const ProductDetailes = ({ cart, products, handleAddToCart }) => {
    let { productId } = useParams();
    const classes = useStyles();
    const matches = useMediaQuery('(min-width:600px)');
    const [qty, setQty] = useState(1);
    const [qtyError, setQtyError] = useState('');
    const [photos, setPhotos] = useState([]);
    const [selectedPhoto, setSelectedPhoto] = useState('')

    const handleChange = (e) => {
        if(e.target.value >= 0) {
            setQty(e.target.value);
            setQtyError('');
        } else {
            setQtyError('Invalid quantity.');
        }
    };

    const HandlerSelect = (e) => {
        setSelectedPhoto(e.target.id);
    };

    useEffect(() => {

        commerce.products.retrieve(productId)
            .then((product) => {
                setPhotos(product.assets);
            });
    }, []);

    return (
        <>
            <Navbar cart={cart} /> 
            
            <Container>
                <Divider className={classes.divider} />

                <Container className={classes.productBox}>
                    <Grid className={classes.backToShop} container justify="flex-start" component={Link} to='/shop'>
                        <ArrowBackIosIcon variant="body1" />
                        <Typography variant="body1">
                            <strong>Back to Shop</strong>
                        </Typography>
                    </Grid>
                    {products.map((product) => (
                        (product.id === productId) &&
                        <Grid key={product.id} container justify="center" spacing={5}>
                            <Grid item xs={12} sm={12} md={5} lg={5} align="center">
                                <Card square className={classes.root}>
                                    <CardMedia
                                        className={matches ? classes.media : classes.mobileMedia}
                                        image={selectedPhoto ? selectedPhoto : product.media.source}
                                        title={product.name}
                                    />
                                </Card>

                                <Grid container spacing={1} className={classes.previewContainer} >
                                    {photos && photos.map((photo) => (
                                        <Grid item xs={2} sm={2} md={2} lg={2}>
                                            <Card square className={matches ? classes.preview : classes.mobilePreview}>
                                                <button 
                                                    style={{
                                                        background: `url(${photo.url}) no-repeat`, 
                                                        backgroundSize: 'cover',
                                                        backgroundPosition: 'center',
                                                        border: 'none',
                                                    }} 
                                                    className={matches ? classes.preview : classes.mobilePreview}
                                                    id={photo.url}
                                                    onClick={HandlerSelect}
                                                >
                                                </button>
                                            </Card>
                                        </Grid>
                                    ))}
                                </Grid>

                            </Grid>
                            <Grid item xs={12} sm={12} md={5} lg={5}>
                                <Typography gutterBottom variant="h4" component="h4">
                                    {product.name}
                                </Typography>
                                <Typography variant="h5" component="h5">
                                    {product.price.formatted_with_symbol}
                                </Typography>
                                <Typography 
                                    component="p" 
                                    dangerouslySetInnerHTML={{ __html: product.description }} 
                                />
                                <ThemeProvider theme={colortheme}>
                                    <Grid container>
                                        <TextField 
                                            fullWidth
                                            margin="normal"
                                            label="Quantity" 
                                            variant="outlined" 
                                            type="number"
                                            defaultValue={qty}
                                            onChange={handleChange}
                                            helperText={qtyError}
                                            error={qtyError ? true : false}
                                        />
                                    </Grid>
                                    <Button 
                                        className={classes.cartButton}
                                        color="primary"
                                        fullWidth 
                                        variant="contained"
                                        onClick={() => handleAddToCart(product.id, qty)}
                                    >   
                                        Add To Cart
                                    </Button>
                                </ThemeProvider>
                            </Grid>
                        </Grid>
                    ))}
                </Container>
            </Container>

            <SectionNav products={products} />
        </>
    );
};

export default ProductDetailes;
