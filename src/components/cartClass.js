import { makeObservable, observable, action, computed} from "mobx";

export default class Cart{
    boughtProducts = 0;
    noBoughtProducts = 2;
    boughtPercentage = 0;

    constructor() {
        makeObservable(this, {
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