if(true)
{
    console.log("Hi")
}
else
{
    console.log("bye!") //dead code
}

if(false)
{
    console.log("Hi") //dead code
}
else
{
    console.log("bye!")
}

//best practice -> declare a variable

let isElementPresent = true
if(isElementPresent)
{
    console.log("Element is present")
}
else
{
    console.log("Element is not present")
}

let browser = "chrome"
if(browser === 'chrome')
{
    console.log("Chrome Browser launched!")
}
if(browser === 'edge')
{
    console.log("Edge Browser launched!")
}
else
{
    console.log("Pass the right browser") //poor coding strategy
}
    
//Switch case
let browserName = 'chrome'
switch(browserName)
{
    case 'chrome':
        console.log("Chrome browser!")
        break
    case 'edge':
        console.log("Edge browser!")
        break;
    default :
        console.log("Invalid browser!")
        break;
}

