// Chapter no 05

// Question no 01

// 1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.

document.write("<h1>Chapter no 05</h1>")
document.write("<h1> Question no 01 </h1>")
//addition

var num1 = 10
var num2 = 5

var result = num1 + num2

document.write(`Addition is :${result} </br>`)

// 2. Repeat task1 for subtraction, multiplication, division & modulus.


//subtraction
document.write("<h1> Question no 02 </h1>")
var num3 = 10
var num4 = 5

var result = num3 - num4

document.write(`Subtraction is :${result} </br>`)

// multiplication

var num5 = 10
var num6 = 5

var result = num5 * num6

document.write(`Multiplication is :${result} </br>`)

//division 

var num7 = 10
var num8 = 5

var result = num7 / num8

document.write(`Division is :${result} </br>`)

//modulus

var num9 = 10
var num10 = 5

var result = num9 % num10

document.write(`Reminder is :${result} </br>`)

// 3. Do the following using JS Mathematic Expressions


// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value
// after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value
// by 3.
// l. Output : “The remainder is : 0”.

//Answer :-

//a
var myVar;

//b
myVar = 10
document.write("<h1> Question no 03 </h1>")
document.write(`Value after variable declaration is: ${myVar} </br>`)

//c
myVar = 15

//d
document.write(`Initial value: ${myVar}<br>`)

//e
myVar++

//f
document.write(`Value after increment: ${myVar}<br>`)

//g
var my_new_var = myVar + 7

//h
document.write(`Value after addition: ${my_new_var}<br>`)

//i
my_new_var--

//j
document.write(`Value after decrement: ${my_new_var}<br>`)

//k
var my_new_var1 = my_new_var / 3

//l
document.write(`The reminder is: ${my_new_var1}`)

// Question no 4

//4. Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets
// to a movie. Example output:

//Answer :-
document.write("<h1> Question no 04 </h1>")

var ticketCost = 600
var quantity = 5

document.write(`Total cost to buy ${quantity} tickets to a movie is ${ticketCost * quantity}`)

//Question  no 05

// 5. Write a script to display multiplication table of any
// number in your browser. E.g

var tableOf = 5

document.write("<h1> Question no 05 </h1>")
document.write(`${tableOf} X 1 = ${tableOf * 1} <br>` )
document.write(`${tableOf} X 2 = ${tableOf * 2} <br>` )
document.write(`${tableOf} X 3 = ${tableOf * 3} <br>` )
document.write(`${tableOf} X 4 = ${tableOf * 4} <br>` )
document.write(`${tableOf} X 5 = ${tableOf * 5} <br>` )
document.write(`${tableOf} X 6 = ${tableOf * 6} <br>` )
document.write(`${tableOf} X 7 = ${tableOf * 7} <br>` )
document.write(`${tableOf} X 8 = ${tableOf * 8} <br>` )
document.write(`${tableOf} X 9 = ${tableOf * 9} <br>` )
document.write(`${tableOf} X 10 = ${tableOf * 10} <br>` )

//Question no 06

// 6. The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.

document.write("<h1> Question no 06 </h1>")

 // a
 var celsiusTemp = 25;

 // b
 var fahrenheitFromCelsius = (celsiusTemp * 9/5) + 32;

 // Output the result
 document.write(`${celsiusTemp} °C is ${fahrenheitFromCelsius} °F<br>`);

 // c
 var fahrenheitTemp = 70;

 // d
 var celsiusFromFahrenheit = (fahrenheitTemp - 32) * 5/9;

 // Output the result
 document.write(`${fahrenheitTemp} °F is  ${celsiusFromFahrenheit}°C`);

 //Question no 7

//  7. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges

// Compute the total cost & show the receipt in your browser.

document.write("<h1> Question no 07 </h1>")
document.write("<h1> Shopping Cart </h1>")

var item1 = 500
var item2 = 1000
var quantityOfItem1 = 3
var quantityOfItem2 = 6
var Shipping = 200

document.write(`Price of item 1 is ${item1} <br>`)
document.write(`Quantity of item 1 is ${quantityOfItem1}<br>`)
document.write(`Price of item 2 is ${item2}<br>`)
document.write(`Quantity of item 2 is ${quantityOfItem2}<br>`)
document.write(`Shipping Charges ${Shipping}<br>`)
document.write(`Total Cost Of Your Order is ${item1 * quantityOfItem1 + item2 *quantityOfItem2 + Shipping}<br>`)

// Question No 08

// 8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser

// Answer :-

document.write("<h1> Question no 08 </h1>")
document.write("<h1> Marksheet</h1>")

var totalMarks = 90
var marksObtained = 83.5

document.write(`Total Marks : ${totalMarks} <br>`)
document.write(`Total Obtained Marks : ${marksObtained} <br>`)
document.write(`Percentage: ${marksObtained / totalMarks * 100} <br>`)

// Question No 09

//Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)

document.write("<h1> Question no 09 </h1>")
document.write("<h1> Currency In PKR </h1>")
var USD = 104.80
var SaudiRiyal = 28
 var totalCurrency = USD * 10 + SaudiRiyal * 25
 document.write("Total Currency in PKR is" + totalCurrency )

 // Question no 10

// 10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

document.write("<h1> Question no 10</h1>")

var newNum = 10

document.write("Output is :" + (newNum + 5) * 10 / 2 )

// Question no 11

// The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.

// Output them to the screen like so: “They are either NN or NN
// years old”.

document.write("<h1> Question no 11</h1>")

var currentYear = 2024
var birthYear = 2004

var age = currentYear - birthYear //if birthday passed 

var age1 = age - 1             // if birthday not passed

document.write(`Current Year : ${currentYear} <br>`)
document.write(`Birth Year : ${birthYear}<br>`)
document.write(`They are either ${age} or ${age1} years old`)

// Question no 12

// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

document.write("<h1> Question no 12</h1>")
document.write("<h1> The Geometrizer:</h1>")

//a 
var radius = 20
var pi = 3.142

//b
var circumference = 2 * pi * radius

document.write(`The Circumference of a Circle is : ${circumference}<br>`)

//c
var area = pi * radius**2

document.write(`The area of Circle is : ${area}`)

// Question No 13

// The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need
// NNNN to last you until the ripe old age of NN”.

document.write("<h1> Question no 13</h1>")
document.write("<h1> Lifetime Supply Calculator</h1>")

//a
var favouriteSnack = "Lays"
//b
var currentAge = 20
//c
var maxAge = 45
//d
var estAmount = 3
//e
var totalAmount = (maxAge - currentAge) * 365 * estAmount


//output the results
document.write(`Favourite Snack : ${favouriteSnack}<br>`)
document.write(`Current Age : ${currentAge}<br>`)
document.write(`Estimated by MAX Age : ${maxAge}<br>`)
document.write(`Amount of Snacks Per Day : ${estAmount}<br>`)

document.write(`You will need ${totalAmount} to last you until the ripe old age of ${maxAge}`)


// CHAPTER NO 06

// Question No 01

//1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:

document.write("<h1> Chapter No 06 </h1>")
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















