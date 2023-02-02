import { action, makeObservable, observable} from "mobx";

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
            addTotalProducts: action,
            addNoBoughtProducts: action,
            boughtPercentageNumber: action
        });
    }

    addBoughtProducts(){
        this.boughtProducts++;
    }

    addTotalProducts(){
        this.totalProducts++;
    }

    addNoBoughtProducts(){
        this.noBoughtProducts++;
    }

    boughtPercentageNumber(){
        this.boughtPercentage = parseFloat(this.boughtProducts / this.totalProducts * 100).toFixed(2);
    }
}

export const myCart = new Cart();