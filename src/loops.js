//Use loops whenever we need to do a repetitive action

//while loop

let i = 1
while(i <= 10)
{
    console.log(i)
    i++
}

//Never write while with false condition

while(true)
{
    console.log('Hi Karthick')
}

let j = 10
while(j > 0)
{
    console.log(j)
    j--
}

let l = 1

while( l <= 10)
{
    console.log(l)
    if(l === 5)
    {
        console.log('Bye')
        break
    }
    l++
}

//break will break the loop not the condition. Here it will break the entire while loop not the if condition
//break can be used in switch case or loops.
//break cannot be used in if else loop. Can be used in if else loop only if it presents inside a loop!

//for loop vs while loop

//Use while loop when number of iteration is not fixed. Example: wait for page loading
//Web table. Pagination cases
// Wait for element present in the page
//infite scrolling. Instagram, news feed!

//For loop use cases:
//When number of iteration are fixed.
//Example: Month dropdowns, Day dropdowns. 


//Infite loop
for(; ;)
{
    console.log("Welcome to Hotel Taj!")
    break; //break the loop!
}

//do while loop

do
{
    let p = 1; //error - p declared inside the loop and cannot be accessed outside the loop.
    console.log(p)
}
while(p >=10)

let q = 1;
do
{
    console.log(q)
    q++;
}
while(q <=10)

//while condition is false then do part will not execute.
//use case - do while - When number of iterations are not fixed.
//waiting for the element but element is already available in the page.


