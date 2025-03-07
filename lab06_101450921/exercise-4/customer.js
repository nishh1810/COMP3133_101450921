"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
var Customer = /** @class */ (function () {
    function Customer(firstname, lastname, age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }
    Customer.prototype.greeter = function () {
        console.log("Hello, ".concat(this.firstname, " ").concat(this.lastname));
    };
    Customer.prototype.getage = function () {
        console.log("Hello, ".concat(this.firstname, " ").concat(this.lastname, " you are ").concat(this.age, " years old"));
        return this.age;
    };
    return Customer;
}());
exports.Customer = Customer;
var customer = new Customer('John', 'Doe', 29);
customer.greeter();
