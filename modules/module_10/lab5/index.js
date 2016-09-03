'use strict';
var User = (function () {
    function User(id, firstname, lastname, phone, password, email) {
        if (id === void 0) { id = 1; }
        if (firstname === void 0) { firstname = ''; }
        if (lastname === void 0) { lastname = ''; }
        if (phone === void 0) { phone = 1; }
        if (password === void 0) { password = ''; }
        if (email === void 0) { email = ''; }
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.phone = phone;
        this.password = password;
        this.email = email;
    }
    User.prototype.setId = function (id) {
        this.id = id;
    };
    User.prototype.getId = function () {
        return this.id;
    };
    return User;
}());
var user = new User(10, "Alejandro", "Romero", 12222332, 'pass', 'alejo@email.com');
user.setId(25);
console.log(user.getId());
