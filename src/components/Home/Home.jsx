import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Card, CardMedia, CardActions, Button } from '@material-ui/core';
import useStyles from './styles';

const Home = () => {
    const classes = useStyles();

    return (
        <div>
            <Navbar />

            <Card className={classes.root} elevation={0} square>
                {/* <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="100%"
                    image="https://magnolia.a58jq0h9-liquidwebsites.com/wp-content/uploads/2019/04/image10-2-e1555292318643.jpg"
                    title="Arrowsome Cover"
                /> */}
            </Card>
            sdfshdlkfjsd
        </div>
    );
};

export default Home;