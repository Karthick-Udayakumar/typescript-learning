let arrayiterate = ['Karthick', 'Rohit', 'Mumbai Indians', 'SKY']

//Index based loop
for(let i = 0; i <= arrayiterate.length - 1; i++)
{
    if(arrayiterate[i] === 'Rohit')
    {
        console.log("Mumbai cha Raja")
        break;
    }
}

//for of loop -> forward direction

for(let j of arrayiterate)
{
    console.log(j)
}

for(let k of arrayiterate)
{
    if(k === "Karthick")
    {
        console.log("Its me")
        break;
    }
}

//for in loop

for(let e in arrayiterate)
{
    console.log(e, " = ", arrayiterate[e])
}