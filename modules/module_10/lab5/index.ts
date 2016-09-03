'use strict';

class User {
    id: number;
    email: string;
    firstname: string;
    lastname: string;
    phone: number;
    password: string

    constructor(id: number = 1, firstname: string = '', lastname: string = '', phone: number = 1, password: string = '', email: string = ''){
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.phone = phone;
        this.password = password;
        this.email = email;
    }

    setId(id: number): void {
    	this.id = id;
    }

    getId(){
    	return this.id;
    }
}

var user = new User(10, "Alejandro", "Romero", 12222332, 'pass', 'alejo@email.com');

user.setId(25);
console.log(user.getId());