// #1
function task1()
{
    function getTags(elements)
    {
        tags = [];

        elements.forEach(element => {
            tags.push(element.tagName);
        });

        return tags;
    }

    let elements = document.querySelectorAll(".more-divs");
    console.log(getTags(elements));
}

// #2
function task2()
{
    let myElement = document.getElementsByClassName("short-list")[0];
    
    function show(element)
    {
        console.log("1)", element.innerHTML);
        console.log("2)", element.outerHTML);
        console.log("3)", element.classList.value);
        console.log("4)", element.classList);
        console.log("5)", element.dataset);
    }
    
    show(myElement);
}

// #3
function task3()
{
    let element = document.getElementById("datasetCheck");

    let dataset = element.dataset;
    let myNumbers = [
        Number.parseFloat(dataset.numberone),
        Number.parseFloat(dataset.numbertwo),
        Number.parseFloat(dataset.numberThree)
    ];
    
    function add(numbers)
    { 
        let sum = 0;

        numbers.forEach(number => {
            sum += number;
        });

        return sum;
    }

    function sub(numbers)
    { 
        let sum = 0;

        numbers.forEach(number => {
            sum -= number;
        });

        return sum;
    }

    console.log(add(myNumbers));
    console.log(sub(myNumbers));

}

// #4
function task4()
{
    let element = document.getElementById("spanText");
    element.innerHTML = "To jest zadanie 4";
}

// #5
function task5()
{
    let element = document.getElementById("spanText");
    element.classList = "dodanieKlasyDlaElementu";
}

// #6
function task6()
{
    let div = document.getElementById("classes");

    function showClasses(elementClasses)
    {
        let str = "";
        elementClasses.forEach(className => {
            console.log(className);
            str += `+${className}`
        });

        str = str.substring(1);
        console.log(str);
    }

    let classes = div.classList;
    showClasses(classes);

    div.classList = "";
    console.log("Usunięto wszystkie klasy");
}

// #7
function task7()
{
    let longList = document.getElementById("longList");
    let elements = longList.querySelectorAll("li");

    function addAttr(liElements)
    {
        elements.forEach(element => {
            if(!element.hasAttribute("data-text")) {
                element.setAttribute("data-text", "text");
            }
        });
    }

    addAttr(elements);
}

// #8
function task8()
{
    function makeObject(string)
    {   
        let obj = {
            newClass: string
        };

        return obj;
    }

    function readAndAssign(obj)
    {
        let div = document.getElementById("myDiv");
        let newClass = obj.newClass;
        div.classList.add(newClass);
    }

    let myObj = makeObject("string_z_parametru");
    readAndAssign(myObj);
}

// #9
function task9()
{
    function addClass(number, target)
    {
        if(number % 2 == 0) {
            target.classList.add("even");
        } else {
            target.classList.add("odd");
        }
    }

    let randomNumber = () => Math.floor(Math.random() * 11);   
    let targetElement = document.getElementById("numbers");

    addClass(randomNumber(), targetElement);
}

// #10
function task10() 
{
    let longList = document.getElementById("longList");

    function getValues(list)
    {
        let values = [];
        let elements = list.querySelectorAll("li");
        elements.forEach(element => {
            values.push(element.innerHTML);
        });

        return values;
    }

    console.log(getValues(longList));
}

// #11
function task11()
{
    let longList = document.getElementById("longList");
    let children = longList.children;
    let randomNumber = () => Math.floor(Math.random() * 11);  

    //

    function setChildrenData(elements)
    {
        for(element of elements)
        {
            let currentValue = element.innerHTML;
            element.setAttribute("data-old-value", currentValue);
            element.innerHTML = randomNumber();
        }
    }

    setChildrenData(children);
} 

// 
task1();
task2();
task3();
task4();
task5();
task6();
task7();
task8();
task9();
task10();
task11();