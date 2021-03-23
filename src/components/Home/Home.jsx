import React from 'react';
import Cover from './Cover';
import SectionShop from './SectionShop';
import SectionNav from './SectionNav';

const Home = ({ cart, products }) => {
    // const classes = useStyles();

    return (
        <>
            <Cover cart={cart}/>
            <SectionShop products={products} />
            <SectionNav products={products} />
        </>
    );
};

export default Home;
