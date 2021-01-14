// #1
function task1()
{
    let person1 = {
        firstName: "Jan",
        lastName: "Nowak",
        age: 15,
        country: "PL",
        city: "Kraków"
    }
    
    let person2 = {
        firstName: "Tomasz",
        lastName: "Brzęk",
        age: 17,
        country: "USA",
        city: "LA"
    }
    
    function wypisz() {
        console.log(`${this.firstName} ${this.lastName} ${this.age} ${this.country} ${this.city}`);
    }
    
    function dodaj() {
        this.age++;
    }

    person1.wypisz = wypisz;
    person1.dodaj = dodaj;

    person2.wypisz = wypisz;
    person2.dodaj = dodaj;
    
    person1.wypisz();
    person1.dodaj();
    person1.wypisz();
    
    person2.wypisz();
    person2.dodaj();
    person2.wypisz();
}

// #2
function task2()
{
    let person1 = {
        firstName: "Jan",
        lastName: "Nowak",
        age: 15,
        country: "PL",
        city: "Kraków"
    }
    
    let person2 = {
        firstName: "Tomasz",
        lastName: "Brzęk",
        age: 17,
        country: "USA",
        city: "LA"
    }

    person1.favoriteFood = ['sushi', 'pizza'];
    person2.favoriteFood = ['sushi', 'lasagna'];

    function showFavoriteFood() {
        if(this.favoriteFood) {
            console.log(this.favoriteFood);
        }
    };

    person1.showFavoriteFood = showFavoriteFood;
    person2.showFavoriteFood = showFavoriteFood;

    person1.showFavoriteFood();
    person2.showFavoriteFood();
}

// #3
function task3()
{
    function Calculator(number1, number2)
    {
        this.a = number1;
        this.b = number2;

        this.div = function() {
            return this.a / this.b;
        }

        this.multi = function() {
            return this.a * this.b;
        }

        this.add = function() {
            return this.a + this.b;
        }

        this.sub = function() {
            return this.a - this.b;
        }
    }

    const calc = new Calculator(51, 49);
    console.log(calc.add());
    console.log(calc.div());
    console.log(calc.multi());
    console.log(calc.sub());
}

// #4
function task4()
{
    function Ladder() 
    {
        this.currentDegree = 0;

        this.goUp = (steps = 1) => {
            if(this.currentDegree == 0) {
                console.log(`Rozpoczynam wchodzić na drabinę.`)
            }

            if(steps > 0)
            {
                for(let i = 0; i < steps; i++)
                {
                    this.currentDegree++;
                    console.log(`Wychodzę na stopień: ${this.currentDegree}`);
                }
            }
        }

    
        this.getOff = (steps = 1) => {
            if (this.currentDegree == 0){
                console.log(`Jesteś już na poziomie 0.`);
            }
            else {

                for(let i = 0; i < steps; i++)
                {
                    if (this.currentDegree == 0) {
                        console.log(`Jesteś już na poziomie 0.`);
                        break;
                    }

                    this.currentDegree--;
                    console.log(`Schodzę na stopień: ${this.currentDegree}`);
                }
            }
        }
    }
    
    const ladder = new Ladder(10);
    
    ladder.goUp(10);
    ladder.getOff(4);
    ladder.getOff(5);
    ladder.goUp();
    ladder.getOff(3);
}


// 
task1();
task2();
task3();
task4();