//class - template of all object.
//object - physical entity

class Employee{
    //const name; let, const is not allowed inside the class
    name; //allowed
    age; //class properties or class variables
    salary; //scope - global variables
    isActive;

    //constructor helps to create the object of the class.
    //constructor initialize the global variables.
    //only one constructor is allowed

    constructor(name,age,salary,isActive)
    {
        //name,age,salary - argument values are local variables
        //formula - this.global = local
        this.name = name
        this.age = age
        this.salary = salary
        this.isActive = isActive
    }
    
    //funtion coding() - not allowed
    coding()
    {
        console.log(this.name, ' is coding!');
    }

    getAge = function()
    {
        console.log(this.age, ' is the age');
    }

    arrow = ()=>{
        console.log("Arrow function");
    }

    add = (a,b) => a + b

}

//employee - reference value for the employee object
let employee = new Employee('karthick',19,12.4,true);

console.log(employee.name,employee.age,employee.isActive,employee.salary);

employee.arrow()

let value = employee.add(100,200)
console.log(value);

console.log(employee)
//complete blueprint
employee.coding();
let employee1 = new Employee();
console.log(employee1.name,employee1.age,employee1.isActive,employee1.salary);
//undefined

let employee2 = new Employee('Rohit', 20);
console.log(employee2.age,employee2.name,employee2.isActive);

let employee3 = new Employee('Rohit',20,34,true)
employee3 = null
console.log(employee3.name); //TypeError: Cannot read properties of null
//garbage collector will destroy the null, no reference and undefined objects

employee3 = undefined
console.log(employee3.name); //TypeError: Cannot read properties of undefined 

