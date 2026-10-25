//falsy values

//There are 8 falsy values are available.

if(true)
{
    console.log('true');
}
else{
    console.log('false');
}

//true -> 1
//false -> 1
if(0)
{
    console.log('value is true');
}
else{
    console.log('value is false');
}

if(10)
{
    console.log('Greater than 1 is a true');
}
else
{
    console.log('Other than O is a false');
}

if("")
{
    console.log('True');
}
else{
    console.log('Any blank value is a falsy value');
}

if(``)
{
    console.log('True');
}
else{
    console.log('Any blank value is a falsy value');
}

if(" ")
{
    console.log('True'); //additional space - true
}
else{
    console.log('Any blank value is a falsy value');
} 

if(null)
{
    console.log("Null will not come here");
}
else{
    console.log("Null will come as falsy value");
}

if(undefined)
{
    console.log("undefined will not come here");
}
else{
    console.log("undefined will come as falsy value");
}

if(NaN)
{
    console.log("NaN will not come here");
}
else{
    console.log("NaN will come as falsy value");
}

