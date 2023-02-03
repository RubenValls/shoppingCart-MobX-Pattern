import React from 'react';
import Footer from './footer';
import Includer from './includer';
import SocialLinks from './socialLinks';
import StatsCounter from './statsCounter';
import Stock from './stock';

const ShoppingApp = () => {
    return (
        <div className='container text-center mt-5'>
            <Includer/>
            <Stock/>
            <StatsCounter/>
            <Footer/>
            <SocialLinks/>
        </div>
    );
}



export default ShoppingApp;
