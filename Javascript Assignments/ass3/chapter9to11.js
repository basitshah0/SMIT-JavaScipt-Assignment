//Chapter No 9 to 11

// Question no 01

//1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”

document.write("<h1>Chapter no 09 to 11</h1>")
document.write("<h1>Question no 01</h1>")

var city = prompt("Enter Your City Name")

if (city.toLowerCase() == "karachi") {
    document.write("Welcome to city of lights")
}
if(city.toLowerCase() == city ) {
    document.write("Welcome to " + city)
}

// Question no 02

//2. Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the  user is female, give the message: Good Morning Ma’am. 
document.write("<h1>Question no 02</h1>")
var gender = prompt("Please enter your gender (male or female):")

// Check the gender and display the appropriate message
if (gender.toLowerCase() === "male") {
    document.write("Good Morning Sir.");
} else if (gender.toLowerCase() === "female") {
    document.write("Good Morning Ma’am.");
} else {
    document.write("Invalid input. Please enter 'male' or 'female'.");
}

// Question no 03

// Write a program to take input color of road traffic signal  from the user & show the message according to this table: 
// Signal color Message 
// Red Must Stop 
// Yellow Ready to move 
// Green Move now 
document.write("<h1>Question no 03</h1>")

var signalColor = prompt("Enter the traffic signal color (Red, Yellow, or Green):");

signalColor = signalColor.toLowerCase();

if (signalColor === "red") {
    document.write("Must Stop");
} 
if (signalColor === "yellow") {
    document.write("Ready to move");
} 
if (signalColor === "green") {
    document.write("Move now");
}
else {
    document.write("Invalid input. Please enter 'Red', 'Yellow', or 'Green'.");
}


// Question no 4

// 4. Write a program to take input remaining fuel in car (in  litres) from user. If the current fuel is less than 0.25litres,  show the message “Please refill the fuel in your car” 

document.write("<h1>Question no 04</h1>")
var remainingFuel = parseFloat(prompt("Enter the remaining fuel in your car (in liters):"));

if (remainingFuel < 0.25) {
    document.write("Please refill the fuel in your car.");
} else {
    document.write("You have enough fuel for now.");
}

// question no 05

// 5. Run this script, & check whether alert message would be displayed or not. Record the outputs. 
document.write("<h1>Question no 05</h1>")
var a = 4; 
if (++a === 5){ 
alert("given condition for variable a is true"); 
}

 var b = 82; 
if (b++ === 83){ 
alert("given condition for variable b is true"); } 
 var c = 12; 
if (c++ === 13){ 
alert("condition 1 is true"); 
} 
if (c === 13){ 
alert("condition 2 is true"); 
} 
if (++c < 14){ 
alert("condition 3 is true"); 
} 
if(c === 14){ 
alert("condition 4 is true"); 
} 
 var materialCost = 20000; 
var laborCost = 2000; 
var totalCost = materialCost + laborCost; if (totalCost === laborCost + materialCost){ alert("The cost equals"); 
} 
if (true){ 
alert("True"); 
} 
if (false){ 
alert("False"); 
}

if("car" < "cat"){ 
alert("car is smaller than cat"); } 

// Question no 6

//6. Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting percentage on your page. Take percentage & compute  grade as per following table: 
// Show the total marks, marks obtained, percentage, grade & remarks like:

let marksSubject1 = parseFloat(prompt("Enter marks obtained in Subject 1:"));
let marksSubject2 = parseFloat(prompt("Enter marks obtained in Subject 2:"));
let marksSubject3 = parseFloat(prompt("Enter marks obtained in Subject 3:"));
let totalMarks = parseFloat(prompt("Enter total marks:"));

let marksObtained = marksSubject1 + marksSubject2 + marksSubject3;
let percentage = (marksObtained / totalMarks) * 100;


let grade, remarks;

