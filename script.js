/* Use for multi-line comment



//BASICS

console.log('JS is autistic...');//print statement

window.alert("Nigger");//window alert

document.getElementById("H1").textContent = `Hello`;//changing the content of a html element

//one line comment

Use for multi-line comment



//DATA TYPES

//VARIABLES - a container to store data values

// Step 1: Declare a variable
let x;

// Step 2: Assign the variable
x = 4;

// You can also  declare and assign at once using this syntax : let
let y=4;

// Step 3: Access/read the value of the variable
console.log(x);

//Data type is number
console.assertlog(typeof grade)

//STRINGS -  collection of characters enclosed in quotes

let name="John";

//Data type is a string(letters)
console.log(typeof name);

//BOOLENS - conditions, can be true of false

let online = true;
let does_bro_have_a_life = false;

console.log(`bro is online chat ${online}`);
console.log(`is bro a no life ${does_bro_have_a_life}`)

//combing variables, strings and boolens

let name = "Devansh";
let age = 15;
let student = true;

//displaying stuff by editing the html elements
document.getElementById("P1").textContent = `Your name is ${name}`;
document.getElementById("P2").textContent = `You are ${age} years old`;
document.getElementById("P3").textContent = `Enrolled: ${student}`;



//ARITHEMATIC OPERATORS = oprands(values, variables, etc.) 
                          operators( +, -, *, /)


let students = 25;

students = students + 1; //addition
students = students - 1; //subtraction
students = students * 2; //multiplication 
students = students / 2; //divison
students = students % 2; //modulus/remainder
students = students ** 2; //exponention

//or the alternative method can also be used with no need to reassign variables
students += 1; //addition
students -= 1;  //subtraction
students *= 2;  //multiplication
students /= 2;  //division
students %= 2;  //modulus/remainder
students **= 2; //exponention

//increment & decrement operator ++ & --
//to add or subtract one from a variable
students++; //post increment
studnets--; // post decrement

console.log(students);

//OPERATOR PRECEDENCE - the order a complex problem is gonna be solved
// 1. Parathesis () 
// 2. Exponentiation ** 
// 3. Multiplication  * & Division /  &  Modulus %  
// 4. Addition + & Subtraction -

let result = (8+5)*9/2-7%3+6**2;

console.log(result);



//INPUT 

//1. Easy Way - Window Prompt
let username;
username = window.prompt("What's your username?");
console.log(username);


//2. Professional way - HTML textbox
let username;
document.getElementById("mybutton").onclick = function(){
    username = docment.getElementById("mytext").value;
    document.getElementById("myh1").textContent = `Welcome ${username}`;
}



//TYPE CONVERSION = change the datatype of a value to other(strings, numbers, booleans)

let x = "0";
let y = "pizza";
let z = "pizza";

x = Number(x); //its gonna convert it to 0 a number/int
y = String(y); //nothing gonna happen as pizza is already a string
z = Boolean(z); //always gonna be true, if nothing asssigned then false

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);




//CONSTANTS = values that cant be changed once assigned

const pi = 3.14; //use const instead of let to assign a constant, if reassigning is tried it might cause an error
let radius;
let circumference;

radius = window.prompt('Enter the radius: ');
radius = Number(radius);

circumference = 2 * pi * radius;

console.log(circumference);




//MATH = built-in object that provides a collection of properties and functions

let x = 3.21;
let y = 2;
let z;

z = Math.round(x); //rounds up or down to the nearest integer
z = Math.floor(x); //always rounds down
z = Math.ceil(x); // always rounds up
z = Math.trunc(x); //removes the decimal part
z = Math.pow(x, y); //raising x to the power of y
z = Math.sqrt(x); //sqaure root
z = Math.log(x); //natural logarithm
z = Math.sin(x); //sine
z = Math.cos(x); //cosine
z = Math.tan(x); //tangent
z = Math.abs(x); //absolute value
z = Math.sign(x); //the sign of a number + / - / 0
z = Math.max(4,9,-56,7); //returns the largest number
z = Math.min(4,9,-56,7); // returns the smallest number

console.log(Math.PI); //can be used for the exact value of PI
console.log(z);
*/



//IF STATEMENTS = if condition is true execute some code and if not exceute some other code

//integers
let age = 25;

if (age >= 18) {
    console.log("You are old enough to enter this site");
}
else {             //ELSE
    console.log("You must be 18+ to enter this site");
}

//booleans
let istudent = false;

if (istudent){
    console.log("You are a student");
}
else {
    console.log("You are not a student");
}

//nested if statements
let iage = 25;
let hasLicense = true;

if (age >= 16) {
    console.log("You are old enough to drive");
    
    if(hasLicense){
        console.log("You have your license")
    }
    else {
        console.log("You do not have a license yet")
    }
}
else {
    console.log("You must be 16+ to have a license")  
}

let your_age = 101;

if (your_age >= 100) {    //ELSE IF OR ELIF
    console.log("Gramps, did you take your meds?")
}
else if (age == 0){
    console.log("Stop the cap!")
}
if (your_age >= 18) {
    console.log("You are old enough to enter this site");
}
else {
    console.log("You must be 18+ to enter this site");
}
