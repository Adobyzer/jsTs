//This is an in-line comment


/* This is for
multi line
comment
*/
console.log("Hello JS")

/*
list of data type : 

undefined
null
boolean
string ex "name"
symbol
bigint
number ex 12 or 1,2
object
*/

//declaration of a variable myName
var myName;

// Declaration
var a;

// Initialisation/Instanciation

a =7;

// Setup
var a;
a = 7;
var b;

// assign value content a to b
b = a 

//initialisation (declaration et instanciation)

var a =9;

//initialisation of two string variable 

var myFirstName = "Adobyzer"

var myLastName = "Adbz"

// variable undefined type if not initialized
var a = 5;
var b = 10;
var c = "I am a";
// Then take data with content on it dynamically

a = a + 1;
b = b + 5;
c = c + " String!";

// Variable declarations in camel case
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Variable assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

//let use "let" doesnt allow repetition of same variable no more var right now ! (if i need it tho)

let catName = "Oliver";
let catSound = "Meow!";

/*const is for constant (ALL CAPS norms) so no changment allow let u can but not overwrite it!
*/
const FCC = "freeCodeCamp"; 
let fact = "is cool!"; 
fact = "is awesome!";
console.log(FCC, fact); 

//now sum will value 20!
var sum = 20 + 0;

//now difference will value 12!
const difference = 45 - 33;

//now multiplicity will value  80!
const product = 8 * 10;

//now quotient will value 2!
const quotient = 66 / 33;

let myVar = 87;

// myVar++ => myVar = myVar+1
myVar++;

let myVars = 11;

// same for myVars-- => myVars = myVars-1
myVars--;

// creating decimal with number type
let myDecimal = 5.7

//change products to make it 5.0
const products = 2.0 * 2.5;

//change quotientz to equal 2.2
const quotientz = 4.4 / 2.0;

//reminder of the quotient ex 11%3 = 2
const remainder = 11%3;

let a = 3;
let b = 17;
let c = 12;

//compound assignment ex :a=a+12 (can be writter a+=12)
a+=12;
b+=9;
c+=7;

//var for letting me call again the variable hehe
var a = 11;
var b = 9;
var c = 3;

// same for substraction ex (a=a-6 => a-=6)
a-=6;
b-=15;
c-=1;

//again var for it!
var a = 5;
var b = 12;
var c = 4.6;

// same for multipliying
a*=5;
b*=3;
c*=10;

//finally for it
var a = 48;
var b = 108;
var c = 33;

// same for division
a/=12;
b/=4;
c/=11;

/*single or double quote for string but for quote in string the /
*/
var myStr = "I am a \"double quoted\" string inside \"double quotes\"."; 

// "" or '' is the same in js or ts but might be useful
const myStrs = '<a href="http://www.example.com" target="_blank">Link</a>/';

/* list of escape caracter to display it properly

Code	Output
\'	single quote
\"	double quote
\\	backslash
\n	newline
\t	tab
\r	carriage return
\b	backspace
\f	form feed

*/

/* Give this preview ez with escape caracter
FirstLine
  SecondLine
ThirdLine
*/
const myStrz = "FirstLine\n\t\\SecondLine\nThirdLine"; 

//concatenate string "+" it will give This is the start. This is the end.
var myStr = "This is the start." + ' This is the end.'; 

//concatenate using plus equal operator += DONT FORGET SPACE IN CODE NO IN IDE
let myStr="This is the first sentence.";
myStr+=" This is the second sentence.";

// Constructing string with variables
const myName = "Adbz";
const myStr = "My name is "+myName+" and I am well!";

//Appending variables to strings
const someAdjective = "noice harsh sometimes but its life saver";
let myStr = "Learning to code is ";

myStr+=someAdjective;


// Setup
let lastNameLength = 0;
var lastName = "Lovelace";

// assign lastNameLength with the attribute length of lastname
lastNameLength = lastName.length;


/* Use Bracket Notation to Find the First Character in a String index of a string variable
*/
let firstLetterOfLastName = "";
const lastName = "Lovelace";

// assigne first character of last name to firstLetterOfit
firstLetterOfLastName = lastName[0];

// single letter cant be modify = string immutability
let myStr = "Jello World";

// solution reassign the variable
myStr = "Hello World";


// Setup
const lastName = "Lovelace";

//find the third character and assign it 0 - 1 - 2 
const thirdLetterOfLastName = lastName[2]; 

