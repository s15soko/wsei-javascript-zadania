// #1
let num1 = 10;
let num2 = 20;
function task1()
{
    if(num1 > num2) {
        console.log("Number 1 is bigger");
    }else {
        console.log("Number 2 is bigger");
    }
}

// #2
function task2()
{
    let num3 = 15;

    if(num1 > num2 && num1 > num3) {
        console.log("Number 1 a is the greatest");
    } else if (num2 > num1 && num2 > num3) {
        console.log("Number 2 a is the greatest");
    } else {
        console.log("Number 3 a is the greatest");
    }
}

// #3 
function task3()
{
    for(let i = 0; i < 10; i++)
        console.log("Lubię JavaScript");
}

// #4
function task4()
{
    let result = 0;

    for(let i = 0; i < 10; i++)
        result += (i+1);

    console.log(result);
}

// #5 
function task5()
{
    let n = 5;

    for(let i = 0; i <= n; i++)
    {
        console.log(i + (i % 2 == 0 ? " - parzysta" : " - nieparzysta"));
    }
}

// #6
function task6()
{
    for(let i = 0; i <= 10; i+=2)
    {
        for(let j = 0; j <= 12; j+=4)
        {
            console.log("i= " + i + ", j= " + j);
        }
    }
}

// #7
function task7()
{
    for(let i = 0; i <= 100; i++)
    {
        if( (i % 3 == 0) && (i % 5 == 0) )
        {
            console.log("FizzBuzz");
        }
        else if (i % 3 == 0)
        {
            console.log("Fizz");
        }
        else if (i % 5 == 0)
        {
            console.log("Buzz");
        }
        else {
            console.log(i);
        }
    }
}

// #8 a)
function task8a()
{
    for(let i = 1; i <= 5; i++)
    {
        let str = "";
        for(let j = 1; j <= i; j++)
            str += "*";

        console.log(str);
    }
}

// #8 b)
function task8b()
{
    for (let i = 1; i <= 5; i++) {
        let printString = "";
        for (let j = 5 - i; j > 0; j--) 
        {
            printString += " ";
        }
    
        //
    
        for (let j = i * 2 - 1; j > 0; j--) 
        {
              if(j % 2)
            printString += "*";
              else printString += " ";
        }
        console.log(printString);
    }
}

// #8 c)
function task8c()
{
    for (let i = 1; i <= 5; i++) 
    {
        let printString = "";
        for (let j = 5 - i; j > 0; j--) 
        {
            printString += " ";
        }

        for (let j = i * 2 - 1; j > 0; j--) 
        {
            printString += "*";
        }
        console.log(printString);
    }
}

// #8 d)
function task8d()
{
    let c = 5;
    let star = 1;

    for(let i = 0; i < c; i++)
    {
        let str = "";

        for(let j = 0; j < c; j++)
        {
            if(j < star)
            {
                str += "*";
            }
            else {
                str += j;
            } 
        }

        star++;
        console.log(str);
    } 
    console.log("-----");
    star = c;
    for(let i = 0; i < c; i++)
    {
        let str = "";

        for(let j = 0; j < c; j++)
        {
            if(j >= star)
            {
                str += j;
            }
            else {
                str += "*";
            } 
        }

        star--;
        console.log(str)
    }
}

// #8 e)
function task8e()
{
    for (let i = 1; i <= 5; i++) 
    {
        let printString = "";
        for (let j = 5 - i; j > 0; j--) 
        {
            printString += " ";
        }

        for (let j = i * 2 - 1; j > 0; j--) 
        {
            if(j % 2)
                printString += "*";
            else printString += " ";
        }
        console.log(printString);
    }

    let printString = "";
    for(let k = 0; k < 5; k++)
    {
        if(k < 4)
            printString += " ";
        if(k == 4){
            printString += "*";
        }
    }
    console.log(printString)
}


// 
task1();
task2();
task3();
task4();
task5();
task6();
task7();
task8a();
task8b();
task8c();
task8d();
task8e();