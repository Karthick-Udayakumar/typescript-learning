let getName = function getNameFromMe()
{
    console.log("My name is Karthick")
}

getName()//calling the function using ref name
console.log(typeof getName)

//Function hoisiting - Not possible for function expression
//Function hoisiting is possible for normal function.

getLabel() //ReferenceError: Cannot access 'getLabel' before initialization

let getLabel = function getting_label_UI(name,address)
{
    console.log(name,address)
}

getLabel('Karthick', 22)

console.log(getLabel.name) //function name -> getting_label_UI