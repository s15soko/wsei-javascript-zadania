// #1

function success()
{
    console.log("Udało się!");
}

success();

// #2

function param(param1)
{
    console.log(param1);
}

param("Can be a number");

// #3

function table(table)
{
    return table;
}

let tab = ["one", 2, "three"];
console.log(table(tab));

// #4

function paramString(string)
{
    let counter = 0;
    let interval = setInterval(function() {
        console.log(string);
        counter++;

        if(counter >= 5)
            clearInterval(interval);
    }, 3);
}

paramString("hello there");