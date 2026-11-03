class User
{
    //no need to create global variable if you create under constructor
    constructor(name,age,salary,isActive)
    {
        this.name = name
        this.age = age
        this.salary = salary
        this.isActive = isActive
    }
    
    coding()
    {
        console.log(this.name, 'is coding');
    }
}

let user = new User('Karthick', 20,23,true)
console.log(user.name, user.age);
user.coding()

class Person
{
    //default constructor
    constructor()
    {
        console.log("default constructor");
    }
    //SyntaxError: A class may only have one constructor
    constructor(name)
    {
        console.log("overloaded constructor");
    }
}

let person = new Person()
