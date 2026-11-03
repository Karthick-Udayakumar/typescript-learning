//Encapsulation - Encapsualte the private members and expose via public methods.

class Employee
{
    name;
    salary;
    #age; //# is used to declare a private variable

    constructor(name,salary,age)
    {
        this.name = name;
        this.#age = age
        this.salary = salary
    }

    //getter and setter
    setAge(age)
    {
        this.#age = age
    }

    getAge()
    {
        return this.#age
    }
}

let employee = new Employee('karthick',20,24)
console.log(employee.name,employee.age);
let age = employee.getAge()
console.log(age);