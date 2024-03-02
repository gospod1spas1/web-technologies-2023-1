class Topping{
    name;
    constructor(name) {
        this.name = name;
    }
}

class PizzaAttribute{
    name;
    price;
    calories;

    constructor(name, price, calories) {
        this.name = name;
        this.calories = calories;
        this.price = price;
    }

}
class Pizza{
    pizzaType;
    size;
    toppings;

    constructor(pizzaType, size) {
        this.pizzaType = pizzaType
        this.size = size;
        this.toppings = [];
    }
    addTopping(topping) {
        this.toppings.push(topping);
    }
    removeTopping(topping) {
        for (let i=0; i<this.toppings.length; i++){
            if (this.toppings[i] === topping){
                this.toppings.splice(i, i+1);
            }
        }
    }
    getToppings() {
        let top = "Топинги:\n";
        for (let i=0; i<this.toppings.length; i++){
            top += this.toppings[i].name + "\n";
        }
        top = top.trim() + ";";
        console.log(top);
    }
    getSize() {
        console.log("Размер пиццы: " + this.size.name)
    }
    getStuffing() {
        console.log("Вид пиццы: " + this.pizzaType.name);
    }
    calculatePrice() {
        let price = 0;
        for (let i=0; i < this.toppings.length; i++){
            if(this.toppings[i].name === "Сливочная моцарелла"){
                if(this.size.name === "Большая"){
                    price += 100;
                } else if (this.size.name === "Маленькая"){
                    price += 50;
                }
            }
            else if(this.toppings[i].name === "Сырный бортик"){
                if(this.size.name === "Большая"){
                    price += 300;
                } else if (this.size.name === "Маленькая"){
                    price += 150;
                }
            }
            else if(this.toppings[i].name === "Чеддер и пармезан"){
                if(this.size.name === "Большая"){
                    price += 300;
                } else if (this.size.name === "Маленькая"){
                    price += 150;
                }
            }
        }
        price += this.pizzaType.price;
        price += this.size.price;
        console.log("Цена пиццы: " + price);
    }
    calculateCalories() {
        let ccal = 0;
        for (let i=0; i < this.toppings.length; i++){
            if(this.toppings[i].name === "Сливочная моцарелла"){
                if(this.size.name === "Большая"){
                    ccal += 40;
                } else if (this.size.name === "Маленькая"){
                    ccal += 20;
                }
            }
            else if(this.toppings[i].name === "Сырный бортик"){
                if(this.size.name === "Большая"){
                    ccal += 50;
                } else if (this.size.name === "Маленькая"){
                    ccal += 50;
                }
            }
            else if(this.toppings[i].name === "Чеддер и пармезан"){
                if(this.size.name === "Большая"){
                    ccal += 50;
                } else if (this.size.name === "Маленькая"){
                    ccal += 50;
                }
            }
        }
        ccal += this.pizzaType.calories;
        ccal += this.size.calories;
        console.log("Количество ККал в пицце: " + ccal);
    }
}
let margarita = new PizzaAttribute("Маргарита", 500, 330);
let pepperoni = new PizzaAttribute("Пепперони", 800, 400);
let bavarian = new PizzaAttribute("Баварская", 700, 450);

let big = new PizzaAttribute("Большая", 200, 200);
let small = new PizzaAttribute("Маленькая", 100, 100);

let mozzarella = new Topping("Сливочная моцарелла");
let cheese_curb = new Topping("Сырный бортик");
let cheddar_and_parmesan = new Topping("Чеддер и пармезан");

console.log("\n");
let pizza = new Pizza(pepperoni, big);
pizza.addTopping(mozzarella);
pizza.addTopping(cheese_curb);
pizza.addTopping(cheddar_and_parmesan);
pizza.removeTopping(cheese_curb);

pizza.getToppings();
pizza.getStuffing();
pizza.getSize();

pizza.calculatePrice();
pizza.calculateCalories();