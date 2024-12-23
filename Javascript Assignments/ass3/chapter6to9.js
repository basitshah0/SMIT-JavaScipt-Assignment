// CHAPTER NO 06 to 09

// Question No 01

//1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:

document.write("<h1> Chapter No 06 to 9 </h1>")
document.write("<h1> Question no 01</h1>")
document.write("<h2> RESULTS</h2>")

var a = 10;

// Display the initial value
document.write("The value of a is: " + a + "<br>");
document.write("------------------------------------<br><br>");

document.write(`The Value of ++a is ${++a} <br> `)
document.write(`Now the Value of ++a is ${a} <br><br>`)

document.write(`The Value of a++ is ${a++} <br> `)
document.write(`Now the Value of a++ is ${a}<br><br> `)

document.write(`The Value of --a is ${--a} <br> `)
document.write(`Now the Value of ++a is ${a}<br><br> `)

document.write(`The Value of a-- is ${a--} <br> `)
document.write(`Now the Value of a-- is ${a}<br><br> `)

//Question no 2

// What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;

document.write("<h1> Question no 02</h1>")
var one = 2
var two = 1
var result = --one - --two + ++two + two--

document.write (`--one is : ${--one} <br>`)
document.write (`--one - --two is : ${--one - --two}<br>`)
document.write (`--one - --two + ++two is : ${--one - --two + ++two}<br>`)
document.write (`--one - --two + ++two + two-- is : ${--one - --two + ++two + two--}<br>`)

document.write("result is " + result)

//Question no 03

// Write a program that takes input a name from user &
// greet the user.

document.write("<h1> Question no 03</h1>")
var userName = prompt("Please enter your name:");

if (userName) {
    alert("Hello, " + userName + "! Welcome to our website.");
} else {
    alert("Hello! Welcome to our website.");
}

document.write ("prompt Is the Answer of Question No 3")

//Question No 05

//Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.

// Prompt the user to enter a number
document.write("<h1> Question no 05</h1>")
var number = prompt("Enter a number to display its multiplication table (default is 5):");

if (!number || isNaN(number)) {
    number = 5;
}

number = Number(number);

document.write("<h1>Multiplication Table of " + number + "</h1>");
document.write(number + " x 1 = " + (number * 1) + "<br>");
document.write(number + " x 2 = " + (number * 2) + "<br>");
document.write(number + " x 3 = " + (number * 3) + "<br>");
document.write(number + " x 4 = " + (number * 4) + "<br>");
document.write(number + " x 5 = " + (number * 5) + "<br>");
document.write(number + " x 6 = " + (number * 6) + "<br>");
document.write(number + " x 7 = " + (number * 7) + "<br>");
document.write(number + " x 8 = " + (number * 8) + "<br>");
document.write(number + " x 9 = " + (number * 9) + "<br>");
document.write(number + " x 10 = " + (number * 10) + "<br>");


//Question No 06

// Take
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)

//a
document.write("<h1> Question no 06</h1>")
var subject1 = prompt("Enter Your First Subject")
var subject2 = prompt("Enter Your Second Subject")
var subject3 = prompt("Enter Your Third Subject")

//b

var totalMarksOfSubject = 100

// c

var obtainMarks1 = prompt("Enter marks you obtained in " + subject1 )

//d

var obtainMarks2 = prompt("Enter marks you obtained in " + subject2 )
var obtainMarks3 = prompt("Enter marks you obtained in " + subject3 )

//e
var totalMarksObtained = Number(obtainMarks1) + Number(obtainMarks2) + Number(obtainMarks3);
var totalMarks = totalMarksOfSubject * 3; 
var obtainPercent = (totalMarksObtained / totalMarks ) * 100 

//output

document.write("<h1>Marks and Percentage</h1>");
document.write("<table border='1' style='border-collapse: collapse; width: 50%;'>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
document.write("<tr><td>" + subject1 + "</td><td>" + totalMarksOfSubject + "</td><td>" + Number(obtainMarks1) + "</td></tr>");
document.write("<tr><td>" + subject2 + "</td><td>" + totalMarksOfSubject + "</td><td>" + Number(obtainMarks2) + "</td></tr>");
document.write("<tr><td>" + subject3 + "</td><td>" + totalMarksOfSubject + "</td><td>" + Number(obtainMarks3) + "</td></tr>");
document.write("<tr><th>Total</th><th>" + totalMarks + "</th><th>" + Number(totalMarksObtained) + "</th></tr>");
document.write("<tr><th>Percentage</th> <td> </td> <td>" + obtainPercent + "</td></tr>");
document.write("</table>");




