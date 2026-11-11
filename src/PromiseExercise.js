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

startMachine()
.then(()=> boilWater()
.then(()=> addCoffeePowder()
.then(()=> pourInCoffee()
.then(()=> console.log('coffee is ready!')))))