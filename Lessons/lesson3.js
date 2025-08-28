
//Objects 
 var customer = {
     firstName: "Omar",
     lastName: "Godinez",
     cars: ["BMW", "Audi", "Mercedes"]
    }
    //Do notation
     customer.firstName = "Raul"
    //Bracket notation
     customer['lastName'] = "Gonzalez"
     console.log(`${customer.firstName} ${customer.lastName}`);

//Arrays
var cars = ["BMW", "Audi", "Mercedes"];
cars[0] = "Toyota";    
console.log(cars[0]);

console.log(customer.cars[1]);

