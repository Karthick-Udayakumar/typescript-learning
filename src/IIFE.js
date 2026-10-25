//IIFE - Immediately invoked function expression

//(()=> annonymous function) () > calling the function.

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