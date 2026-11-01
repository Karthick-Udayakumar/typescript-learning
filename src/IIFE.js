//IIFE - Immediately invoked function expression

//(()=> annonymous function) () > calling the function.


//An IIFE (Immediately Invoked Function Expression) is a JavaScript function that defines itself and executes immediately upon being created
(()=> {
    console.log("Calling IIFE function")
})();

//Normal function as IIFE
(function()
{
    console.log("Explanation")
})();

(function(name)
{
    console.log("Name is " + name)
})('Karthick')


(() => console.log('IIFE Login'))();