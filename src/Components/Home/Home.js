import React from 'react';
import Address from '../Address/Address';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Faq from '../Faq/Faq';
import HalfInventory from '../HalfInventory/HalfInventory';
import Shipping from '../Shipping/Shipping';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Category></Category>
            <HalfInventory></HalfInventory>
            <Shipping></Shipping>
            <Address></Address>
            <Faq></Faq>
        </>
    );
};

export default Home;