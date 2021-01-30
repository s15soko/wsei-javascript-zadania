// #1
function task1()
{
    // 1.1
    let taskOneElement = document.getElementById("test-event");
    taskOneElement.addEventListener("click", function(event){
        console.log("1.1)", event);
    });

    // 1.2
    document.addEventListener("mousemove", function(event){
        console.log("1.2)", event);
    });

    // 1.3
    taskOneElement.addEventListener("mouseover", function(event){
        console.log("1.3)", event);
    });

    // 1.4
    document.addEventListener("keypress", function(event) {
        console.log("1.4)", event);
    });

    // 1.5
    document.addEventListener("scroll", function(event) {
        console.log("1.5)", event);
    });

    // 1.6
    let taskOneElement2 = document.getElementById("input-test");
    taskOneElement2.addEventListener("keypress", function(event){
        console.log("1.6)" + event.target.value);
    });
}

// #2
function task2()
{
    let buttonTaskTwo = document.getElementById("ex2");

    buttonTaskTwo.addEventListener("click", function(event) {
        taskTwo(event.target);
    });

    function taskTwo(element)
    {
        console.log("Task 2: " + element.getAttribute('data-text'));
    }
}

// #3
function task3()
{
    let elementTaskThree = document.getElementById("ex3");
    elementTaskThree.addEventListener("mouseover", mouseEnter);
    elementTaskThree.addEventListener("mouseleave", mouseLeave);

    function mouseEnter()
    {
        elementTaskThree.style.backgroundColor = "blue";
    }

    function mouseLeave()
    {
        elementTaskThree.style.backgroundColor = "red";
    }
}

// #4
function task4()
{
    let inputTaskFour = document.getElementById("input-test");
    let ex3ErrorElement = document.getElementById("ex3-err");

    inputTaskFour.addEventListener("keyup", function(event) {
        let val = event.target.value;

        if(!isNaN(val))
        {
            ex3ErrorElement.innerHTML = "Nie można wpisywać liczb.";
        } else {
            ex3ErrorElement.innerHTML = "";
        }
    });
}

// #5
function task5()
{
    let ex5 = document.getElementById("ex5");
    let span = ex5.querySelector("span");
    let button = document.getElementById("ex5-button");

    let value = Number(span.innerHTML);

    function increase()
    {
        value++;
        span.innerHTML = value;

        if(value >= 10) {
            button.removeEventListener("click", increase);
        }
    }

    button.addEventListener("click", increase);
}

// #6
function task6()
{
    document.addEventListener("scroll", function(event) {
        let pos = window.pageYOffset;
        if(pos < 200) {
            document.body.style.backgroundColor = "red";
        } else if (pos > 200) {
            document.body.style.backgroundColor = "white";
        }
    });
}

// #7
function task7()
{
    function Calculator()
    {
        this.memory = [];
        this.result = 0;
        this.currentActionKey = null;

        this.div = function(number) {
            this.memory.push("Dzielnie");
            this.result /= Number.parseFloat(number);
        }

        this.multi = function(number) {
            this.memory.push("Mnożenie");
            this.result *= Number.parseFloat(number);
        }

        this.add = function(number) {
            this.memory.push("Dodawanie");
            this.result += Number.parseFloat(number);
        }

        this.sub = function(number) {
            this.memory.push("Odejmowanie");
            this.result -= Number.parseFloat(number);
        }

        this.clear = function() {
            this.memory = [];
            this.result = 0;
        }

        this.makeAction = function (value, defaultActionKey = null) 
        {
            let currentActionKey = defaultActionKey == null ? this.currentActionKey : defaultActionKey;

            switch (currentActionKey) {
                case "+":
                    this.add(value);
                break;
                case "-":
                    this.sub(value);
                break;
                case "/":
                    this.div(value);
                break;
                case "*":
                    this.multi(value);
                break;
            }
        }
    }

    let calc = new Calculator();
    let calculatorElement = document.getElementById("calculator");
    let screen = calculatorElement.querySelector("input");
    let btns = calculatorElement.querySelectorAll("button");

    //

    let clearScreen = () => screen.value = ""; 
    let showCalcValue = () => screen.placeholder = calc.result;
    let getValue = () => Number.parseFloat(screen.value);

    let isSomeValueOnScreen = () => screen.value != "" && screen.value != null;
    let isSomeAcionKey = () => calc.currentActionKey !== null;

    //

    showCalcValue();

    //

    btns.forEach(btn => {
        btn.addEventListener("click", function(event) {
            let elem = event.target;
            let value = elem.innerHTML;

            let screenValue = getValue();
            
            if(["+", "-", "*", "/", "="].includes(value))
            {
                if(value === "=")
                {
                    if(isSomeAcionKey()) {
                        if(!isNaN(screenValue)) {
                            calc.makeAction(screenValue);
                        }
                        
                    } else {
                        if(!isNaN(screenValue))
                        {
                            calc.clear();
                            calc.makeAction(screenValue, "+")
                        }
                    }

                    clearScreen();
                }
                else 
                {
                    if(isSomeAcionKey()) {
                        if(!isNaN(screenValue)) {
                            calc.makeAction(screenValue);
                        }
                        
                    } else {

                        if(!isNaN(screenValue)) {
                            calc.makeAction(screenValue, "+");
                        }
                        
                    }
                    
                    calc.currentActionKey = value;
                    clearScreen();
                }
            } 
            else {
                screen.value = screen.value + `${value}`;
            }

            showCalcValue();
        });
    }); 
}

//
// task1();
// task2();
// task3();
// task4();
task5();
// task6();
task7();