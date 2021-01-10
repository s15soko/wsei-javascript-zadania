// #1
// 1.1
var taskOneElement = document.getElementById("test-event");
taskOneElement.addEventListener("click", function(event){
    console.log("1.1", event);
});

// 1.2
document.addEventListener("mousemove", function(event){
    console.log("1.2", event);
});

// 1.3
taskOneElement.addEventListener("mouseover", function(event){
    console.log("1.3", event);
});

// 1.4

document.addEventListener("keypress", function(event) {
    console.log("1.4", event);
});

// 1.5

document.addEventListener("scroll", function(event) {
    console.log("1.5 (scroll)", event);
});

// 1.6

var taskOneElement2 = document.getElementById("input-test");
taskOneElement2.addEventListener("keypress", function(event){
    console.log("1.6: " + event.target.value);
});

// ================
// #2

var buttonTaskTwo = document.getElementById("ex2");

buttonTaskTwo.addEventListener("click", function(event) {
    taskTwo(event.target);
});

function taskTwo(element)
{
    console.log("Task 2: " + element.getAttribute('data-text'));
}

// ================
// #3

var elementTaskThree = document.getElementById("ex3");
elementTaskThree.addEventListener("mouseover", mouseEnter);
elementTaskThree.addEventListener("mouseleave", mouseLeave);

function mouseEnter()
{
    elementTaskThree.style.backgroundColor = "blue";
}

function mouseLeave()
{
    elementTaskThree.style.backgroundColor = "red";
}

// ================
// #4

var inputTaskFour = document.getElementById("input-test");
var ex3ErrorElement = document.getElementById("ex3-err");

inputTaskFour.addEventListener("keyup", function(event) {
    let val = event.target.value;

    if(!isNaN(val))
    {
        ex3ErrorElement.innerHTML = "Nie można wpisywać liczb.";
    } else {
        ex3ErrorElement.innerHTML = "";
    }
});

// ================
// #5



// ================
// #6



// ================
// #7


