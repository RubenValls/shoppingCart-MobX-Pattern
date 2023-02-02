import React from 'react';
import { myCart } from '../classes/cartClass';
import { observer } from 'mobx-react';

const StatsCounter = observer(() => {
    return (
        <div className='container mt-5'>
            <h3 className='text-center'>Stats:</h3>
            <table className='justify-content-center align-items-center m-auto'>
                <tbody>
                    <tr>
                        <th className='p-2' scope="col">Products Added:</th>
                        <th className='p-2' scope="col">{myCart.totalProducts}</th>
                    </tr>
                    <tr>
                        <th className='p-2' scope="col">Bought Products:</th>
                        <th className='p-2' scope="col">{myCart.boughtProducts}</th>
                    </tr>
                    <tr>
                        <th className='p-2' scope="col">No Bought Products:</th>
                        <th className='p-2' scope="col">{myCart.noBoughtProducts}</th>
                    </tr>
                    <tr>
                        <th className='p-2' scope="col">Buy Percentage:</th>
                        <th className='p-2' scope="col">{myCart.boughtPercentage} %</th>
                    </tr>
                </tbody>
            </table>
        </div>
    );
})

export default StatsCounter;
