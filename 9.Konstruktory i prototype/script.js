// #1
function task1()
{
    function Person(name, surname, age, country, city, language) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.country = country;
        this.city = city;
        this.language = language;
        this.setAge = (age) => {
            this.age = age;
        }
        this.setCity = (city) => {
            this.city = city;
        }
    }
    
    const firstPerson = new Person("person1", "test", 20, "Polska", "Krakow", "PL");
    const secondPerson =  new Person("person2", "test2", 25, "Polska", "Warszawa", "PL");
    const thirdPerson =  new Person("person3", "test3", 32, "Polska", "Gdańsk", "PL");
    
    firstPerson.setAge(15);
    firstPerson.setCity("Warszawa");
    
    secondPerson.setAge(55);

    thirdPerson.setCity("Sopot");

    console.log(firstPerson);
    console.log(secondPerson);
    console.log(thirdPerson);
}

// #2
function task2()
{
    function Calculator()
    {
        this.memory = [];
        this.result = 0;

        this.div = function(number) {
            this.memory.push("Dzielnie");
            this.result /= number;
        }

        this.multi = function(number) {
            this.memory.push("Mnożenie");
            this.result *= number;
        }

        this.add = function(number) {
            this.memory.push("Dodawanie");
            this.result += number;
        }

        this.sub = function(number) {
            this.memory.push("Odejmowanie");
            this.result -= number;
        }

        this.clear = function() {
            this.memory = [];
            this.result = 0;
        }
    }

    let calc = new Calculator();
    calc.add(10);
    calc.div(2);
    calc.sub(1);
    calc.multi(3);
    console.log(calc.result);
    console.log(calc.memory);
    calc.clear();
    console.log(calc.result);
    console.log(calc.memory);
}

// #3
function task3() 
{
    function Game()
    {
        this.number = 0;
    
        this.setNumber = function() { 
            this.number = Math.floor(Math.random() * 10);
            this.checkNumber();
        }
        
        this.checkNumber = function() { 
            console.log(this.number)
            if(this.number > 5) {
                clearInterval(interval);
            }     
        }
    }

    let game = new Game();
    let interval = setInterval(() => {
        game.setNumber();
    }, 1000);
}


//
task1();
task2();
task3();