import React, { useState, useEffect } from 'react';
import { commerce } from './lib/commerce';
import { Shop, Checkout, Home, Cart } from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});

    const fetchProducts = async () => {
        const { data } = await commerce.products.list();
        setProducts(data);
    };

    const fetchCart = async () => {
        setCart(await commerce.cart.retrieve());
    };

    const handleAddToCart = async (productId, quantity) => {
        const response = await commerce.cart.add(productId, quantity);
        setCart(response.cart);
     };

    const handelUpdateCart = async (productId, quantity) => {
        const { cart } = await commerce.cart.update(productId, { quantity });
        setCart(cart);
    };

    const handleRemoveFromCart = async (productId) => {
        const response = await commerce.cart.remove(productId);
        setCart(response.cart);
    };

    useEffect(() => {
        fetchProducts();
        fetchCart();
    }, []);

    console.log(cart);

    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path='/'>
                        <Home cart={cart} />
                    </Route>
                    <Route exact path='/shop'>
                        <Shop cart={cart} products={products} handleAddToCart={handleAddToCart} />
                    </Route>
                    <Route exact path='/cart'>
                        <Cart cart={cart} handelUpdateCart={handelUpdateCart} handleRemoveFromCart={handleRemoveFromCart}/>
                    </Route>
                    <Route exact path='/checkout'>
                        <Checkout cart={cart} />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default App;
