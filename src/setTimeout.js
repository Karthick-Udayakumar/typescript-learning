setTimeout(()=>{
    console.log("Hello Karthick");
}, 4000)

function getData(callback)
{
    setTimeout(()=>
    {
        callback();
    },4000)
}

getData(()=>{
    console.log("Hi Karthick");
})