// Setup
const lastName = "Lovelace";

// assign to last character 0 - lastName.length-1
const lastLetterOfLastName = lastName[lastName.length-1];


// Setup
const lastName = "Lovelace";

// second to last character
const secondToLastLetterOfLastName = lastName[lastName.length-2];


const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

// It will give The big dog ran quicly
const wordBlanks = "The" +" " + myAdjective + " " +myNoun + " " + myVerb +" " +myAdverb; 


// first step of data structure : array store multiple var
var myArray = ["learning" , 2 , "code in js for understanding basic of TS"];

/* 2D array lets do it nested it will display this
x y
1 2
*/
const myArray = [["x","y"],[1,2]];


const myArray = [50, 60, 70];

/*accesing array using index notation
-Create a variable called myData and set it to equal the first value of myArray using bracket notation.
*/

let myData = myArray[0];

// Setup
const myArray = [18, 64, 99];

// unlike string array are MUTABLE even if declare const
/*
Modify the data stored at index 0 of myArray to a value of 45.
*/
myArray[0] =45;

//multidimensionnal array lets do it !

const myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
  ];
  
  //so now its 3D and myArray[3] [0] = [10,11,12] and myArray[3][2] = 14
  
  /*
  Using bracket notation select an element from myArray such that myData is equal to 8.
  */

  const myDatas = myArray[2][1];

  //append data in array using push method
const myArray = [["John", 23], ["cat", 2]];

//Push ["dog", 3] onto the end of the myArray variable.

myArray.push(["dog",3]);

// Setup
const myArray = [["John", 23], ["cat", 2]];

/*
Use the .pop() function to remove the last item from myArray and assign the popped off value to a new variable, removedFromMyArray.
*/

var removedFromMyArray = myArray.pop();


// Setup
const myArray = [["John", 23], ["dog", 3]];

/*
Use the .shift() function to remove the first item from myArray and assign the "shifted off" value to a new variable, removedFromMyArray.
*/

let removedFromMyArray = myArray.shift();


// Setup
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();

//Add ["Paul", 35] to the beginning of the myArray variable using unshift()

myArray.unshift(["Paul",35]);

//setup
const myList = [];

//There should be at least 5 sub-arrays in the list.

myList.push(["chocoolatteee",10]);
myList.push(["chocoolatteee",10]);
myList.push(["chocoolatteee",10]);
myList.push(["chocoolatteee",10]);
myList.push(["chocoolatteee",10]);


//reusable part called functions

/*
Create a function called reusableFunction which prints the string Hi World to the dev console.
Call the function.
*/

function reusableFunction(){
    console.log("Hi World");
  }
  
  reusableFunction();



  //Passing Values to Functions with Arguments

/*
Create a function called functionWithArgs that accepts two arguments and outputs their sum to the dev console.
Call the function with two numbers as arguments.
*/

//in js no need to specify type of arguments
function functionWithArgs(arg1,arg2){
    console.log(arg1+arg2);
    }
    
    functionWithArgs(2,13);


    //Return a Value from a Function with Return

/*
Create a function timesFive that accepts one argument, multiplies it by 5, and returns the new value.
*/

function timesFive(args1){
    return args1*=5;
    }


    //Global Scope and Functions

/*
Using let or const, declare a global variable named myGlobal outside of any function. Initialize it with a value of 10.

Inside function fun1, assign 5 to oopsGlobal without using the var, let or const keywords.
*/

let myGlobal = 10;

function fun1() {
  oopsGlobal = 5;
}

//output fonction

function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

//Local Scope and Functions

/*
Declare a local variable myVar inside myLocalScope and run the tests.
*/

function myLocalScope() {
  
    let myVar = 2;
      console.log('inside myLocalScope', myVar);
    }
    myLocalScope();
    
    // Run and check the console
    // myVar is not defined outside of myLocalScope
    console.log('outside myLocalScope', myVar);

    //Global vs. Local Scope in Functions

/*
Add a local variable to myOutfit function to override the value of outerWear with the string sweater.
*/

const outerWear = "T-Shirt";

function myOutfit() {
let outerWear ='sweater';
  return outerWear;
}

myOutfit();


// Understanding void fonction
let sum = 0;

function addThree() {
  sum = sum + 3;
}

/*
Create a function addFive without any arguments. This function adds 5 to the sum variable, but its returned value is undefined.
*/

function addFive(){
  sum+=5;
}
addThree();
addFive();