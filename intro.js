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

var a = 3;
var b = 17;
var c = 12;

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


// Assignment with a Returned Value
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

processed = processArg(7);


//file fifo
function nextInLine(arr, item) {

  /*
  Add the number to the end of the array, then remove the first element of the array not the last AHAHAH so no pop.

The nextInLine function should then return the element that was removed.

*/

arr.push(item);

item = arr.shift();

  return item;
}

// Setup
let testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));


function welcomeToBooleans() {
  // return true instead of false by default

  return true; // Change this line

}

// == (test value) but === (test type variable)

/*
Add the equality operator to the indicated line so that the function will return the string Equal when val is equivalent to 12.
*/

function testEqual(val) {
  if (val == 12) { 
    return "Equal";
  }
  return "Not Equal";
}

testEqual(10);


// === strict equality doesnt do the convert of type so must be same value and same type

/*
Use the strict equality operator in the if statement so the function will return the string Equal when val is strictly equal to 7.
*/

function testStrict(val) {
  if (val===7) { 
    return "Equal";
  }
  return "Not Equal";
}

testStrict(10);

// to check the type of it use the "typeof" operator

/*
The compareEquality function in the editor compares two values using the equality operator. Modify the function so that it returns the string Equal only when the values are strictly equal.
*/

function compareEquality(a, b) {
  if (a === b) {
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10");

// Comparison with the Inequality Operator

/*Add the inequality operator != in the if statement so that the function will return the string Not Equal when val is not equivalent to 99.
*/

function testNotEqual(val) {
  if (val!=99) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10);


// Comparison with the Strict Inequality Operator (!==)

function testStrictNotEqual(val) {
  if (val!==17) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10);


//Comparison with the Greater Than Operator >

/*Add the greater than operator to the indicated lines so that the return statements make sense. according to return
*/
function testGreaterThan(val) {
  if (val>100) {  
    return "Over 100";
  }

  if (val>10) { 
    return "Over 10";
  }

  return "10 or Under";
}

testGreaterThan(10);


//Comparison with the Greater Than Or Equal To Operator >=

function testGreaterOrEqual(val) {
  if (val>=20) {  // Change this line
    return "20 or Over";
  }

  if (val>=10) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

testGreaterOrEqual(10);


//Comparison with the Less Than Operator

function testLessThan(val) {
  if (val<25) {  // Change this line
    return "Under 25";
  }

  if (val<55) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

testLessThan(10);


//Comparison with the Less Than Or Equal To Operator
function testLessOrEqual(val) {
  if (val<=12) {  // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val<=24) {  // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

testLessOrEqual(10);

//Comparisons with the Logical And Operator &&

/*
Replace the two if statements with one statement, using the && operator, which will return the string Yes if val is less than or equal to 50 and greater than or equal to 25. Otherwise, will return the string No.
*/
function testLogicalAnd(val) {
  
  if(val<=50 && val>=25){
    return "Yes"
  }

  return "No";
}

testLogicalAnd(10);


//Comparisons with the Logical Or Operator

/*
Combine the two if statements into one statement which returns the string Outside if val is not between 10 and 20, inclusive. Otherwise, return the string Inside.
*/
function testLogicalOr(val) {

  if(val<10 || val>20){
    return "Outside";
  }
  
  
    return "Inside";
  }
  
  testLogicalOr(15);


  //Introducing Else Statements

//Combine the if statements into a single if/else statement.

function testElse(val) {
  let result = "";
  

  if (val > 5) {
    result = "Bigger than 5";
  }

  else{
    result = "5 or Smaller";
  }

  return result;
}

testElse(4);


//Introducing Else If Statements
//Convert the logic to use else if statements.
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  }

  else if (val < 5) {
    return "Smaller than 5";
  }

  else {
    return "Between 5 and 10";
  }
  
}

testElseIf(7);


//logic from up to down so watch out
//Change the order of logic in the function so that it will return the correct statements in all cases.

function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

orderMyLogic(7);


/*
Write chained if/else if statements to fulfill the following conditions:

num < 5 - return Tiny
num < 10 - return Small
num < 15 - return Medium
num < 20 - return Large
num >= 20 - return Huge
*/

function testSize(num) {
  if(num<5){
    return "Tiny"
  }
  else if(num<10){
    return "Small"
  }
  else if(num<15){
    return "Medium"
  }
  else if(num<20){
    return "Large"
  }
  else{
    return "Huge"
  }
 }
 
 testSize(7);



 const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

/*create this logic :
Strokes	Return
1	"Hole-in-one!"
<= par - 2	"Eagle"
par - 1	"Birdie"
par	"Par"
par + 1	"Bogey"
par + 2	"Double Bogey"
>= par + 3	"Go Home!"
*/
function golfScore(par, strokes) {
  if(strokes == 1){
    return names[0];
  }
  else if(strokes <= par-2){
    return names[1];
  }
  else if(strokes == par-1){
    return names[2];
  }
  else if(strokes == par){
    return names[3];
  }
  else if(strokes == par+1){
    return names[4];
  }
  else if(strokes == par+2){
    return names[5];
  }
  else{
    return names[6];
  }

}

golfScore(5, 4);

//selecting from Many Options with Switch Statements

/*
Write a switch statement which tests val and sets answer for the following conditions:
1 - alpha
2 - beta
3 - gamma
4 - delta
*/

function caseInSwitch(val) {
  let answer = "";
switch(val){
  case 1: 
  answer ="alpha";
  break;

  case 2:
  answer ="beta";
  break;

  case 3:
  answer ="gamma";
  break;

  case 4:
  answer ="delta";
  break;
}
return answer;
}

caseInSwitch(1);


//add default option to switch statement
/*
a - apple
b - bird
c - cat
default - stuff
*/

function switchOfStuff(val) {
  let answer = "";
  switch(val){
    case "a" : answer = "apple";
    break;

    case "b" : answer = "bird";
    break;

    case "c" : answer = "cat";
    break;

    default : answer = "stuff";
  }
  
  return answer;
}

switchOfStuff(1);


//use of break line

/*
Write a switch statement to set answer for the following ranges:
1-3 - Low
4-6 - Mid
7-9 - High
*/

function sequentialSizes(val) {
  let answer = "";

  switch(val){
    case 1:
    case 2:
    case 3: answer="Low";
    break;
    case 4:
    case 5:
    case 6: answer ="Mid";
    break;
    case 7:
    case 8:
    case 9: answer ="High";
  }
 
  return answer;
}

sequentialSizes(1);


//Replacing If Else Chains with Switch to code redability

function chainToSwitch(val) {
  let answer = "";
  // Only change code below this line

switch(val){
  case "bob" :  answer = "Marley";
  break;
  case 42 : answer = "The Answer";
  break;
  case 1 : answer ="There is no #1";
  break;
  case 99 : answer = "Missed me by this much!";
  break;
  case 7: answer ="Ate Nine"; 
}

  return answer;
}

chainToSwitch(7);


//simplify like we know boolean value and return will be either true or false
function isLess(a, b) {
  
  // Only change code below this line
  return (a < b);
  // Only change code above this line
}

console.log(isLess(10, 15));


// function exit immediately after a return

/*
Modify the function abTest so that if a or b are less than 0 the function will immediately exit with a value of undefined.
*/

function abTest(a, b) {

  if(a<0 || b<0){
    return undefined;
  }
  
    
  
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
  }
  
  console.log(abTest(2,2));


  let count = 0;

function cc(card) {
  
  switch(card){
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    count++;
    break;

    case 7:
    case 8:
    case 9:
    count+=0;
    break;

    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
    count--;
    break;
  }

  if(count>0){
    return count + " Bet";
  }
  else if(count <=0){
    return count + " Hold";
  }

}

cc(2); cc(3); cc(7); cc('K'); cc('A');

//now time to enter javas script object

//array is object and they have properties and method such as object

/*
Make an object that represents a dog called myDog which contains the properties name (a string), legs, tails and friends.
*/

const myDog = {
  "name" : "REX",
  "legs" : 4,
  "tails" : 1,
  "friends" : ["Marco" ,"Polo"]
 };


 // accesing object properties or method with dot or [] notation

const testObjz = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};


const hatValue = testObj.hat;    
const shirtValue = testObj.shirt;   

console.log(hatValue);
console.log(shirtValue);


// also the same as the .notation with the bracket notation

/*
Read the values of the properties an entree and the drink of testObj using bracket notation and assign them to entreeValue and drinkValue respectively.
*/

const testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};


const entreeValue = testObj["an entree"];   
const drinkValue =  testObj["the drink"];    


// key value method
const testObjx = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

/*
Set the playerNumber variable to 16. Then, use the variable to look up the player's name and assign it to player.
*/

const playerNumber = 16;  
const player = testObj[playerNumber];  

// Updating Object Properties since object is mutable with . or []
const myDogs = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

/*
Update the myDog object's name property. Let's change her name from Coder to Happy Coder. You can use either dot or bracket notation.
*/

myDog.name = "Happy Coder";

//also true with myDog["name"] = "Happy Coder";

//add properties to object in js/ts
const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

/*
Add a bark property to myDog and set it to a dog sound, such as "woof". You may use either dot or bracket notation.
*/

myDog.bark ="woof"

//also true myDog["bark"] ="woof";

// Delete properties from a object
const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};

//Delete the tails property from myDog. You may use either dot or bracket notation.

delete myDog["tails"];

//also the same as delete myDog.tails;


// Using objects for lookups
function phoneticLookup(val) {
  let result = "";

/*
Convert the switch statement into an object called lookup. Use it to look up val and assign the associated string to the result variable.
*/

const lookup = {
  "alpha" : "Adams",
  "bravo" : "Boston",
  "charlie" : "Chicago",
  "delta" : "Denver",
  "echo" : "Easy",
  "foxtrot" : "Frank"
}
 
  result = lookup[val];

  return result;
}

console.log(phoneticLookup("charlie"));


//testing if object contains properties with the method hasOwnProperty(prop) and return boolean value
/*
Modify the function checkObj to test if the object passed to the function parameter obj contains the specific property passed to the function parameter checkProp. If the property passed to checkProp is found on obj, return that property's value. If not, return Not Found.
*/

function checkObj(obj, checkProp) {

  if(obj.hasOwnProperty(checkProp)){
    return obj[checkProp];
  }
    else{
      return "Not Found";
    }
  }
  
  console.log(checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift"));


  //Manipulating Complex Objects

/*
Add a new album to the myMusic array. Add artist and title strings, release_year number, and a formats array of strings.
*/
const myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },
  {
    "artist" :"Bill",
    "title" : "Help me in Complex world",
    "release_year" : 2023,
    "formats" :["mp4", 'mp3' ,'ova']
  }
];


//Accesing nested object easy

/*
Access the myStorage object and assign the contents of the glove box property to the gloveBoxContents variable. Use dot notation for all properties where possible, otherwise use bracket notation.
*/

const myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

const gloveBoxContents = myStorage.car.inside["glove box"];



console.log(gloveBoxContents);



//accesing nested arrays

/*
Using dot and bracket notation, set the variable secondTree to the second item in the trees list from the myPlants object.
*/

const myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

const secondTree = myPlants[1].list[1];
//verification

console.log(myPlants[1].list[1]);