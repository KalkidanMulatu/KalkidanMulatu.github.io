/*
*Loops:
*Loops run the same block of code as much as you want with out having to rewrite it
*You can run the same block of code using different values each time
*while - runs a block of code while a specified stoping condition is true and stop if its fals
*for - runs for a speciffied condition number of times as long as the condition is true
*for/in - loops through the key/value properties of an object
*Loops Syntax:
*Initialization - tipically used to define
*Stopping condition - evaluates the condition and stops executing if its false
*Final expression - usually used to increment or decrement
*Statement - the code in the loop body executs 
*/

// While Loop runs as long as a specified condition is true
var i = 0;
while (i < 5){
    i++;
    console.log(i); // returns 1, 2, 3, 4, 5
}
var i = 5;
while (i > 0){
    i--;
    console.log(i); // returns 4, 3, 2, 1, 0
}

//The for...in statement iterates over all key/value properties of an object.
var baby = {name: "Ezra", age: 2, favoriteFruit: "apple"};
for(var key in baby){
    console.log(key); // returns name, age, favoriteFruit
    console.log(baby[key]); // returns Ezra, 2, apple
}

//for loop runs for as long as a specified condition is true
/* For(initialization; stoping condition; finall expresion){
    statement;
}
*/
for (var i = 0; i < 5; i++){
    console.log(i); // returns 0, 1, 2, 3, 4
}
for (var i = 5; i > 0; i--){
  console.log(i);  // returns 5, 4, 3, 2, 1
}
// Loop over an Array forwards
var array = [9, 4, 6, 7]
for (var i = 0; i < array.length; i++){
    console.log(array[i]); // returns 9, 4, 6, 7
}
// Loop over an Array backwards
var array = [9, 4, 6, 7]
for (var i = array.length; i >= 0; i--){
    console.log(array[i]); // returns 7, 6, 4, 9
}
// Loop over an Object
var object = {firstName: "Kalkidn", lastName: "Mulatu", age: 28};
for (var key in object){
    console.log(key) // returns firstName, lastName, age
    console.log(object[key]); // returns Kalkidan, Mulatu, 28
}

