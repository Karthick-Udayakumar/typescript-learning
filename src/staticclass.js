export class Employee
{
    static companyName = 'Karthick'
    //common memory allocation
    //static memory
    //static never be part of object
    //static can be accessed via class name
    //final keyword is not present in js
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

    static mumbaiIndians()
    {
        console.log("Mumbai Indians");
    }
}

let employee = new Employee('Rohit')
console.log(Employee.companyName);
Employee.companyName = "Amazon"
console.log(employee.name);
Employee.mumbaiIndians()
console.log(Employee.companyName);


