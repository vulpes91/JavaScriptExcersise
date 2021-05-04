// console.log("Hello world!");

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


/* ТИПЫ ДАННЫХ В ПЕРЕМЕННЫХ */

//строки (слова и текст)
const myName = "Alex";
const codingLanguage = "Язык JavaScript";

//числа 
const age = 29;

//логический  true/false 

const isMarried = true;

/* ОПЕРАЦИИ */
console.log("Слава Омниссии!");
//сложение чисел

let x = 10;
let y = 5;
let result = x + y;
console.log(result);
//или 
console.log(x + y);


//сложение строк Конкатенация 

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


/* УСЛОВИЯ */

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
