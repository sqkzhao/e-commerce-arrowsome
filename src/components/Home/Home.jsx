import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Card, CardMedia, CardActions, Container, Button } from '@material-ui/core';
import useStyles from './homestyles';
import Cover from './Cover';

const Home = ({ cart }) => {
    // const classes = useStyles();

    return (
        <div>
            <Cover cart={cart}/>
            <Card>
                sdfsdf
            </Card>
        </div>
    );
};

export default Home;
