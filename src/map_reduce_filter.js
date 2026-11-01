//map - transform [change] every element of the array
//convert everything in to uppercase
//return new array
//Use map() when you want to perform the same operation 
// on every single item in a collection 
// and get a modified result for each
/*
map() is for transforming data. It iterates over every element, applies a callback function, and returns a new array of the exact same length.
filter() is for selecting a subset of data. It tests each element against a condition and returns a new array containing only the items that pass (so the length can be smaller).
reduce() is for aggregating data. It runs a callback across all elements to accumulate a single result—which could be a sum, a string, an object, or even another array."
*/

let num = [1,2,3,4,5]
let result = num.map(e=>e*2)
console.log(result); //return new array
//for each will return void

result = num.map(e => e*e)
console.log(result);

//when you use block {} then we must use return keyword
let emp = ['tom', 'jerry', 'jackie', 'sachin']
let transform = emp.map(e => {
    return e.toUpperCase()})
console.log(transform);


//Reduce -> Select a subset of elements based on the conditions
//Use filter() when you want to clean up, sort out, 
//or subset your data based on a true/false condition

let empNames = ['Karthick', 'Jack', 'Ohm', 'Rose', 'Tendulkar']
let filtered = empNames.filter(e => {
    if(e.length > 3)
    return console.log(e);
})

let example = ['apple iphone', 'apple mac', 'samsung', 'oneplus']
let results = example.filter(e => e.startsWith('apple'))
.filter(e => e.includes('iphone'))
.map(e => e.replace('iphone','iphone 18'))
console.log(results);

//Map practice

let numbers = [1, 2, 3, 4, 5];
let result_numbers = numbers.map(e => e * 2)
console.log(result_numbers);

//Filter practice
let even_numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let even_numbers_results = even_numbers.filter((e) =>
{
    if(e%2 === 0)
    {
        return e
    }
})
console.log(even_numbers_results);

//Reduce Practice
let numbers_sum = [10, 20, 30, 40];
let numbers_sum_result = numbers_sum.reduce((accumulator, current) => accumulator + current,0)
console.log(numbers_sum_result);

//Map - Intermediate

let users = [
  { id: 1, name: 'Alice', age: 25 },
  { id: 2, name: 'Bob', age: 30 },
  { id: 3, name: 'Charlie', age: 35 }
];
// Expected output: ['Alice', 'Bob', 'Charlie']

let users_result = users.map(e => e.name)
console.log(users_result);

let active_user = [
  { name: 'Alice', isActive: true },
  { name: 'Bob', isActive: false },
  { name: 'Charlie', isActive: true }
];
// Expected output: [{ name: 'Alice', isActive: true }, { name: 'Charlie', isActive: true }]

let active_user_results = active_user.filter((e) =>
{
    if(e.isActive === true)
    {
        return e.name, e.isActive
    }
})

console.log(active_user_results);

const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
// Expected output: { apple: 3, banana: 2, orange: 1 }

const fruitsCount = fruits.reduce((acc,fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1
    return acc
},{})

console.log(fruitsCount);


