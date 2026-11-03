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
employee.setAge(22)
let age = employee.getAge()
console.log(age);

//Page object model
class LoginPage
{
    #username
    #password

    constructor(username, password)
    {
        this.#username = username
        this.#password = password
    }

    setUserName(name)
    {
        this.#username = name
    }
    getUserName()
    {
        return this.#username
    }

    setPassword(name)
    {
        this.#password = password
    }
    getPassword()
    {
        return this.#password
    }
}

class User
{
    name;
    #age;

    constructor(name,age)
    {
        this.name = name;
        if(age >= 18)
        {
            this.#age = age
        }
    }

    setAge()
    {
        if(age >=18)
        {
            this.#age = age
        }
    }

    getAge()
    {
        return this.#age;
    }
}

let user = new User('Karthick',10)
console.log(user.name, user.age);

class Browser{
    launchBrowser()
    {
        console.log("Launching browser");
        this.#ramSize();
    }

    #ramSize()
    {
        console.log("Ram Size");
    }
}

let browser = new Browser();
browser.launchBrowser();