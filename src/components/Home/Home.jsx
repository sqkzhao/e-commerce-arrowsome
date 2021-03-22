import React from 'react';
import { Card } from '@material-ui/core';
import Cover from './Cover';
import useStyles from './homestyles';

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
