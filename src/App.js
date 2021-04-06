import React, { useState, useEffect } from 'react';
import { commerce } from './lib/commerce';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Shop, Checkout, Home, Cart, Comfirmation, Login } from './components';
import ProductDetailes from './components/Shop/ProductDetailes';

const App = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});
    const [order, setOrder] = useState({});
    const [error, setError] = useState('');

    const fetchProducts = async () => {
        const { data } = await commerce.products.list();
        console.log(data);
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

    const refreshCart = async () => {
        const newCart = await commerce.cart.refresh();
        setCart(newCart);
    };

    const handleCaptureCheckout = async (tokenId, order) => {
        try {
            const processingOrder = await commerce.checkout.capture(tokenId, order);
            setOrder(processingOrder);
            refreshCart();
            setError('');
        } catch(error) {
            setError(error.data.error.message);
        }
    }

    useEffect(() => {
        fetchProducts();
        fetchCart();
    }, []);

    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path='/'>
                        <Home 
                            cart={cart} 
                            products={products} 
                        />
                    </Route>
                    <Route exact path='/shop'>
                        <Shop 
                            cart={cart} 
                            products={products} 
                        />
                    </Route>
                    <Route path='/shop/:productId'>
                        <ProductDetailes 
                            cart={cart} 
                            products={products} 
                            handleAddToCart={handleAddToCart} 
                        />
                    </Route>
                    <Route exact path='/cart'>
                        <Cart 
                            cart={cart} 
                            handelUpdateCart={handelUpdateCart} 
                            handleRemoveFromCart={handleRemoveFromCart}
                        />
                    </Route>
                    <Route exact path='/checkout'>
                        <Checkout 
                            cart={cart} 
                            order={order}
                            handleCaptureCheckout={handleCaptureCheckout}
                            error={error}
                        />
                    </Route>
                    <Route exact path='/comfirmation'>
                        <Comfirmation order={order} error={error} />
                    </Route>
                    {/* <Route exact path='/login'>
                        <Login />
                    </Route> */}
                </Switch>
            </div>
        </Router>
    );
};

export default App;
