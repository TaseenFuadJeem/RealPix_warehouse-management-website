import React from 'react';
import Address from '../Address/Address';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Shipping from '../Shipping/Shipping';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Category></Category>
            <Shipping></Shipping>
            <Address></Address>
        </>
    );
};

export default Home;