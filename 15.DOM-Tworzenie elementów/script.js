function createNewElement(tag)
{
    return document.createElement(tag);
}

// #1
function task1()
{
    let root = document.getElementById("root");
    let newElement = createNewElement("div");
    newElement.innerHTML = "To jest nowy element";

    root.appendChild(newElement);
}

// #2
function task2()
{
    let ul = createNewElement("ol");
    ul.classList = "task2Ul";
    let fruits = ["Jabłko", "Ananas", "Banan", "Pomarańcza", "Śliwka", "Hurma", "Mango"]

    fruits.forEach(fruitName => {
        let newLi = createNewElement("li");
        newLi.innerHTML = fruitName;
        ul.appendChild(newLi);
    });

    let root = document.getElementById("root");
    root.appendChild(ul)
}

// #3
function task3()
{
    let ul = document.getElementsByClassName('task2Ul')[0];
    let elements = ul.querySelectorAll("li");

    for(let i = 1; i < elements.length; i += 2)
    {
        elements[i].remove();
    }
}

// #4
function task4()
{
    let root = document.getElementById("root");
    let btn = createNewElement("button");
    btn.innerHTML = "Usuń ten przycisk";

    btn.addEventListener("click", function(){ 
        btn.remove();
    });
    
    root.appendChild(btn);
}

// #5
function task5()
{
    let min = 4;
    let max = 20;
    let root = document.getElementById("root");
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    for(let i = 1; i <= randomNumber; i++)
    {
        let newElement = createNewElement("div");
        newElement.innerHTML = `to jest div numer ${i}`;
        root.appendChild(newElement);
    }
}

// #6
function task6()
{
    let myObject = {
        div1: 'to jest div',
        span1: 'to jest span',
        div2: {
            div3: 'to jest div',
        },
        span2: 'to jest span',
    };

    let root = document.getElementById("root");
   
    let div1 = createNewElement("div");
    div1.innerHTML = "to jest div";
    let span1 = createNewElement("span");
    span1.innerHTML = "to jest span";
    let div2 = createNewElement("div");
    let div3 = createNewElement("div");
    div3.innerHTML = "to jest div";
    let span2 = createNewElement("span");
    span2.innerHTML = "to jest span";

    root.appendChild(div1);
    root.appendChild(span1);
    
    div2.appendChild(div3);
    root.appendChild(div2);
    root.appendChild(span2);
}

// #7
class Container 
{
    firstList = ["Ananas", "Mleko", "Chleb", "Makaron", "Mydło", "Pomidory"];
    secondList = [];
    
    firstListContainer = null;
    secondListContainer = null;

    firstButton = null;
    secondButton = null;

    renderFirstList()
    {
        if(this.firstListContainer == null)
            return;

        this.firstListContainer.innerHTML = "";

        this.firstList.forEach(name => {
            let newElement = createNewElement("li");
            newElement.innerHTML = name;
            this.firstListContainer.appendChild(newElement);
        });
    }

    renderSecondList()
    {
        if(this.secondListContainer == null)
            return;
        
        this.secondListContainer.innerHTML = "";

        this.secondList.forEach(name => {
            let newElement = createNewElement("li");
            newElement.innerHTML = name;
            this.secondListContainer.appendChild(newElement);
        });
    }

    switchToFirstList()
    {
        if(this.secondList.length == 0)
            return;

        let ele = this.secondList.pop();
        this.firstList.push(ele);
        this.refreshState();
    }

    switchToSecondList()
    {
        if(this.firstList.length == 0)
            return;

        let ele = this.firstList.pop();
        this.secondList.push(ele);
        this.refreshState();
    }

    refreshState()
    {
        if(this.firstList.length == 0) {
            this.firstButton.disabled = true;
        } else this.firstButton.disabled = false;

        if(this.secondList.length == 0) {
            this.secondButton.disabled = true;
        } else this.secondButton.disabled = false;

        this.renderFirstList();
        this.renderSecondList();
    }
}

function task7()
{
    let root = document.getElementById("root");

    let ol1 = createNewElement("ol");
    ol1.classList = "ol1";
    let ol2 = createNewElement("ol");
    ol2.classList = "ol2";

    let container = createNewElement("div");
    container.classList = "myContainer";

    root.appendChild(container);
    container.appendChild(ol1);
    container.appendChild(ol2);

    let button1 = createNewElement("button");
    button1.innerHTML = "Switch to second list";
    let button2 = createNewElement("button");
    button2.innerHTML = "Switch to first list";

    root.appendChild(button1);
    root.appendChild(button2);

    //

    let management = new Container();
    management.firstListContainer = ol1;
    management.secondListContainer = ol2;
    management.firstButton = button1;
    management.secondButton = button2;
    management.refreshState();

    button1.addEventListener("click", function () {
        management.switchToSecondList();
    });

    button2.addEventListener("click", function () {
        management.switchToFirstList();
    });
}

// #8
function task8()
{
    // todo
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