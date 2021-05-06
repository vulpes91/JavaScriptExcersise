console.log("Слава Омниссии!");

// old version
var lessonTopic = "Учим JavaScript";
console.log(lessonTopic);

//es6 и выше 

let userName = "Alexander";
console.log(userName);

const birthYear = 1991;
console.log(birthYear);

// var имеет функциональную область видимости. Лучше не использовать. 
// let/const имеют блочную область видимости 
// переменная let может измениться, const нет
// если точно известно, что переменная будет меняться - использовать let


/* ------------- ТИПЫ ДАННЫХ В ПЕРЕМЕННЫХ ------------- */

//строки (слова и текст)
const myName = "Alex";
const codingLanguage = "Язык JavaScript";

//числа 
const age = 29;

//логический  true/false 

const isMarried = true;


/* -------------ОПЕРАЦИИ------------- */
//сложение чисел

let x = 10;
let y = 5;
let result = x + y;
console.log(result);
//или 
console.log(x + y);


/*-----------сложение строк Конкатенация ------------*/

let greeting = "Hello, ";
let person = "John";
console.log(greeting + person);

let sum = "$1000";
let tax = "$130";

console.log(sum + tax);

//старый способ
let man = "Mike";
let greetings = "Hello, " + man + ". How are you?";
console.log(greetings);

//шаблонные строки в es6 , новый вариант 

let newMan = "Derek";
//  далее используются обратные кавычки  `
let newGreetings = `Greetings ${newMan}! How are you?`;
console.log(newGreetings);
console.log(`Greetings ${newMan}! How are you?`);

let meetingTime = "18:30";
let debt = 300;
let meetingPlace = "Smolenskaya square, 3";
console.log(`Goodbye, ${newMan}, let's meet at ${meetingTime} in ${meetingPlace}.`);
let invitation = `Hello, ${man}! Meet ${newMan} at ${meetingPlace}. Give him the sum of your debt, which is $${debt}.`;
console.log(invitation);


/* ---------------УСЛОВИЯ--------------- */

// if (/*условие, которое будет проверяться*/) {
//     /* код, который выполнится, если условие верно */
// } else {
//     /* код, который будет выполнен, если условия не верно */
// }

if (10 > 5) {
    console.log("Ten is greater, than five");
} else {
    console.log("Something went wrong");
}

let a = 8;
let b = 6;

if (a > b) {
    console.log("A is greater than B");
} else {
    console.log("A is not greater, than B");
}

console.log("________________")


let yourAge = 21;
const matureAge = 21;

console.log(`Variable yourAge is equal to ${yourAge}`);
console.log(`Variable matureAge is equal to ${matureAge}`);

if (yourAge > matureAge) {
    console.log("Your age is bigger than 21");
} else if (yourAge < matureAge) {
    console.log("Your age is smaller than 21");
} else {
    console.log("Your age is equal to 21");
}

console.log(`Hello, my name is ${newMan}, i am ${yourAge} years old and i live in ${meetingPlace}. Now it's ${meetingTime} at my watch.`);

let e = 110;
let f = 150;

if (e > f) {
    console.log("E is bigger than F");
} else if (e == f) {
    console.log("E is equal to F");
} else {
    console.log("E is smaller than F");
}
// нельзя здесь использовать 1 знак =, так как это присванивание. == - не строгое сравниение, === - строгое сравнение 

let currentYear = 2021;
let yourBirthYear = 2004;
let yourCurrentAge = currentYear - yourBirthYear;

console.log(yourCurrentAge);
console.log(`You are ${yourCurrentAge} years old`)

if (yourCurrentAge < 18) {
    console.log("You can not buy beer.");
} else {
    console.log("You can buy beer.");
}


/*-------------конструкция switch case----------------*/
// используется для проверки переменной в несколько вариантов 

const schoolMark = 5;

switch (schoolMark) {
    case 1: console.log("Вы получили кол");
        break; //break означает завершение текущего кейса
    case 2: console.log("Вы получили неуд");
        break;
    case 3: console.log("Вы получили тройку");
        break;
    case 4: console.log("Вы получили оценку хорошо");
        break;
    case 5: console.log("Вы получили оценку отлично");
        break;
    default: console.log("Оценка не может быть ниже 1 и выше 5");
}
//default - для случаев, если ни один из case не сработал
//если не указать break, автоматически сработает следующий код


/* ---------МАССИВЫ--------- */
//Массивы - тип группировки данных в одну "коллекцию" 

const veg1 = "carrot";
const veg2 = "potato";
const veg3 = "beetroot";
const veg4 = "onion";

