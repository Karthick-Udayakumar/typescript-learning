//A Promise is an object representing the eventual completion or failure 
// of an asynchronous operation. 
// It has three states: Pending, Fulfilled, or Rejected. 
// Promises replace deep callback nesting by allowing us to chain 
// asynchronous steps cleanly using .then() for success 
// and .catch() for error handling.

let pizzaPromise = new Promise((resolve, reject) =>
{
    let isDelivered = true;

    if(isDelivered)
    {
        resolve('Pizza delivered')
    }
    else
    {
        reject('Pizza not delivered')
    }
})

pizzaPromise
        .then((result)=>console.log(result))
        .catch((error) => console.log(error))
        .finally(()=>console.log('Process over'))

function getUserData(getUserId)
{
    console.log("Fetching the user id");
    return new Promise((resolve, reject) =>
        setTimeout(()=> 
        {
            if(getUserId <= 0)
            {
                reject('Enter a valid id')
            }
            else
            {
                let user = {
                    name: 'Karthick',
                    age: 18,
                    location: 'chennai'
                }
                resolve(user);
            }
        },4000))
    }

getUserData(101).then((user)=> console.log(user.name)).catch((error) => console.log(error))

function getNumber()
{
    return Promise.resolve(100)
}

getNumber().then(result => console.log(result))

let number = getNumber()
console.log(number); //Promise { 100 }