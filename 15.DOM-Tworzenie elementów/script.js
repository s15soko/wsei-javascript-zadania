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
    let root = document.getElementById("root");

    let btn = createNewElement("button");
    btn.innerHTML = "Utwórz";

    let form = createNewElement("div");
    let inputElement = createNewElement("input");
    inputElement.placeholder = "Typ elementu";
    let inputText = createNewElement("input");
    inputText.placeholder = "Tekst";
    let inputColor = createNewElement("input");
    inputColor.placeholder = "Kolor";
    let inputCount = createNewElement("input");
    inputCount.placeholder = "Ile razy";
    inputCount.type = "number";

    form.appendChild(inputElement);
    form.appendChild(inputText);
    form.appendChild(inputColor)
    form.appendChild(inputCount);

    root.appendChild(form);
    root.append(btn);

    btn.addEventListener("click", function ()
    {
        let count = inputCount.value;
        if(isNaN(count) || count < 1)
            return;

        for(let i = 0; i < count; i++)
        {
            let newElement = createNewElement(inputElement.value);
            newElement.innerHTML = inputText.value;
            newElement.style.color = inputColor.value;
            root.appendChild(newElement);
        }
    })
}

// #9
function task9()
{
    // let root = document.getElementById("root");

    // let storage = [];

    // let form = createNewElement("div");
    // let inpName = createNewElement("input");
    // inpName.placeholder = "Imię";
    // let inpLastName = createNewElement("input");
    // inpLastName.placeholder = "Nazwisko";
    // let inpAge = createNewElement("input");
    // inpAge.placeholder = "Wiek";
    // let inpChildrenCount = createNewElement("input");
    // inpChildrenCount.placeholder = "Ilość dzieci";

    // form.appendChild(inpName);
    // form.appendChild(inpLastName);
    // form.appendChild(inpAge);
    // form.appendChild(inpChildrenCount);

    // let table = createNewElement("table");
    // let tr = createNewElement("tr");
    // let thName = createNewElement("th");
    // thName.innerHTML = "Imię";
    // let thLastName = createNewElement("th");
    // thLastName.innerHTML = "Nazwisko";
    // let thAge = createNewElement("th");
    // thAge.innerHTML = "Wiek";
    // let thChildrenCount = createNewElement("th");
    // thChildrenCount.innerHTML = "Ilość dzieci";
    // tr.appendChild(thName);
    // tr.appendChild(thLastName);
    // tr.appendChild(thAge);
    // tr.appendChild(thChildrenCount);
    
    // let tHead = createNewElement("thead");
    // tHead.appendChild(tr);
    // table.appendChild(tHead);

    // let btnCreate = createNewElement("button");
    // btnCreate.innerHTML = "Utwórz";
    // let btnMore = createNewElement("button");
    // btnMore.innerHTML = "Więcej";

    // root.appendChild(form);
    // root.appendChild(btnCreate);
    // root.appendChild(btnMore);

    // function createNew()
    // {
    //     storage[i] = 1;
    // }

    // btnCreate

}

function task10()
{

}

// #11
function task11()
{
    let root = document.getElementById("root");
    let isNumber = (str) => /^\d+$/.test(str);

    function countNumbers(str)
    {
        let count = 0;
        for(let i = 0; i < str.length; i++) {
            if(isNumber(str[i]))
                count++;
        }

        return count;
    }

    function someString(str)
    {
        let count = countNumbers(str);
        console.log(`11) Suma liczb to: ${count}`)
        
        for(let i = 0; i < count; i++) {
            let newElement = createNewElement("div");
            newElement.innerHTML = str;
            root.appendChild(newElement);
        }
    }

    let someText = "To1JestMoj 1 TekstZ4LiczbamiANie3";
    someString(someText);
}

// #12
function task12()
{
    let myObj = {
        name: ""
    };

    function someString(str)
    {
        myObj.name = str;

        if(str.includes("Ala"))
        {
            myObj.name = str.replace("Ala", "Ola");
            console.log(`12) ${myObj.name}`)
        } else {
            let root = document.getElementById("root");
            let div = createNewElement("div");
            div.innerHTML = "Słowo Ala nie występuje w tekście.";
            root.appendChild(div);
        }
    }

    let someText = "To jest tekst bez słowa Ala.";
    someString(someText);
}

// #13
function task13()
{
    let isLetter = (str) => str.length === 1 && str.match(/[a-z]/i);
    let isNumber = (str) => /^\d+$/.test(str);

    function newTable(strings)
    {
        let storage = [];
        strings.forEach(string => {
            for(let i = 0; i < string.length; i++) {
                if(isLetter(string[i])) {
                    if(string[i] in storage) {
                        storage[string[i]] += 1;
                    } else {
                        storage[string[i]] = 1;
                    }
                }
            }
        });

        return storage;
    }

    function sum(strings)
    {
        let sum = 0;
        strings.forEach(string => {
            for(let i = 0; i < string.length; i++) {
                if(isNumber(string[i])) {
                    sum += Number.parseInt(string[i]);
                }
            }
        });

        return sum;
    }

    function avg(strings)
    {
        let sum = 0;
        let count = 0;
        strings.forEach(string => {
            for(let i = 0; i < string.length; i++) {
                if(isNumber(string[i])) {
                    count ++;
                    sum += Number.parseInt(string[i]);
                }
            }
        });

        return sum / count;
    }

    let myStrings = ["To jest tablica", "która", "przechowuje", "jakieś słowa", "bez liczb takich jak", "np 1 czy 2", "koniec."];
    console.log("13.1) ", newTable(myStrings));
    console.log("13.2) ", sum(myStrings));
    console.log("13.3) ", avg(myStrings));
}

// #14
function task14()
{
    var myObj = {
        name: '',
        surname: '',
        age: ''
    }

    var copy = Object.assign({}, myObj);

    function newValues(name, surname, age)
    {
        myObj.name = name;
        myObj.surname = surname;
        myObj.age = age;
        
        //

        function addField(attr, char)
        {
            let s = "";
            for(let i = 0; i < name.length; i++) {
                s += char;
            }
            myObj[s] = attr;
        }
        
        addField(name, "n");
        addField(surname, "s");
        addField(age, "a");


        if(name.length > 5 || surname.length > 5 || age.length > 5)
        {
            console.log(myObj);

            let root = document.getElementById("root");
            let button = createNewElement("button");
            button.innerHTML = "Wróć do stanu początkowego";
            root.appendChild(button);

            button.addEventListener("click", function() {
                myObj = copy;
                console.log(myObj);
            });
        }
    }

    newValues("Tom", "Kowalski", 25);
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
task10();
task11();
task12();
task13();
task14();