import { action, computed, makeObservable, observable} from "mobx";

class Cart{
    
    totalProducts = 0;
    boughtProducts = 0;
    noBoughtProducts = 0;
    boughtPercentage = 0;

    constructor() {
        makeObservable(this, {
            totalProducts: observable,
            boughtProducts: observable,
            noBoughtProducts: observable,
            boughtPercentage: observable,
            addBoughtProducts: action,
            boughtProductsNumber: computed
        });
    }

    addBoughtProducts(){
        this.boughtProducts++;
    }

    get boughtProductsNumber(){
        return this.boughtProducts;
    }
}

export const myCart = new Cart();