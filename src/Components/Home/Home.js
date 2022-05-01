import React from 'react';
import './Home.css';
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
            <div className="mobile-dev">
                <Category></Category>
                <HalfInventory></HalfInventory>
                <Shipping></Shipping>
                <Address></Address>
                <Faq></Faq>
            </div>
        </>
    );
};

export default Home;