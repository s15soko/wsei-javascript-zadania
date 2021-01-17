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


// 
task1();
task2();
task3();
task4();
task5();