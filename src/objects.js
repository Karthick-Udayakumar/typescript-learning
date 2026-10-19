//Objects - Collection of data. Data will be stored in the key and value pair.

let user = {
    name: 'Karthick',
    age: 16,
    Location: 'Chennai',
    phoneNo: '9893312345'
}

console.log(user)

//dot operator. Accessing object property
console.log(user.name);
console.log(user.Location)

//bracket operator
console.log(user['phoneNo'])
console.log(user['age'])

user.age = 35
console.log(user)

user = null
console.log(user)
console.log(user.name) //TypeError: Cannot read properties of null

//similarly for undefined similar to null.


let car = {
    carName : "Hyundai",
    Gear: "Manual",
    Fuel: "Petrol",
    Engine: 4,
    brake: "ABS"
}

delete car.brake;
console.log(car)

let customer = {
    name: 'Karthick',
    age: 16,
    
    // Nested Object for addresses/location details
    address: {
        city: 'Chennai',
        state: 'Tamil Nadu',
        pincode: 600001
    },

    // Nested Object for contact info
    contact: {
        phoneNo: '9893312345',
        email: 'karthick@example.com'
    }
};

console.log(customer.contact.phoneNo)
console.log(customer['contact']['email'])

//Object to Json -> serialization
let customerJson = JSON.stringify(customer);
console.log(customerJson)

//Json to Object -> deserialization
let customerObject = JSON.parse(customerJson)
console.log(customerObject)

console.log("*******************")
let customerData = {...customer} //Shallow copy
let customerDataJson = JSON.stringify(customerData,null,4)
console.log(customerDataJson)