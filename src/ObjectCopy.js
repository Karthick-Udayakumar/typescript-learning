let user = {
    name: "Karthick",
    age: 16,
    location: "Chennai",

    address: {
        city: 'Chennai',
        state: 'Tamil Nadu',
        pincode: 600001
    }
}

//Shallow Copy
let myUser = {...user}
console.log(myUser)
console.log('**************')
myUser.name = 'Rohit Sharma' //upto one level - Shallow copy works fine
myUser.address.city = 'Mumbai' //second level - nested level - shallow copy impacts other objects.
console.log(user)


//Then whats the best use case? 
//Structured Clone - deep copy all levels it will cover

let customer = {
    name: "Virat",
    age: 16,
    location: "Chennai",

    address: {
        city: 'Chennai',
        state: 'Tamil Nadu',
        pincode: 600001
    }
}

let newCustomer = structuredClone(customer)

newCustomer.address.pincode = 890999
console.log(newCustomer) //Deepcopy worked.
console.log("*************")
console.log(customer)

