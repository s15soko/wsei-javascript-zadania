// #1

var num1 = 10;
var num2 = 20;

if(num1 > num2) {
    console.log("Number 1 is bigger");
}else {
    console.log("Number 2 is bigger");
}

// #2

var num3 = 15;

if(num1 > num2 && num1 > num3) {
    console.log("Number 1 a is the greatest");
} else if (num2 > num1 && num2 > num3) {
    console.log("Number 2 a is the greatest");
} else {
    console.log("Number 3 a is the greatest");
}

// #3 

for(var i = 0; i < 10; i++)
    console.log("Lubię JavaScript");

// #4

var result = 0;

for(var i = 0; i < 10; i++)
    result += (i+1);

console.log(result);

// #5 

var n = 5;

for(var i = 0; i <= n; i++)
{
    console.log(i + (i % 2 == 0 ? " - parzysta" : " - nieparzysta"));
}

// #6

for(var i = 0; i <= 10; i+=2)
{
    for(var j = 0; j <= 12; j+=4)
    {
        console.log("i= " + i + ", j= " + j);
    }
}

// #7

for(var i = 0; i <= 100; i++)
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

// #8 a)

for(var i = 1; i <= 5; i++)
{
    let str = "";
    for(var j = 1; j <= i; j++)
        str += "*";

    console.log(str);
}

// #8 b)

// #8 c)

// var treeFull = 9;
// var half = Math.floor(treeFull / 2);

// #8 d)

var c = 5;
var star = 1;

for(var i = 0; i < c; i++)
{
    let str = "";

    for(var j = 0; j < c; j++)
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
for(var i = 0; i < c; i++)
{
    let str = "";

    for(var j = 0; j < c; j++)
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

// #8 e)