// #1
function task1()
{
    let parent = document.getElementById("buz").parentElement;
    console.log("1)", parent);
    
    let brother = document.getElementById("baz").nextElementSibling;
    console.log("2)", brother);
    
    let children = document.getElementById("foo").children;
    console.log("3)", children);
    
    let parent2 = document.getElementById("foo").parentNode;
    console.log("4)", parent2);
    
    let firstChild = document.getElementById("foo").children[0];
    console.log("5)", firstChild);
    
    let midChild = document.getElementById("foo").children[1];
    console.log("6)", midChild);
}

// #2
function task2()
{
    let listenEvent = (element) => {
        element.addEventListener("click", () => {
            console.log(element.children[0]
                    .children[0].children[0].children[1]
                    .children[0].children[0].textContent);
        });
    }
    let ex2Element = document.getElementById("ex2");
    listenEvent(ex2Element);
}

// #3
function task3()
{
    let elements = document.querySelectorAll('#ex3 button');

    function myEvent (event) {
        let sib = event.target.nextElementSibling;

        switch(sib.style.display)
        {
            case "none": 
                sib.style.display = "block";
                break;
            case "block":
                sib.style.display = "none";
                break;
        }
    };

    elements.forEach(element => {
        element.addEventListener('click', myEvent);
    });
}

// #4
function task4()
{
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
}

// #5
function task5()
{
    let ex5Div = document.getElementById("ex5");
    let ex5DivList = ex5Div.querySelector('ul');

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
}

// #6
function task6()
{
    let ex6Div = document.getElementById("ex6");

    // 6.1
    let ex6Childs = ex6Div.firstElementChild.firstElementChild.firstElementChild;
    console.log("6.1)", ex6Childs);

    // 6.2
    let family = ex6Div
        .firstElementChild
        .parentNode
        .firstElementChild
        .firstElementChild
        .nextSibling
        .parentNode;

    console.log("6.2)", family);

    // 6.3
    let family2 = ex6Div
        .parentNode
        .firstElementChild
        .parentNode
        .children[1]
        .firstElementChild
        .firstElementChild
        .firstElementChild;


    console.log("6.3)", family2);
}


//
task1();
task2();
task3();
task4();
task5();
task6();