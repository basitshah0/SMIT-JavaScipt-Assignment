// Question no 01
// Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).


var char = prompt("Enter a single character:");

// Check if the input is valid (only one character)
if (char.length !== 1) {
    alert("Please enter only a single character.");
} 
else {
    
    var asciiCode = char.charCodeAt(0); // Get the ASCII code of the character

    if (asciiCode >= 48 && asciiCode <= 57) {
        alert("The given input is a number.");
    } 
    else if (asciiCode >= 65 && asciiCode <= 90) {
        alert("The given input is an uppercase letter.");
    } 
    else if (asciiCode >= 97 && asciiCode <= 122) {
        alert("The given input is a lowercase letter.");
    } 
    else {
        alert("The given input is neither a number nor a letter.");
    }
}


// Question no 02

// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.

var num1 = parseInt(prompt("Enter the first integer:"));
var num2 = parseInt(prompt("Enter the second integer:"));

if (num1 > num2) {
    alert("The larger number is: " + num1);
} 
else if (num2 > num1) {
    alert("The larger number is: " + num2);
} 
else {
    alert("Both numbers are equal.");
}


// Question no 03

// 3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.

var number = parseFloat(prompt("Enter a number:"));

if (number > 0) {
    alert("The number is positive.");
} 
else if (number < 0) {
    alert("The number is negative.");
} 
else if (number === 0) {
    alert("The number is zero.");
} 
else {
    alert("Invalid input. Please enter a valid number.");
}

// Question no 04

// 4. Write a program that takes a character (i.e. string of
//     length 1) and returns true if it is a vowel, false otherwise

 var char = prompt("Enter a single character:");

 if (char.length !== 1) {
     alert("Please enter only one character.");
 } 
 else {

    char = char.toLowerCase();

     var isVowel = (char === "a" || char === "e" || char === "i" || char === "o" || char === "u");

     alert("Is the character a vowel? " + isVowel);
 }


 // Question no 5

//  5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.

var correctPassword = "12345";

var userPassword = prompt("Enter your password:");

// Validate the entered password
if (!userPassword) {
    alert("Please enter your password.");
} 
else if (userPassword === correctPassword) {

    alert("Correct! The password you entered matches the original password.");
} 
else {
    alert("Incorrect password.");
}


// Question no 06

// 6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }

var greeting;
var hour = 13;

if (hour < 18) {
    greeting = "Good day";
} 
else {
    greeting = "Good evening";
}

console.log(greeting);

// Question no 07

// 7. Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements

var time = parseInt(prompt("Enter the time in 24-hour clock format (e.g., 1900 for 7 PM):"), 10);

if (time >= 0 && time < 1200) {
    alert("Good morning!");
} 
else if (time >= 1200 && time < 1700) {
    alert("Good afternoon!");
} 
else if (time >= 1700 && time < 2100) {
    alert("Good evening!");
} 
else if (time >= 2100 && time <= 2359) {
    alert("Good night!");
} 
else {
    alert("Invalid time entered. Please enter a value between 0000 and 2359.");
}

// End chapter 


