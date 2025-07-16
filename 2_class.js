/* 
Object-Oriented Programming (OOP) in JavaScript.
*/
class Mobile { // class
    constructor(name, price, realesed) {
        this.name = name;
        this.price = price;
        this.realesed = realesed;
    }
    messege() { // method
        console.log(`The price of ${this.name} phone is ${this.price}`);
    }
}
const mobile1 = new Mobile('iphone 13', 120000, 2022); // this is an object of Mobile class
const mobile2 = new Mobile('samsung s24 ultra', 155000, 2024);
mobile1.messege();

console.log(mobile1.name);
console.log(mobile2.price);

//
class Veichle {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    move(a, b) {
        console.log(`I am moving from ${a} to ${b}`);
    }
}
class Bus extends Veichle { // Inherite Veichle in Bus(Inheritance)
    constructor(name, price, ticket, route) {
        super(name, price);
        this.ticket = ticket;
        this.route = route;
    }

}
class Truck extends Veichle {
    constructor(name, price, load) {
        super(name, price);
        this.load = load;
    }
}
const bus1 = new Bus('Bus101',3000000, 'ac21', 'Dhaka to Chittagong');
const truck1 = new Truck('Truck51', 1500000, '1000Ton');
console.log(bus1.name);