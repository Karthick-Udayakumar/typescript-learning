class Car{
    speed = 100

    start()
    {
        console.log('car == start');
    }

    drive()
    {
        console.log('car == drive');
    }
}

class BMW extends Car{
    speed = 200

    //Method overriding
    start()
    {
        console.log('BMW == BMW Method');
    }

    parking()
    {
        console.log("Parking == BMW");
    }

    speedCheck()
    {
        console.log(this.speed);
        super.drive()
        super.start()
        //super.speed is not possible in JS.
        //Method can be accesible using super keyword
    }
}

let bmw = new BMW()
bmw.start();//overriden
bmw.drive() //inherited
bmw.parking()//individual
bmw.speedCheck()


let car = new Car()
car.start()
console.log(car.speed);

//parent class cannot access child class
//TypeError: car.parking is not a function
//car.parking()