//Loose Equality -> == //will check only the value
//Strict Equality -> === //Checks the value and type

console.log(10 == 10)
console.log(10 == "10")

console.log(10 === 10) //true
console.log(10 === "10") //false

//true = 1
//false = 0

console.log(true == 1) //true
console.log(true === 1) // false - Comparing boolean with number. type is different
console.log(false == 0) //true 
console.log(0 === false) //false -> Strict equality

console.log("" == 0) //Anything empty is considered as "0" //true
console.log("" === 0) //false
console.log([] == 0) //true

let n1 = 10
let n2 = "10"
console.log(n1 == n2)
console.log(n1 === n2)

console.log(null == undefined) //true
console.log(null === undefined) //false object != undefined

console.log([] == "")
console.log([] == [])