if (percentage >= 80) {
    grade = "A+";
    remarks = "Excellent";
} if(percentage >= 70) {
    grade = "A";
    remarks = "Good";
} if (percentage >= 60) {
    grade = "B";
    remarks = "You need to improve";
} if (percentage >= 50) {
    grade = "C";
    remarks = "Fair";
} else {
    grade = "F";
    remarks = "Fail. Work hard next time";
}

document.write("<h1>Marks Sheet</h1>");
document.write("<p>Total Marks: " + totalMarks + "</p>");
document.write("<p>Marks Obtained: " + marksObtained + "</p>");
document.write("<p>Percentage: " + percentage.toFixed(2) + "%</p>");
document.write("<p>Grade: " + grade + "</p>");
document.write("<p>Remarks: " + remarks + "</p>");

// Question no 07

// // Guess game: 
// Store a secret number (ranging from 1 to 10) in a variable. Prompt user to guess the secret number. 
// a. If user guesses the same number, show “Bingo! Correct answer”. 
// b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”. 

var secretNumber = 7; 

var userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));

if (userGuess === secretNumber) {
    document.write("Bingo! Correct answer.");
} 
if (userGuess + 1 === secretNumber) {
    document.write("Close enough to the correct answer.");
} 
else {
    document.write("Sorry, wrong guess. The secret number was " + secretNumber + ".");
}

// Question no 08

// 8. Write a program to check whether the given number is divisible by 3. Show the message to the user if the number  is divisible by 3. 

var number = parseInt(prompt("Enter a number to check if it is divisible by 3:"));

// Check if the number is divisible by 3
if (number % 3 === 0) {
    document.write("The number " + number + " is divisible by 3.");
} else {
    document.write("The number " + number + " is not divisible by 3.");
}

// Question no 09

//9. Write a program that checks whether the given input is an even number or an odd number. 

var number = parseInt(prompt("Enter a number to check if it is even or odd:"));

if (number % 2 === 0) {
    document.write("The number " + number + " is even.");
} else {
    document.write("The number " + number + " is odd.");
}

// Question no 10

// 10. Write a program that takes temperature as input and  shows a message based on following criteria 
// a. T > 40 then “It is too hot outside.” 
// b. T > 30 then “The Weather today is Normal.” c. T > 20 then “Today’s Weather is cool.” 
// d. T > 10 then “OMG! Today’s weather is so Cool.”

var temperature = parseFloat(prompt("Enter the temperature:"));

if (temperature > 40) {
    document.write("It is too hot outside.");
} 
if (temperature > 30) {
    document.write("The Weather today is Normal.");
} 
if (temperature > 20) {
    document.write("Today’s Weather is cool.");
}
if (temperature > 10) {
    document.write("OMG! Today’s weather is so Cool.");
} 
else {
    document.write("It’s very cold outside.")
}


// Quwation no 11

//11. Write a program to create a calculator for +,-,*, / & %  using if statements. Take the following input: 
// a. First number 
// b. Second number 
// c. Operation (+, -, *, /, %) 
// Compute & show the calculated result to user.

var firstNumber = parseFloat(prompt("Enter the first number:"));
var secondNumber = parseFloat(prompt("Enter the second number:"));
var operation = prompt("Enter the operation (+, -, *, /, %):");
var result;

if (operation === "+") {
    result = firstNumber + secondNumber;
}

if (operation === "-") {
    result = firstNumber - secondNumber;
}

if (operation === "*") {
    result = firstNumber * secondNumber;
}

if (operation === "/") {
    if (secondNumber !== 0) {
        result = firstNumber / secondNumber;
    } else {
        result = "Error: Division by zero is not allowed.";
    }
}

if (operation === "%") {
    result = firstNumber % secondNumber;
}

if (operation !== "+" && operation !== "-" && operation !== "*" && operation !== "/" && operation !== "%") {
    result = "Invalid operation. Please enter +, -, *, /, or %.";
}

document.write("Result: " + result);



