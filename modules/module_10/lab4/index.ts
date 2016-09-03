'use strict';

class Vehicle {
    wheel: number;
    fuel: string;
    private color: string;

    constructor(wheel: number, fuel: string, color: string = 'white'){
        this.wheel = wheel;
        this.fuel = fuel;
        this.color = color;
    }
}

class Car extends Vehicle {
    constructor(){
        super(4, 'gas', 'red');
    }
}

class Motorcycle extends Vehicle {
    constructor(){
        super(2, 'gasoline');
    }
}

var car = new Car();
var motorcycle = new Motorcycle();

console.log(car);
console.log(motorcycle);