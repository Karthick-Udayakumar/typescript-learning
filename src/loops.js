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