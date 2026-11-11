//callbackhell -> Pyramid of doom
//When you have many asynchronous tasks dependent on one another
//forcing you to nest callbacks deep inside the callbacks

function startMachine(callback)
{
    console.log('Start the machine');
    callback();
}

function boilWater(callback)
{
    console.log('Boil the water');
    callback();
}

function addCoffeePowder(callback)
{
    console.log("Add coffee powder");
    callback();
}

function pourInCup(callback)
{
    console.log('Pour in cup');
    callback();
}

function serveCoffee(callback)
{
    console.log("Serve coffee");
    callback();
}

startMachine(()=>{
    boilWater(()=>{
        addCoffeePowder(()=> {
            pourInCup(()=>{
                serveCoffee(()=> {
                    console.log("Its done. Enjoy!");
                })
            })
        })
    })
    
})