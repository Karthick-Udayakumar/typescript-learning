function printName(name) //call by value
{
    console.log("Name is " +name)
}

printName("Karthick")

let user = {
    name: 'karthick',
    age: 18,
    location: 'chennai'
}

function userAPI(userObject) //calling by reference. Object reference
{
    console.log(userObject.name)
    userObject.name = 'Rohit'
}

userAPI(user)
console.log(user.name)


//Supply the whole object and destructure the object in the function parameter. 
// This is called destructuring concept.

/**
 * @param {string} name
 */

let person = {
    name: 'karthick',
    age: 18,
    location: 'chennai',
    phoneNumber: 1234567890,
}

function printPersonDetails({name,age,phoneNumber})
{
    console.log(name, age,phoneNumber)
}
printPersonDetails(person)

let {name,age} = person
console.log(name,age)


let {name: userName, age: userAge} = person
console.log(userName) //Not recommended

let {userName1, userAge1} = person
console.log(userName) //undefined