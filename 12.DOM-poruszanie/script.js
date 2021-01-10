




// #4

function getRandomColor()
{
    return "#" + Math.floor(Math.random()*16777215).toString(16);
}

function changeColor()
{
    let buttons = document.querySelectorAll("#ex3 button");

    buttons.forEach(element => {
        element.addEventListener('click', function(){
            element.parentElement.style.backgroundColor = getRandomColor();
        });
    });
}

changeColor();

// #5

var ex5Div = document.getElementById("ex5");
var ex5DivList = ex5Div.querySelector('ul');

ex5Div.querySelectorAll("div").forEach((div) => {

    div.addEventListener("mouseover", function() {

        let thisColor = this.style.backgroundColor;
        let listElements = ex5DivList.querySelectorAll("li");

        // 5.1
        let firstLi = listElements[0];
        firstLi.style.backgroundColor = thisColor;
    
        // 5.2
        let lastLi = listElements[listElements.length - 1];
        lastLi.style.backgroundColor = thisColor;

        // 5.3
        for(let i = 1; i < listElements.length; i += 2)
            listElements[i].style.backgroundColor = thisColor;

        // 5.4
        listElements.forEach(el => {
            el.style.backgroundColor = thisColor;
        });

        // 5.5
        ex5DivList.style.backgroundColor = thisColor;
    });
});

// #6

var ex6Div = document.getElementById("ex6");

// 6.1
var ex6Childs = ex6Div.firstElementChild.firstElementChild.firstElementChild;
console.log("6.1 ", ex6Childs);

// 6.2
var family = ex6Div
    .firstElementChild
    .parentNode
    .firstElementChild
    .firstElementChild
    .nextSibling
    .parentNode;

console.log("6.2 ", family);

// 6.3
var family2 = ex6Div
    .parentNode
    .firstElementChild
    .parentNode
    .children[1]
    .firstElementChild
    .firstElementChild
    .firstElementChild;


console.log("6.3 ", family2);
