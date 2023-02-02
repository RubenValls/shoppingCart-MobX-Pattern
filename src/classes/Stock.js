import { action, makeObservable, observable} from "mobx";

class Stock{
    
    products = [];

    constructor() {
        makeObservable(this, {
            products: observable,
            addProduct: action,
            removeProduct: action
        });
    }

    addProduct(product){
        this.products.push(product);
        console.log(this.products);
    }

    removeProduct(product){
        let index = this.products.indexOf(product);
        if (index !== -1){
            this.products.splice(index, 1);
        }
    }
}

export const myStock = new Stock();