// если есть много схожих по смыслу значений их можно объединить в одну переменную, используются массивы. 
// массив позволяет обратиться к какому-то из конкретных его элементов 
const vegs = ['carrot', 'potato', 'beetroot', 'onion'];
console.log(vegs);
//данная команда выдаст в консоль (4) ["carrot", "potato", "beetroot", "onion"]
// где 4 - количество элементов в массиве. У каждого элемента массива есть индекс
//индекс начинается с 0, то есть первый элемент имеет индекс 0 
console.log(vegs[1]);
//выдаст первый по индексу(второй по счёту) элемент массива

//в массиве могут быть разные типы данных 
const sampleArray = ['123', 'sample', true, 'sampleText', false];
console.log(sampleArray);
// лучше хранить связанные по смыслу данные. Например года, типы предметов итп


/* -----------ЦИКЛЫ----------- */
// цикл for позволяет запускать один и тот же блок кода несколько раз 

for (let i = 0; i < 10; i++) {
    console.log("Hello world!")
}

// ^ в круглых скобках описываются исходные данные. Переменная i как счётчик цикла 
// на старте она равна 0, цикл работает пока i меньше 10. В конце каждой итерации
// цикла i будет увеличиваться на один (++) - итератор 

console.log("старт цикла с m");
for (let m = 5; m < 15; m++) {
    console.log("M cycle");
}
console.log("конец цикла с m");

console.log("старт цикла m=");
for (let m = 5; m < 15; m++) {
    console.log('m=' + m);
}
console.log("конец цикла m=");
// ^ выведет в консоль все значения массива как "m=5", "m=6" итп


/* --------Обход массивов с помощью циклов for ----------- */

const fruits = ['apple', 'lemon', 'mango', 'pear'];

for (let f = 0; f < 4; f++) {
    console.log(fruits[f]);
}
// f стартует с нуля, дойдёт до 3 и потом произойдёт выход из цикла

const names = ['John', 'Mike', 'Bill', 'Hugh'];
console.log(names.length); //покажет количество элементов в массиве
console.log("В этом массиве " + names.length + " элементов");

for (let r = 0; r < names.length; r++) {
    console.log(names[r]);
}
// r начинаестя с 0, до тех пор, пока r меньше чем names.length, прибавляется на 1
// консоль будет выводить  элемент массива с индексом 0, затем (0+1) 1, (1+1) 2 итп


/* --------Обход массивов с помощью метода for.each() ----------- */

fruits.forEach(function (elementName, itemIndex) {
    console.log(`Элемент ${elementName} имеет индекс ${itemIndex}`);
});
//в фигурных скобках пишется код который сработает для каждого элемента массива,
// где значение элемента будет находиться в переменной item, 
// а индекс будет находиться в переменной index.
// значения elementName и itemIndex могут быть произвольными, главное их порядок 
// метод forEach можно применить к любому массиву 

const employees = ["Mikhail", "Sergei", "Alexander", "Pyotr", "Andrey"];

employees.forEach(function (worker, i) {
    console.log(`Worker ${worker} has taken the ${i} place`);
});

/* -------- ФУНКЦИИ ----------- */
// функция это область кода, которая имеет имя и мы можем вызывать его несколько раз 

// let greeting1 = "Привет, Пётр, как дела?";
// console.log(greeting1);
// let greeting2 = "Привет, Михаил, как дела?";
// console.log(greeting2);
// let greeting3 = "Привет, Роман, как дела?";
// console.log(greeting3);

// в этом примере три переменные отличаются только именем. 


function greetingGeneral(name) {
    console.log(`Привет ${name}! Как поживаешь?`);
}
//в круглых скобках функции пишутся параметры которые идут внутри функции
//в фигурных - сам код функции 
greetingGeneral("Максим");
greetingGeneral("Олег");
greetingGeneral("Эльдар");
greetingGeneral("Алексей");

// в скобках пишется значение, которое подставится в изначальный код функции 
// код функции описываестя один раз, затем просто подставляются разные параметры 

function goodByeGeneral(workerName) {
    console.log(`Goodbye, ${workerName}. We will miss you!`);
}

goodByeGeneral("Max");
goodByeGeneral("Eric");
goodByeGeneral("Paul");

console.log("------------------");

function calculateSum(x, y) {
    // let result = x + y;
    console.log(x + y);
    return (x + y);
    // return result; 
    // console.log("monkey code");  
}


//return для возвращения какого-то значения из функции 
// то, что написано после return , не выводится

