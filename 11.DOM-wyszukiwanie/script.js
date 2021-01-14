// #1
function task1()
{
    let elements = document.querySelectorAll(".list");
    console.log(elements);
}

// #2
function task2()
{
    let returnElements = (tag) => {
        return document.querySelectorAll(tag);
    }

    let result = returnElements("body");
    console.log(result);
}

// #3
function task3()
{
    let element = document.getElementById("list");
    console.log(element);
}

// #4
function task4()
{
    let find = (item) => {
        return document.querySelectorAll(item);
    }

    console.log("1)", find("li"));
    console.log("2)", find("ul"));
    console.log("3)", find("span"));
    console.log("4)", find("div.list span"));
    console.log("5)", find("div#spans span"));
}


// 
task1();
task2();
task3();
task4();