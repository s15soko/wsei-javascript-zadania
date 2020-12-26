// #1

var counter = 1;
var stopOn = 15;

var interval = setInterval(function()
{
    console.log(`Cześć po raz ${counter}`);
    if(counter >= 15)
    {
        clearInterval(interval);
    }

    counter ++;
}, 3000);

// #2

var myTable = ["This", "is", "my", 1, "table"];
var interval2 = setInterval(function() {
    console.log(myTable);

    let index = 0;
    let length = myTable.length;

    var interval3 = setInterval(function() {
        console.log(myTable[index]);
        index ++;

        if(index >= length) {
            clearInterval(interval3);
        }
    }, 3000);

    clearInterval(interval2);
}, 2000);

