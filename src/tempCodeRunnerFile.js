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
console.log(newCustomer)
console.log("*************")
console.log(customer)