import React from 'react';
import EachProduct from './eachProduct';

const Stock = () => {
    return (
        <div className='container mt-3'>
            <table className='table'>
                <thead>
                    <tr>
                        <th scope="col-6">Product Name</th>
                        <th scope="col-3">Buy</th>
                        <th scope="col-3">Delete</th>
                    </tr>
                </thead>
                <EachProduct/>
            </table>
        </div>
    );
}

export default Stock;
