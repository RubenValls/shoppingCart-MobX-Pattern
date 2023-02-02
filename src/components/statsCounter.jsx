import React from 'react';

const StatsCounter = () => {
    return (
        <div className='container mt-5'>
            <h3 className='text-center'>Stats:</h3>
            <table className='justify-content-center align-items-center m-auto'>
                <tr>
                    <th className='p-2' scope="col">Products Added:</th>
                    <th className='p-2' scope="col">0</th>
                </tr>
                <tr>
                    <th className='p-2' scope="col">Bought Products:</th>
                    <th className='p-2' scope="col">0</th>
                </tr>
                <tr>
                    <th className='p-2' scope="col">No Bought Products:</th>
                    <th className='p-2' scope="col">0</th>
                </tr>
                <tr>
                    <th className='p-2' scope="col">Buy %:</th>
                    <th className='p-2' scope="col">0</th>
                </tr>
            </table>
        </div>
    );
}

export default StatsCounter;
