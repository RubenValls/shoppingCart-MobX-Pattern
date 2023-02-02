import { makeAutoObservable} from "mobx";

class Cart{
    boughtProducts = 0;
    noBoughtProducts = 2;
    boughtPercentage = 0;

    constructor() {
        makeAutoObservable(this);
    }

    addBoughtProducts(){
        this.boughtProducts++;
    }

    get boughtProductsNumber(){
        return this.boughtProducts;
    }
}

export const myCart = new Cart();