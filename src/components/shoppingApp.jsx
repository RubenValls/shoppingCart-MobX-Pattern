import React from 'react';
import Includer from './includer';
import StatsCounter from './statsCounter';
import Stock from './stock';

const ShoppingApp = () => {
    return (
        <div className='container text-center mt-5'>
            <Includer/>
            <Stock/>
            <StatsCounter/>
        </div>
    );
}



export default ShoppingApp;