let res = calculateSum(calculateSum(10, 10), calculateSum(50, 50));
console.log(`The total result is ${res}`);

function calculateSubstraction(q, h) {
    let substractionResult = q - h;
    console.log(substractionResult);
    return substractionResult;
}

calculateSubstraction(50, 43);

let plusAndMinus = calculateSum(calculateSubstraction(100, 50), calculateSubstraction(75, 50));

/* -------- Function declaration ----------- */

// эта функция сработает, даже если она объявлена позже в том же файле
// javascript просматривает документ два раза. 
divideTwoNumbers(1000, 20);

//задекларирована функция
function divideTwoNumbers(x, y) {
    let divideResult = x / y;
    console.log(divideResult);
}
//вызов задекларированной функции 
divideTwoNumbers(100000, 20);

/* -------- Function expression ----------- */

//функция записывается в переменную 
let calculateMult = function (x, y) { let multiResult = x * y; console.log(multiResult); }
//такие функции могут быть написаны только ПОСЛЕ объявления

calculateMult(10, 5);

/* -------- Объекты  ----------- */

//объекты - способ группировки информации в объект 
//например есть Пётр
// const peterName = "Peter";
// const peterAge = 28;
// const peterJob = "cashier";
// чтобы не делать много отдельных переменных, создаётся одна

// выведет инфу об объекте в консоль

// const codeMonkey = {
//     name: "Coding Monkey",
//     height: "1m",
//     weight: 10,
//     hasTail: true,
//     codeGood: false
// }

// console.log(codeMonkey);


function sayHello(name, age, job) {
    console.log(`Hello, my name is ${name}. I am ${age} years old.
     I work as a ${job}.`);
}

sayHello("Alex", 28, "coder");

//выше - пример работы с функцией
// если работаем с объектом: 
const boy = {
    boyName: "Maxim",
    boyAge: 24,
    boyJob: "carrier"
};

console.log(boy);
//выведет просто распечатку в консоль, техническая
// можно по отдельности обращаться к каждому свойству объекта -> "."
console.log(boy.boyName); // выведет boyName объекта boy 
console.log(boy.boyAge); // выведет boyAge объекта boy
console.log(boy.boyJob); //выведет boyJob объекта boy 

sayHello(boy.boyName, boy.boyAge, boy.boyJob);


const nob = {
    nobRace: "ork",
    nobRangeWeapon: "shoota",
    nobMeleeWeapon: "powerKlaw",
    sayHello: ("green boy", "30", "ork")
}
console.log(nob.nobRace);
console.log(nob.nobRangeWeapon);
console.log(nob);

// this внутри метода объекта ссылается на этот объект

const object = {
    name: "objectName",
    speciality: "testObject",
    sayGoodbye: function () {
        console.log(`This is console goodbye log for ${this.objectName}`)
    }
}
console.log(object);
object.sayGoodbye();

// когда объект совершает какое-то действие - это метод
// функция, записанная в свойства объекта - метод 


/* -------- функция  Конструктор создание объекта----------- */
// capital letter 
// эта функция будет создавать нам объекты 
// вызвать функцию, передать в неё данные и создастся объект 
// с этими данными 

function Person(name, age, spec, city) {
    this.name = name;
    this.age = age;
    this.spec = spec;
    this.city = city;
    this.sayHello = function () {
        console.log(`Привет, моё имя: ${this.name} . Мне целых ${this.age} лет.`);
    }
    //при выполнении этой функции будет возвращён объект,
    //который можно записать в переменную
}

const citizen = new Person("Alexander", 29, "codeMonkey", "Moscow");
// new - для создания нового объекта
console.log(citizen.sayHello());
//теперь при помощи конструктора можно создавать другие объекты 
const villager = new Person("Pavel", 35, "blacksmith", "New Vasyuki");
villager.sayHello();


/*-------------Классы в ES6--------------*/
// смысл как в функции-конструкторе, но другой синтаксис 

class Stranger {
    constructor(name, age, spec, city) {
        this.name = name;
        this.age = age;
        this.spec = spec;
        this.city = city;
    }

    sayHello() {
        console.log(`Привет, моё имя: ${this.name} . Мне целых ${this.age} лет.`);
    }
}

const Gregory = new Stranger("Grigoriy", 28, "worker", "Tbilisi");
// создаём константу Gregory, в которую записываем объект, который будет создан от класса Stranger
console.log(Gregory);
Gregory.sayHello();

const Slava = new Stranger("Slava", 30, "engineer", "Minsk");
Slava.sayHello();