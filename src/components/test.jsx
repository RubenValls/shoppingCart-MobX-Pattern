import { observer } from 'mobx-react';
import React from 'react';
import { myCart } from './cartClass';

setInterval(function () {myCart.addBoughtProducts()}, 1000);

const Test = observer(() => {
    return (
        <div className='container'>
            <h3>TEST: {myCart.boughtProducts}</h3>
        </div>
    );
})

export default Test;
