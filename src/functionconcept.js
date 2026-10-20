/**
 * @param {number} x
 * @param {number} y
 */

// -> /** and enter 
function addition(x,y)
{
    return x + y
}

let add = addition(10,20)
console.log(add)

add = addition('s1','s2')
console.log(add)
/**
 * @param {string} x
 * @param {string} y
 */

//documentation of function -> temporary fix
function addstr(x,y)
{
    return x + y
}

//default value in function
function greet(name = "Karthick")
{
    console.log("Hello everyone, this is "+name)
}

greet()

greet('Rohit Sharma')

function vote(name, age = 18)
{
    console.log(name + " is eligible to vote" + " and attained " + age)
}

vote('karthick')
vote('Rohit Sharma', 39)

function car(mode = 'manual', fuel = 'petrol')
{
    return mode + " " + fuel
}

let carValue = car()
console.log(carValue)

function add(a = 10, b)
{
    return a + b
}

let value = add(undefined, 10) //undefined will trigger default parameter
console.log(value)

value = add(null, 10)
console.log(value) //null will not trigger default parameter