// #1
function task1()
{
    function success()
    {
        console.log("Udało się!");
    }

    success();
}

// #2
function task2()
{
    function param(param1)
    {
        console.log(param1);
    }

    param("Can be a number");
}

// #3
function task3()
{
    function table(table)
    {
        return table;
    }

    let tab = ["one", 2, "three"];
    console.log(table(tab));
}

// #4
function task4()
{
    function paramString(string)
    {
        let counter = 0;
        let interval = setInterval(function() {
            console.log(string);
            counter++;

            if(counter >= 5)
            {
                clearInterval(interval);
                console.log('Koniec');
            }
        }, 3000);
    }

    paramString("hello there");
}


//
task1();
task2();
task3();
task4();