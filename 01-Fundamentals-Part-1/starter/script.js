
// VARIABLES AND CONSOLE LOG
//---------------------------------------------------------------------//

/*
Variables cannot start with num

Variables can only contain numbers, letters, _ or $

Variables cannot be called 'new' or 'function',
workaround is _new or $new

Bad practise to call a variable 'name'

Bad practise to start a variable name with a capital

allcaps is used only for constants, e.g. PI = 3.14
*/

let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log('Isaac');

let firstName = 'Hattie';
console.log(firstName)
console.log(firstName)
console.log(firstName)

let PI = 3.14;

// Which of these variables is named more descriptively?

let myFirstJob = 'warehouse'
let myFutureJob = 'programmer'

let job1 = 'warehouse'
let job2 = 'programmer'

console.log(myFirstJob);

// Video assignment 1

console.log('Assignment: ');
let country = 'United Kingdom';
let continent = 'Europe';
let population = '68.35m';

console.log(country);
console.log(continent);
console.log(population);



// DATA TYPES
//---------------------------------------------------------------------//
/*
Primitive data types:
number
string
boolean
undefined - value of a variable not yet defined
e.g. let empty;
null - also means empty value
symbol - a value that cannot be changed (not useful to us)
bigInt - number too large to be represented by num type
*/

let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);
console.log(typeof 23);



// LET CONST AND VAR
//---------------------------------------------------------------------//
let age = 30;
age = 31;
// variables can be reassgined or 'mutated'
// we will use let to define a variable if we want to mutate it

const birthYear = 1991;
// const variables are IMMUTABLE
// const must have a initial value, cannot be const birthYear;

// Good practise to use const majority of the time

// ALWAYS declare variable properly, dont do it python way (count = 0;)



// STRINGS AND TEMPLATE LITERALS
//---------------------------------------------------------------------//
console.log("I'm " + firstName + " and I blah blah aoienrbiunae")
// this is long and rubbish
// js version of f string is ${}
console.log(`I'm ${firstName} and I am ${age} y/o`)
// Must use `` back ticks
// Can use back ticks for all strings

// Back ticks can also be used to create a new line in a string (\n)
console.log(`String
ON
Several
LINES`)



// IF ELSE STATEMENTS
//---------------------------------------------------------------------//
// Driving test age checker mini program
const age2 = 15;

if(age2 >= 18) {
      console.log(`Congrats! You are old enough! 🚗`);
} else {
      const yearsLeft = 18 - age2
      console.log(`You have ${yearsLeft} years left :(`)
}



// TYPE CONVERSION AND COERCION
//---------------------------------------------------------------------//
// Type conversion - when the user purposefully changes the type themselves

const inputYear = '1991'
// if we want to do calculations with this string, we must convert to int
// inputYear + 10 = 199110

console.log(Number(inputYear))
// Works just like a function

console.log(String(9))
// Same thing for number

//---------------------------------------------------------------------//
// Type coercion - JS automatically converts values 
console.log('I am ' + 23 + ' years old')
// JS converts 23 to string, so it is printed as one string

console.log('23' - '10' - 3) // = 10
// Coercion works with minus

console.log('23' + '10' + 3) // = 23103
// However does NOT work with plus, as plus has another use in concatination

// Coercion also works with * and /, as them operators have no other uses



// TRUTHY AND FALSY VALUES
//---------------------------------------------------------------------//

// 5 FALSY values: 0, undefined, '', null, NaN
// A FALSY value is a value that returns false when converted to a boolean

const money = 0;
if (money){
      console.log('Well done')
} else{
      console.log('Broke')
}

// Can also use to check if a var is defined

let height;
if (height){
      console.log(`height is defined`);
} else {
      console.log(`height is undefined`);
}



// EQUALITY OPERATORS == vs ===
//---------------------------------------------------------------------//

const age3 = '18';
if (age3 === 18) console.log('You just became adult') // <- this is false

// === is a strict equality op whereas == is a loose equality op
// == does type coercion

const age4 = '18';
if (age4 == 18) console.log('You just became adult');

// Best practise, use === and convert manually



// PROMPTS - EQUALITY OPERATORS cont.
//---------------------------------------------------------------------//

// prompt() can be used to get a value from a web page (js verion of input)

/*
const favouriteNum = prompt("What's your favourite number?");
console.log(favouriteNum);
console.log(typeof favouriteNum);

if (favouriteNum == 23) {
      console.log("mine is also 23")
}
This works because == is loose operator, however never use loose
so we must convert
*/

const favouriteNum = Number(prompt("What's your favourite number?"));
console.log(favouriteNum);
console.log(typeof favouriteNum);

if (favouriteNum === 23) {
      console.log("nice mine is also 23")
} else if (favouriteNum === 7) {
      console.log("7 is my second favourite")
} else {
      console.log("I hate that number.")
}

// else if used, if first line is not true, do not jump straight
// to ese, instead check another condition

if (favouriteNum !== 23) {
      console.log('Why not 23.')
}



// LOGICAL OPERATORS
//---------------------------------------------------------------------//

const hasDriversLicense = false
const hasGoodVision = true

console.log(hasDriversLicense && hasGoodVision);

// && = and
// || = or
// ! = not

const canDrive = hasDriversLicense && hasGoodVision;

if (canDrive) {
      console.log('You can drive')
} else if (!hasDriversLicense) {
      console.log('You need a license')
} else if (!hasGoodVision) {
      console.log('You need glasses')
}



// SWITCH STATEMENTS
//---------------------------------------------------------------------//

const day = 'monday';

switch(day) {
      case 'monday':
            console.log('Gym');
            console.log('Golf');
            break;
      case 'tuesday':
            console.log('Biking');
            break;
      case 'wednesday':
      case 'thursday':
            console.log('Camping');
            break;
      case 'friday':
      case 'saturday':
      case 'sunday':
            console.log('Caravan');
            break;
      default:
            console.log('Invalid day')

}



// STATEMENTS vs EXPRESSIONS
//---------------------------------------------------------------------//

// an expression produces a value - 3 + 4 is an expression, boolenas aswell

// statements are like sentences - if statements

/*
if (23 > 10) {                      <--- EXP because returns True
      const str = '23 bigger';      <--- str  is EXP returns '23...'
}                                   <--- whole thing is a statement
*/

// ONLY EXPRESSIONS can go in template literals
// this means we CANNOT put if statements in template literal



// CONDITIONAL OPERATOR
//---------------------------------------------------------------------//

// Allows us to write an if else statement in one line

const age5 = 12;
/*
age5 >= 18 ? console.log ('I love beer'):
console.log('I like to drink milk');
*/

const drinkChoice = age5 >= 18 ? 'beer' : 'milk';

// We can use conditional operators in template literals
// this gives us a way around putting if statements in

console.log(`My mode of transport is ${age5 >= 18 ? 'car' : 'bike'}`)  


