export class Customer{
    private firstname : string;
    private lastname : string;
    private age: number;
    constructor (firstname:string ,lastname:string, age:number) {
        this.firstname= firstname;
        this.lastname=lastname;
        this.age=age;
    }
    public greeter () {
        console.log(`Hello, ${this.firstname} ${this.lastname}`);
    }
    public getage(){
        console.log(`Hello, ${this.firstname} ${this.lastname} you are ${this.age} years old`);
        return this.age;
    }
}

let customer = new Customer('John','Doe',29);
customer.greeter();

