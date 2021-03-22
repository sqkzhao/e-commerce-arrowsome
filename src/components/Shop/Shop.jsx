import React from 'react';
import { Products, Navbar } from '../../components';

const Shop = ({ cart, products, handleAddToCart }) => {
    return (
        <div>
            <Navbar cart={cart} />
            <Products products={products} handleAddToCart={handleAddToCart} />
        </div>
    );
};

export default Shop;
