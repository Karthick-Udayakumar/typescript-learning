//Functions - Piece of code which does some logic. which can reused!

//Function within the class - Method
//Function without class - Function

// testClickOnLink(); //Function Hoisting

//Simple function
//Zero input parameters. No return function
function testClickOnLink()
{
    console.log("Hello Test")
}

testClickOnLink(); //Call the function

//2. Zero input parameter, return

function getNumber(){
    console.log("Return function")
    return 100
}

console.log(getNumber())

let result = getNumber() //best practice is to store it in a variable.
console.log(result)
console.log(result + 100) //reusablity

function launchBrowser()
{
    console.log("Browser is launched")
    return true;
}

let isStatus = launchBrowser();

if(isStatus)
{
    console.log("launched")
}
else{
    console.log("not launched")
}

//return type - string
function getName()
{
    return 'Karthick'
}

let name = getName();
console.log(name)
console.log(getName()) //Function calling
console.log(getName) //Not calling the function. printing the function name
console.log(typeof getName) //Function

//3. Few parameters and return type

function sumOfNumbers(x,y) //Parameter data type = any //return type of the function -> any
{
    let z = x + y
    return z
}

let sum = sumOfNumbers(10,20) //will be decided at run time.
console.log(sum)

let concatenate = sumOfNumbers(10,"Rohit")
console.log(concatenate)

function calculateBilling(foodBill, drinksBill, tax)
{
    return foodBill + drinksBill + tax
}

let amount = calculateBilling(200,500,55);
console.log(amount)

amount = calculateBilling(300,444)
console.log(amount) //NaN - Because parameter is empty and it will be undefined.

function launchingBrowser(browserName)
{
    console.log("launching the browser name....")
    browserName = browserName.toLowerCase();
    switch(browserName){
        case 'chrome':
            console.log('chrome browser is launched')
            return true;

        case 'edge':
            console.log('edge browser is launched')
            return true;

        case 'safari':
            console.log('safari browser is launched')
            return true;

        case 'firefox':
            console.log('firefox browser is launched')
            return true;
            
        default:
            console.log("Invalid browser")
            return false;
    }
}

let browserName = launchingBrowser("Chrome")
console.log(browserName)

browserName = launchingBrowser("ie")
console.log(browserName)

function printing()
{
    console.log("Print function")
}

//No duplicate fuction names are allowed. in latest javascript
function printing()
{
    console.log("Print function - No 2") //SyntaxError: Identifier 'printing' has already been declared
}