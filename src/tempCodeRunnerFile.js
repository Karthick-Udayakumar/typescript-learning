function add(a = 10, b)
{
    return a + b
}

let value = add(undefined, 10) //undefined will trigger default parameter
console.log(value)

value = add(null, 10)
console.log(value)