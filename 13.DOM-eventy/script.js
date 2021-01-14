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

        this.showResult = function() {
            console.log(this.result);
        }
    }

    let calc = new Calculator();
    var number = "";

    document.addEventListener("keyup", function(event) {
        let key = event.key;
        
        function makeAction()
        {
            console.log(`Current calc result: ${calc.result}`);
            clearNumber();
        }
        function clearNumber()
        {
            number = "";
        }
        function getNumber()
        {
            if(number == "")
                return 0;

            return Number.parseFloat(number);
        }

        switch (key) {
            case "+": // +
                calc.add(getNumber());
                makeAction();
            break;
            case "-": // -
                calc.sub(getNumber());
                makeAction();
            break;
            case "/": // dzielenie
                calc.div(getNumber());
                makeAction();
            break;
            case "*": // mnozenie
                calc.multi(getNumber());
                makeAction();
            break;
            case "Backspace": // clear
                calc.clear();
                makeAction();
            break;
            case "Enter": //
                makeAction();
            break;
            default:
                if(key == "." || (Number.parseFloat(key) >= 0 && Number.parseFloat(key) <= 9))
                {
                    number += key;
                    console.log(`Current number: ${getNumber()}`);
                }
        }
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