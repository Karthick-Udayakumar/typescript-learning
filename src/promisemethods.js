function getUserDetails()
{
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve('Get the user details')
        },3000)
    })
}

function getPaymentDetails()
{
    return new Promise((resolve) => {
        setTimeout(()=> {
            resolve('Get Payment Details')
        },3000)
    })
}

function getOrderDetails()
{
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve('Get Order Details')
        },4000)
    })
}

//Promise.all

//Promise.all is an "all or nothing" deal:
//If all promises succeed, you get an array of all their results.
//If even one promise fails (rejects), the whole thing immediately crashes
// and triggers .catch(), even if the other two succeeded.


//Promise.all() takes an array of promises and runs them concurrently. 
// It returns a single promise that resolves when all input promises 
// have successfully resolved, returning an array of their results. 
// If any promise rejects, Promise.all() immediately fails.

Promise.all([getUserDetails(),getPaymentDetails(),getOrderDetails()])
.then((results) => console.log('All resolved', results))
.catch((error) => console.log(error))

//Promise.race() - takes an iterable of promises 
// and returns a single new promise that settles 
// as soon as the very first input promise settles—
// whether it fulfills or rejects.

const fastPromise = new Promise((resolve) => setTimeout(resolve, 100, "fast"));
const slowPromise = new Promise((resolve) => setTimeout(resolve, 500, "slow"));

Promise.race([fastPromise, slowPromise])
  .then((value) => {
    console.log(value); // Output: "fast"
  });

  // Shorthand version
setTimeout(resolve, 100, "fast");

// Longer equivalent version
setTimeout(() => {
  resolve("fast");
}, 100);



//promise.allsettled -> Waits for all to finish (success or fail).
//Never fails early: Gives you a report of every success and failure.


const successTask = Promise.resolve("Success!");
const failedTask = Promise.reject("Oops, an error!");

Promise.allSettled([successTask, failedTask])
  .then((results) => {
    console.log(results);
    /* Outputs an array of objects:
      [
        { status: "fulfilled", value: "Success!" },
        { status: "rejected", reason: "Oops, an error!" }
      ]
    */
  });


  //Promise.any() is like an optimistic race. 
  // It looks at a group of promises and waits for the first one to succeed 
  // (fulfill). It completely ignores any failures along the way, 
  // as long as at least one succeeds.

const failedCall = Promise.reject("Server 1 down");
const successCall = new Promise((resolve) => setTimeout(() => resolve("Data from Server 2!"), 2000));

Promise.any([failedCall, successCall])
  .then((result) => {
    console.log(result); // Outputs: "Data from Server 2!" (ignores the failed one)
  });
