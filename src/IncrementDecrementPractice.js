let i = 11
let j = i++ + ++i //i = 11 + 12+1 = 24
console.log(i) //13
console.log(j) //24

let a = 11, b = 22, c;
c = a + b + a++ + b++ + ++a + ++b
console.log(a)  //11 -> 12 -> 13
console.log(b) // 22 -> 23 -> 24
console.log(c) // 11 + 22 + 11 + 22 + 13 + 24 = 103

let ii = 0
let jj = ii++ - --ii + ++ii - ii-- // 0 - 0 + 1 - 1 = 0
console.log(ii) //0
console.log(jj) //0