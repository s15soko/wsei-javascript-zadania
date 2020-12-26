// #1

var myTab1 = ["one", 2, "three", 4];
console.log(myTab1);

// #2

var myTab2 = ["This", "is", "my", 2, "table"];

console.log(myTab2[0], myTab2[1]); // 1
console.log(myTab2[myTab2.length - 1]); // 2

myTab2.forEach(element => { // 3
    console.log (element);
});

for(var i = 0; i < myTab2.length; i+=2) // 4
{
    console.log(myTab2[i]);
}

myTab2.forEach(element => {
    if(typeof(element) == "string")
        console.log(element);
});

myTab2.forEach(element => {
    if(typeof(element) == "number")
        console.log(element);
});

// #3

var myTableForNumbers = [1, 5, 12, 13, 45, 100, 44];

var sum = 0;
myTableForNumbers.forEach(number => {
    sum += number;
});
console.log(sum); // 1

var avg = sum / myTableForNumbers.length;

sum = 0;
myTableForNumbers.forEach(number => {
    sum -= number;
});
console.log(sum); // 2

console.log(avg); // 3

myTableForNumbers.forEach(number => {  // 4
    if(number % 2 == 0)
        console.log(number);
});

myTableForNumbers.forEach(number => {  // 5
    if(number % 2 != 0)
        console.log(number);
});

var biggest = myTableForNumbers[0];
var smallest = myTableForNumbers[0];

myTableForNumbers.forEach(number => { 
    if(number > biggest)
        biggest = number;

    if(number < smallest)
        smallest = number;
});

console.log(`Biggest number: ${biggest}`); // 6
console.log(`Smallest number ${smallest}`); // 7

for (var i = myTableForNumbers.length - 1; i >= 0; i--) // 8
{
    console.log(myTableForNumbers[i]);
}

// #4

function sumMyTable(table)
{
    let sum = 0;

    table.forEach(number => {
        sum += number;
    });

    return sum;
}

var myTab3 = [5, 5, 10, 15, 15];
console.log(sumMyTable(myTab3));

// #5

var myTab4 = [5, 10, 15, 20, 25];

function taskFive(table)
{
    let sum = 0;
    let avg = 0;

    table.forEach(number => {
        sum += number;
    });

    avg = sum / table.length;

    table.forEach(number => {
        console.log(number / avg);
    });
}

taskFive(myTab4);

// #6

var myTab5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function taskSix(table)
{
    let sum = 0;
    let counter = 0;

    table.forEach(number => {
        if(number % 2 == 0)
        {
            sum += number;
            counter++;
        }
    });

    return sum / counter;
}

console.log(taskSix(myTab5));

// #7

