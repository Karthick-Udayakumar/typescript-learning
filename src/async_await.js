//async and await are modern keywords built on top of Promises.

//async is used in the function
//await is used for steps

//If a function is written with async, it returns promise 
//If a function is written with async, call it with await
//We should write await without async function. we can call function that
//returns promise without async also. but not a good practice.
//'await' expressions are only allowed within async functions and at the top levels of modules

async function print()
{
    console.log('Void Promise function');
}

print()

async function getNumber() {
    return 100
}
//let result =  getNumber(); //Promise { 100 }

let result = await getNumber();
console.log(result);


async function pop()
{
    await getNumber();
}
async function getID()
{
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>{
            resolve({
                name: "Rohit",
                age: 18,
                location: 'Mumbai indians'
            })
        },2000)

        reject('No user found')
    })
}

let mi = await getID()
console.log(mi);

async function miCoach()
{
    return 'Kieron Pollard'
}

let coach = await miCoach();
console.log(coach);


function startMachine()
{
    return new Promise((resolve) =>
    {
        setTimeout(()=>
        {
            console.log("Machine started");
            resolve();
        },4000)
    })
}

function boilWater()
{
    return new Promise((resolve) =>
    {
        setTimeout(()=>
        {
            console.log("Water is boiling");
            resolve();
        },2000)
    })
}

function addCoffeePowder()
{
    return new Promise((resolve) =>
    {
        setTimeout(()=>
        {
            console.log("Coffee powder is added");
            resolve();
        },1500)
    })
}

function pourInCoffee()
{
    return new Promise((resolve) =>
    {
        setTimeout(()=>
        {
            console.log("Pour in the coffee");
            resolve();
        },1500)
    })
}

async function makeCoffee()
{
    try {
        await startMachine();
        await boilWater();
        await pourInCoffee();
    } catch (error) {
       console.log(error); 
    }
    finally{
        console.log("Process Ends!");
    }
    
}

let t1 = await makeCoffee();
console.log(t1);

