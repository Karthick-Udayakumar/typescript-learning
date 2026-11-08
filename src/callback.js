//Call back - A callback is a function passed into another function
// as an argument, which is then invoked inside the outer function
// to complete an action or handle asynchronous results.

function callbackLearning(callback)
{
    console.log("Call Back Learning");
    callback();
}

function coding()
{
    console.log("Coding function");
}

callbackLearning(coding);

let functionExpression = function ()
{
    console.log("Function Expression Calling!");
}

callbackLearning(functionExpression)

callbackLearning(()=> {
    console.log("Arrow Function call");
})

callbackLearning(function()
{
    console.log("Anonymous function call!");
})

//call back function with arguments

let add = (a,b) => a + b
let sub = (a,b) => a - b
let mul = (a,b) => a * b
let div = (a,b) => a / b

function callbackwitharguments(a,b,callback)
{
    return callback(a,b);
}

let value = callbackwitharguments(10,20,add)
console.log(value);

//Multiple callback

function find(callback1, callback2)
{
    callback1()
    callback2()
}

function code()
{
    console.log("Hello Coding");
}

function writing()
{
    console.log("Hello writing");
}

find(code,writing)

//callback - callback and objects

function getUserDetails(callback, userObject)
{
    callback(userObject);
}

getUserDetails((user) => console.log(user.name), {
    name: "Karthick",
    age: 18
})

getUserDetails((user) => console.log(user), {
    name: "Karthick",
    age: 18
})