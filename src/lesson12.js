const SizeOfPizza = { Big: 'Big', Small: 'Small' };
const Toppings = { CreamyMozzarella: 'Creamy mozzarella', CheeseCurb: 'Cheese curb', CheddarAndParmesan: 'Cheddar and parmesan' }

class Pizza {
    constructor(size) {
        this.size = size;
        this.toppings = [];
        this.calculateBasePrice();
        this.calculateBaseCalories();
    }

    addTopping(topping) {
        switch (topping) {
            case Toppings.CreamyMozzarella:
                this.price += (this.size === SizeOfPizza.Big) ? 100 : 50;
                this.calories += 20;
                break;
            case Toppings.CheeseCurb:
                this.price += (this.size === SizeOfPizza.Big) ? 300 : 150;
                this.calories += 50;
                break;
            case Toppings.CheddarAndParmesan:
                this.price += (this.size === SizeOfPizza.Big) ? 300 : 150;
                this.calories += 50;
                break;
            default:
                console.log("Invalid topping");
        }
        this.toppings.push(topping);
    }

    removeTopping(topping) {
        const index = this.toppings.indexOf(topping);
        if (index !== -1) {
            switch (topping) {
                case Toppings.CreamyMozzarella:
                    this.price -= (this.size === SizeOfPizza.Big) ? 100 : 50;
                    this.calories -= 20;
                    break;
                case Toppings.CheeseCurb:
                    this.price -= (this.size === SizeOfPizza.Big) ? 300 : 150;
                    this.calories -= 50;
                    break;
                case Toppings.CheddarAndParmesan:
                    this.price -= (this.size === SizeOfPizza.Big) ? 300 : 150;
                    this.calories -= 50;
                    break;
            }
            this.toppings.splice(index, 1);
        }
    }

    calculateBasePrice() {
        this.price = (this.size === SizeOfPizza.Big) ? 200 : 100;
    }

    calculateBaseCalories() {
        this.calories = (this.size === SizeOfPizza.Big) ? 200 : 100;
    }

    getSize = () => this.size
    getKind = () => this.constructor.name;
    getPrice = () => this.price;
    getCalories = () => this.calories;

    getToppings() {
        console.log("Toppings:");
        this.toppings.forEach(topping => {
            console.log("- " + topping);
        });
    }
}


class Margarita extends Pizza {

    constructor(size) {
        super(size);
        this.price += 500
        this.calories += 300
    }
}

class Pepperoni extends Pizza {

    constructor(size) {
        super(size);
        this.price += 800
        this.calories += 400
    }
}

class Bavarian extends Pizza {

    constructor(size) {
        super(size);
        this.price += 700
        this.calories += 450

    }
}

const myPizza = new Pepperoni(SizeOfPizza.Big);

console.log('Kind of pizza: ', myPizza.getKind());
console.log('Size: ', myPizza.getSize());
console.log('Calories: ', myPizza.getCalories());
console.log('Price: ', myPizza.getPrice());

myPizza.addTopping(Toppings.CreamyMozzarella);
console.log('Calories: ', myPizza.getCalories());
console.log('Price: ', myPizza.getPrice());

myPizza.addTopping(Toppings.CheeseCurb);
myPizza.addTopping(Toppings.CheddarAndParmesan);
console.log('Calories: ', myPizza.getCalories());
console.log('Price: ', myPizza.getPrice());

myPizza.getToppings();

myPizza.removeTopping(Toppings.CheddarAndParmesan);
console.log('Calories: ', myPizza.getCalories());
console.log('Price: ', myPizza.getPrice());
myPizza.getToppings();