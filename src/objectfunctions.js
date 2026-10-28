let employee = {
    name: 'Karthick',
    age: 33,
    location: 'chennai',
    coding(){
        console.log(this.name, " is coding")
    },
    printName()
    {
        console.log(employee.age)
    },
    printData(x,y)
    {
        console.log(x+y);
        this.printName(); //calling function inside function.
        //this refers to current class object
        employee.coding(); //this is also possible
    },
    data : function(){
        console.log('calling function');
    },
    annonymousFunction : ()=> console.log("calling annonymous functions"),
    
    datathis : function(){
        console.log('calling function', this.name);
    },
    annonymousFunctionthis : ()=> console.log("calling annonymous functions", employee.age)
}

console.log(employee.name, employee.age);
employee.coding()
employee.printName()
employee.data()
employee.annonymousFunction()

let loginPage = {
    userName: "#username",
    password: "#password",
    loginBtn: `//button[@text='submit']`,

    doLogin(appUserName, appUserPwd)
    {
        console.log(this.userName, this.password);
    }
}

loginPage.doLogin();

//object destructuring in nested objects

let user = {
    name: "Rohit Sharma",
    age: 30,
    address:{
        unit: 101,
        apartment: "new apt",
        location:{
            lat:12.33,
            long:23.44
        }
    }
}


let {name, address: {unit, apartment}} = user

let {address:{location:{lat,long}}} = user