//Chapter No 9 to 11

// Question no 01

//1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”

var city = prompt("Enter Your City Name")

if (city.toLowerCase() == "karachi") {
    document.write("Welcome to city of lights")
}
if(city.toLowerCase() == city ) {
    document.write("Welcome to " + city)
}