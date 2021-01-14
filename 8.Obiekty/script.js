// #1 
function task1()
{
    let car = {};

    car.color = "red";
    car.model = "Fiat";

    console.log(car);
}

// #2
function task2()
{
    let car = {
        color: "red",
        model: "Fiat",
        changeColor(newColor)
        {
            this.color = newColor;
        }
    };

    car.changeColor("BMW");
    console.log(car);
}

// #3
function task3()
{
    let calc = {
        sum: 0,
        calculateSum(tableWithNumbers) {
            this.sum = tableWithNumbers.reduce((a, b) => {return a + b});
        }
    }

    calc.calculateSum([20,50,30]);
    console.log(calc.sum);
}

// #4
function task4()
{
    let car = {
        name: 'Audi',
        year: 2021,
        driver_name: 'John'
    }
    
    for(let key in car) {
        console.log(`${key}: ${car[key]}`);
    }
}

// #5
function task5()
{
    let car = {
        color: "red",
        model: "Fiat"
    };

    let driver = {
        name: 'John',
        age: 28
    }

    car.driver = driver;

    console.log(car.driver)
}

// #6
function task6()
{
    var car = {
        name: 'BMW',
        year: 2021,
        driver_name: 'Tom'
    }

    car.color = "red";
    car.sayHello = () => console.log('Hello');
    
    car.sayHello();
    console.log(car.color);
}


//
task1();
task2();
task3();
task4();
task5();
task6();