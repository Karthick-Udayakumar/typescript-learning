//Hoisting - Access the variable before declaration

console.log(m)
let m = 10

//Reference error for let. Hoisting -> Not allowed.

console.log(v)
var v = 20
//undefined for var. Hoisting is allowed. No error.

console.log(pi)
const pi = 3.14
//Hoisting is not allowed. Reference error.

//concat
let x = 10
let y = 15

let a = 'Playwright'
let b = 'selenium'
console.log( x + y)

console.log( a + b)
console.log( x + a)
console.log( a + y)
console.log( x + y + a + b)
console.log( a + b + x + y )
console.log(1 + "1")
console.log("1"+1)

console.log(1 - "1")
console.log("5" - 2)
console.log("10" - "4") //10 - 4 = 6
console.log("Hello" - 2) //NaN
console.log(10 - "K")

console.log(1 * "2")
console.log(20 / "5")

//Only + operator has a different ability. It concatenates. Other operators converts String to int automatically

//Exponential
console.log(2 ** 3)

//Unary plus operator
console.log(+"42" + 3) //Converts to a number


//Unary Negation
console.log(-"42" + 100)
