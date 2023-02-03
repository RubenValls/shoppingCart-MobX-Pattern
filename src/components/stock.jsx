import React from 'react';
import EachProduct from './eachProduct';

const Stock = () => {
    return (
        <div className='container mt-3'>
            <h3 className='text-center fst-italic mt-4'>Stock:</h3>
            <table className='table'>
                <thead>
                    <tr>
                        <th scope="col">Product Name</th>
                        <th scope="col">Buy</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <EachProduct/>
            </table>
        </div>
    );
}

export default Stock;
