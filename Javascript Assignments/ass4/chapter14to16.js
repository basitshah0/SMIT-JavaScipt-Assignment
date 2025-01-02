// Question no 01

// 1. Declare an empty array using JS literal notation to store
// student names in future.

var studentNames = []

// Question no 02

// 2. Declare an empty array using JS object notation to store
// student names in future.

let studentNames1 = {};

// Question no 03

// 3. Declare and initialize a strings array.

studentNames = ["John", "Jane", "Alice", "Bob"];

// Question no 04

//4. Declare and initialize a numbers array.

let numbers = [10, 20, 30, 40, 50];

// Question no 05

// 5. Declare and initialize a boolean array.

let booleanArray = [true, false, true, false];

// Question no 06

// 6. Declare and initialize a mixed array.

let mixedArray = ["John", 25, true, 45.7, false];

// Question no 07

// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:

let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

document.write("<h1>Education Qualifications in Pakistan:</h1>");
document.write("<ul>");
document.write("<li>" + qualifications[0] + "</li>");
document.write("<li>" + qualifications[1] + "</li>");
document.write("<li>" + qualifications[2] + "</li>");
document.write("<li>" + qualifications[3] + "</li>");
document.write("<li>" + qualifications[4] + "</li>");
document.write("<li>" + qualifications[5] + "</li>");
document.write("<li>" + qualifications[6] + "</li>");
document.write("<li>" + qualifications[7] + "</li>");
document.write("</ul>");

// Question no 08

// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:

var studentNames = ["Basit", "Amir", "Umer"];
var studentScores = [400, 450, 420];

let totalMarks = 500;

document.write("<h1>Student Scores and Percentages:</h1>");

let percentageBasit = (studentScores[0] / totalMarks) * 100;
document.write("<p>" + studentNames[0] + " scored " + studentScores[0] + " out of " + totalMarks + " (" + percentageBasit.toFixed(2) + "%)</p>");

let percentageAmir = (studentScores[1] / totalMarks) * 100;
document.write("<p>" + studentNames[1] + " scored " + studentScores[1] + " out of " + totalMarks + " (" + percentageAmir.toFixed(2) + "%)</p>");

let percentageUmer = (studentScores[2] / totalMarks) * 100;
document.write("<p>" + studentNames[2] + " scored " + studentScores[2] + " out of " + totalMarks + " (" + percentageUmer.toFixed(2) + "%)</p>");



// Question no 09

// 9. Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.
// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.

let colors = ["Red", "Green", "Blue", "Yellow", "Pink"];


document.write("<h1>Original Array of Colors:</h1>");
document.write("<p>" + colors.join(",") + "</p>");

// a.
let colorAtStart = prompt("Enter a color to add at the beginning of the array:");
colors.unshift(colorAtStart);
document.write("<h2>Updated Array after adding color at the beginning:</h2>");
document.write("<p>" + colors.join(", ") + "</p>");

// b.
let colorAtEnd = prompt("Enter a color to add at the end of the array:");
colors.push(colorAtEnd);
document.write("<h2>Updated Array after adding color at the end:</h2>");
document.write("<p>" + colors.join(", ") + "</p>");

// c. 
colors.unshift("Purple", "Orange");
document.write("<h2>Updated Array after adding two colors at the beginning:</h2>");
document.write("<p>" + colors.join(", ") + "</p>");

// d. 
colors.shift();
document.write("<h2>Updated Array after deleting the first color:</h2>");
document.write("<p>" + colors.join(", ") + "</p>");

// e. 
colors.pop();
document.write("<h2>Updated Array after deleting the last color:</h2>");
document.write("<p>" + colors.join(", ") + "</p>");

// f. 
let indexToAdd = prompt("Enter the index where you want to add a color:");
let colorToAdd = prompt("Enter the color to add:");
colors.splice(indexToAdd, 0, colorToAdd);
document.write("<h2>Updated Array after adding color at index " + indexToAdd + ":</h2>");
document.write("<p>" + colors.join(", ") + "</p>");

// g
let indexToDelete = prompt("Enter the index from which you want to delete colors:");
let numberOfColorsToDelete = prompt("Enter how many colors you want to delete:");
colors.splice(indexToDelete, numberOfColorsToDelete);
document.write("<h2>Updated Array after deleting colors:</h2>");
document.write("<p>" + colors.join(", ") + "</p>");

// Question no 10

//10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.

var studentScores = [89, 92, 75, 56, 80, 99, 65];

studentScores.sort();

document.write("<h1>Sorted Student Scores in Ascending Order:</h1>");
document.write("<p>" + studentScores.join(", ") + "</p>");

// Question no 11

// 11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.

let cities = ["Karachi", "Lahore", "Islamabad", "Peshawar", "Quetta"];

let selectedCities = cities.slice(0, 3);

document.write("<h1>Cities Array:</h1>");
document.write("<p>" + cities.join(", ") + "</p>");

document.write("<h1>Selected Cities Array (First 3 cities):</h1>");
document.write("<p>" + selectedCities.join(", ") + "</p>");

// Question no 12

// 12. Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

var arr = ["This", "is", "my", "cat"];

document.write("<h1>Array:</h1>");
document.write("<p>" + arr + "</p>");
var sentence = arr.join(" ");

document.write("<h1>String:</h1>");
document.write("<p>" + sentence + "</p>");

// Question no 13

// 13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)

let newArray = [];

newArray.push("Keyboard");
newArray.push("Mouse");
newArray.push("Printer");
newArray.push("monitor");

document.write("<h1>Array after adding values:</h1>");
document.write("<p>" + newArray.join(", ") + "</p>");

let first = newArray.shift(); 
let second = newArray.shift(); 
let third = newArray.shift(); 
let forth = newArray.shift(); 

document.write("<h1>Deleted values:</h1>");
document.write("<p>" + first + ", " + second + ", " + third + ", " + forth + "</p>");


// Question no 14

// 14. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last In-
    // First Out)

    let newArray1 = [];

newArray1.push("Keyboard");
newArray1.push("Mouse");
newArray1.push("Printer");
newArray1.push("Monitor");


document.write("<h1>Array after adding values:</h1>");
document.write("<p>" + newArray1.join(", ") + "</p>");


let forth1 = newArray1.pop();  
let third1 = newArray1.pop();  
let second1 = newArray1.pop(); 
let first1 = newArray1.pop();  

document.write("<h1>Deleted Values:</h1>");
document.write("<p>"  + forth1 + ", " + third1 + ", " + second1 + ", " + first1 + "</p>");


// Question no 15

// 15. Write a program to store phone manufacturers (Apple,
//     Samsung, Motorola, Nokia, Sony & Haier) in an array.
//     Display the following dropdown/select menu in your
//     browser using document.write() method:

let phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

document.write('<h1>Phone Manufacturers</h1>');
document.write('<select>');

document.write('<option value="' + phoneManufacturers[0] + '">' + phoneManufacturers[0] + '</option>');
document.write('<option value="' + phoneManufacturers[1] + '">' + phoneManufacturers[1] + '</option>');
document.write('<option value="' + phoneManufacturers[2] + '">' + phoneManufacturers[2] + '</option>');
document.write('<option value="' + phoneManufacturers[3] + '">' + phoneManufacturers[3] + '</option>');
document.write('<option value="' + phoneManufacturers[4] + '">' + phoneManufacturers[4] + '</option>');
document.write('<option value="' + phoneManufacturers[5] + '">' + phoneManufacturers[5] + '</option>');

document.write('</select>');

// End chapter


