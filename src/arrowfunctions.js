let print = () => {
    console.log("Print my name as Rohit")
}

print()

let printNames = function () {
    console.log("My name is Karthick")
}

printNames();

let getPersonDetails = () => {
    console.log("Enter the name")
    console.log("Enter the contact number")
}

getPersonDetails()

//Arrow functions with parameters
let getName = (name) => console.log(name)

getName('Karthick')

//arrow function - one parameter.
//One parameter - no need to use paranthesis
let element = elementName => {
    console.log('elementname', elementName)
    console.log('click on the ', elementName)
}

element('LoginButton')

//arrow function - two parameters.
//No return key is required if it is a one liner arrow function
let sum = (x,y) => x+y
let result = sum(200,100)

if(result > 200)
{
    console.log("Good")
}
else
{
    console.log("Bad")
}

//More than one line of code inside an arrow function return key is mandatory
//without curly braces, return keyword will not work.
let addition = (x,y) =>{
    let z = x+y;
    return z
}

let division = (x,y) => x/y

let resultDivision = division(100,2)
console.log(resultDivision)

let findElement = locator => `//div[@id = ${locator}]`
let loginButton = findElement('loginbtn')
console.log(loginButton)

let findElementbyID = locator => `//input[@id = ${lcoator}]`

//give a string and convert to lowercase

let lowerCase = input => input.toLowerCase()

let results = lowerCase('HOMETOWN')

console.log(results)

//arrow functions with object as parameter

let user = {
    name: 'Karthick',
    age: 30,
    location: 'chennai'
}

let userData = userObject => console.log(userObject)
userData(user)

//Destructuring
let userDataDestruturing = ({name,age}) => console.log(name,age)
let resultsData = userDataDestruturing(user)
console.log(resultsData);

userData(user)

//arrow functions with spread parameter

let spreadParameter = (...userList) => console.log(userList)

spreadParameter('Karthick', 'Rohit Sharma', 'Sachin tendulkar')