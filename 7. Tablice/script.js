// #1
function task1()
{
    let myTab1 = ["one", 2, "three", 4];
    console.log(myTab1);
}

// #2
function task2()
{
    let myTab2 = ["This", "is", "my", 2, "table"];

    console.log(myTab2[0], myTab2[1]); // 1
    console.log(myTab2[myTab2.length - 1]); // 2

    myTab2.forEach(element => { // 3
        console.log (element);
    });

    for(let i = 0; i < myTab2.length; i+=2) // 4
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
}

// #3
function task3()
{
    let myTableForNumbers = [1, 5, 12, 13, 45, 100, 44];

    let sum = 0;
    myTableForNumbers.forEach(number => {
        sum += number;
    });
    console.log(sum); // 1

    let avg = sum / myTableForNumbers.length;

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

    let biggest = myTableForNumbers[0];
    let smallest = myTableForNumbers[0];

    myTableForNumbers.forEach(number => { 
        if(number > biggest)
            biggest = number;

        if(number < smallest)
            smallest = number;
    });

    console.log(`Biggest number: ${biggest}`); // 6
    console.log(`Smallest number ${smallest}`); // 7

    for (let i = myTableForNumbers.length - 1; i >= 0; i--) // 8
    {
        console.log(myTableForNumbers[i]);
    }
}

// #4
function task4()
{
    function sumMyTable(table)
    {
        let sum = 0;

        table.forEach(number => {
            sum += number;
        });

        return sum;
    }

    let myTab3 = [5, 5, 10, 15, 15];
    console.log(sumMyTable(myTab3));
}

// #5
function task5()
{
    let myTab4 = [5, 10, 15, 20, 25];

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
}

// #6
function task6()
{
    let myTab5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

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
}

// #7
function task7()
{
    function sortMyTable(table)
    {
        return table.sort((a, b) => a - b);
    }

    let tableToSort = [1, 93, 54, 2, 56, 3];
    console.log(sortMyTable(tableToSort));
}

// #8 
function task8()
{
    let tableOne = [54, 33, 12];
    let tableTwo = [46, 67, 88];

    function addTwoTables(tab1, tab2)
    {
        let result = [];

        for(let i = 0; i < tab1.length; i++)
            result.push(tab1[i] + tab2[i]);

        return result;
    }

    console.log(addTwoTables(tableOne, tableTwo))
}

// #9
function task9()
{
    let myNumericTable = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    function reserveTable(table)
    {
        let newTable = [];

        table.forEach(number => newTable.push(-number));

        return newTable;
    }

    console.log(reserveTable(myNumericTable));
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