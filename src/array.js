let i =10
i = 20 //Redeclaration  
console.log(i)

//Array - collection of data.
//data type - similar data type - Homogenous
//data type - different data type - Heterogenous

let num = [1,2,3,4,5]

let len = num.length;

console.log(len)

console.log(num[0]) //accessing the element

console.log(num[5]) //undefined

//Redeclaration
num[0] = 10

console.log(num)

let arr = [3,4,5,6,7]

arr[10] = 100

console.log(arr) //[ 3, 4, 5, 6, 7, <5 empty items>, 100 ]

arr[50] = 1000

console.log(arr) //[ 3, 4, 5, 6, 7, <5 empty items>, 100, <39 empty items>, 1000 ]

let marks = [33,44,55,66]
marks[-1] = 10

console.log(marks)//[ 33, 44, 55, 66, '-1': 10 ] '-1': 10 - property - key value pair. 
//added at the end

console.log(marks.length) //length = 4

console.log(marks[-1]) //key value pair. Its a property

let str = ['Karthick', 'iphone', 'imac', 'airpod']

let employeeData = ['Karthick', 30, 30.44, true, false, 100n]

//iterating an array

let arrIteration = [22,3,33,24,55,33,1]

for(let i = 0; i <=4; i++)
{
    console.log(arrIteration[i])
}
//Iterate using array length
for(let i = 0; i <= arrIteration.length - 1; i++)
{
    console.log(arrIteration[i])
}
console.log("Reverse an array")
for(let i = arrIteration.length - 1; i >=0; i--)
{
    console.log(arrIteration[i])
}

