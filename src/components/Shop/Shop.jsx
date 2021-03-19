import React from 'react';
import { Products, Navbar } from '../../components';
import { Container } from '@material-ui/core';

const Shop = ({ cart, products, handleAddToCart }) => {
    return (
        <Container>
            <Navbar cart={cart} />
            <Products products={products} handleAddToCart={handleAddToCart} />
        </Container>
    );
};

export default Shop;
