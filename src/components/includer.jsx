import React from 'react';
import { myCart } from '../classes/cartClass';
import { myStock } from '../classes/Stock';

const Includer = () => {
    return (
        <div className='container mt-5' id='includerComponent'>
            <label htmlFor="product" className="form-label">Add a product to Stock</label>
            <input type="text" className="form-control" id="product"></input>
            <button type="button" className="btn btn-outline-dark mt-3" onClick={() => add()}>Add to Stock</button>
        </div>
    );
}

export default Includer;

function add(){
    const product = document.querySelector('#product').value;
    if(product){
        myStock.addProduct(product);
        myCart.addTotalProducts();
        myCart.boughtPercentageNumber();
        if(document.querySelector('#labelWarning')){
            document.querySelector('#labelWarning').remove();
        }
    }else{
        if(!document.querySelector('#labelWarning')){
            const container = document.querySelector('#includerComponent');
            const label = document.createElement('p')
            label.id = 'labelWarning'
            label.className = 'fst-italic text-danger';
            label.innerText = 'Please, include something to add';
            container.appendChild(label);
        }
    }
}
