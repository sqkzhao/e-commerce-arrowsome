import React from 'react';
import { Products, Navbar } from '../../components';
import SectionNav from '../Home/SectionNav';

const Shop = ({ cart, products, handleAddToCart }) => {
    return (
        <div>
            <Navbar cart={cart} />
            <Products products={products} handleAddToCart={handleAddToCart} />
            <SectionNav products={products} />
        </div>
    );
};

export default Shop;
