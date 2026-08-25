console.log(Number.MAX_SAFE_INTEGER)

//big int
let number = 100n
console.log(typeof number)

let n1 = BigInt(2000)
console.log(n1)

//Rule
console.log(n1+ 100n) //allowed
console.log(n1 + 100) //Not allowed

console.log(10n * 2) //Not allowed - TypeError: Cannot mix BigInt and other types, use explicit conversions
console.log(10n * 2n)

console.log(+"100n" + 100n) //+100n = 100. Unary plus. Not allowed. 100 + 10n = error

//phone number
let phonenumber = "9899412356"
console.log(phonenumber.length)

