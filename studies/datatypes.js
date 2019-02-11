/*
*Datatype
*Number:
* All Number values are a number datatype
* That includs negative and decimal number
*/
console.log(typeof 4.5); // returns number
console.log(typeof -3); // returns number

/*
*Strings:
*Sting data is any value within a single or a double quotes
*/
console.log(typeof 'Kalkidan'); // returns string
console.log(typeof "Kalkidan 28"); // returns string


/*
*Boolean:
*Boolean data is a true or false value
*Use bollean to check whether or not a value is true
*Boolean value of false, undefined, null, NaN, an empty string, 0 , and -0 are false
* when operating with a number a boolean is converted True to 1 and False to 0
*/

console.log(4 == 5); // returns false
console.log(Boolean(0)); // returns fals

/*
*Arrays:
*You can store multiple values in one variable
*You can store different data types
*The Values have to be stored within a square brackets
*You have to separate each element with a comma
*Arrays are zero based index
*You accesses or manipulate an element in the array using a bracket notation
*/
var array = [5, true, "Bob"]; // literal Array with boolean, string, and number data types
console.log(array[0]); // returns 5
console.log(array[array.length-1]); // returns "Bob"
array[0] = 2;
console.log(array); // returns [2, true, "Bob"]

/*
*Objects:
*Just like an Array, Object can store multiple values in One variable
*Just like an Array, Object can store different data types
*The values have to be stored within a curly braces
*Objects are key/value pair propertie
*You have to separate each key/value pair with a comma
*You accesses or manipulate the properties using the key value
*You can accesse or manipulate the property using a dot or bracket notation
*You can only use a bracket notation if the property has a space in between
*/
var myName = {
    firstName: "Kalkidan",
    lastName: "Mulatu"
};

console.log(myName.firstName); // returns "Kalkidan"
myName.firstName = "Kelly";
console.log(myName.firstName); // returns "Kelly"
console.log(['lastName']); // returns 'Mulatu'

/*
*Functions:
*Function allows us to run a block of code multiple times without having to rewrite it
*We can do so by simply calling the function with the argument however many times we want
*The argument take a place of the parameter everytime we call it
*We can call the function with different arguments using the same block of code
*Return statment is used to return a value to the function caller
*Return statment is  an end statment to a function
*Any code after the retuen does not execute
*/

function name (x, y){
    return x + y ;   
}
console.log(name(1,4)); // returns 5
console.log(name(3,8)); // returnd 11
console.log("Kalkidan", "Mulatu"); // returns "KalkidanMulatu"

/*
*undefined:
*undefined is a variable that has been declared but have no value
*/
var notDefined;
console.log(notDefined); // returns undefined

/*
*Null:
*Null means the value is currently unavailable
*It can be assigned to a variable as no value
*Null is nothing, not existing
*Null is an object data type
*Null is 0 value
*/
 
 var noVal = null;
 
 console.log(typeof(noVal));// returns object
 console.log(null + 3); // returns 3
 
 
 /*
 *NaN:
 *NaN is short for not a number to a value
 */
 
 console.log("hi" * 3); // returns NaN
 
 
 /*
 *Infinity is a positive infinity number value
 *-Infinity is a negative infinity number value
 *It is displayed when a number has exceedes its limit of the floting point number, which is up to 15 digits
 */
 
 
 console.log(Infinity + Infinity); // returns infinity
 
 
 /*
 *Primitive Data Type:
 *There are 6 primitive otherwise known as simple value data types
 *They are number, sting, boolean, null, undefined, and symbol
 *You can change the primitive value but you cannot modify it
 *Primitive values are passed to a function BY COPY
 *When you use methods or operatoers on them, you are creating a new simple data type
 *Primitive data type is stored directly on to the variable
 *The original will never change
 */ 
 var name = "Kalkidan";
 
 console.log(name.toLocaleUpperCase()); // returns kalkidan
 
 
/*
*Complex Data Type:
*JavaScript has one complex data type, that's the Object data type
*Objects such us functions and arrays are referred to complex data type
*You can store multiple references to other data types, and it is not a finite size
*Unlike primitive values, complex data types are mutable and can be changed
*complex values are passed to a function by REFERENCE
*It means taht complex data type is not stored directly on to the variable
*/

// complex Values
var indirect = {age: 2};
var indirect2 = indirect; // indirect2 is not making another copy, its just simply reffrencing from indirect value
indirect.age = 3;  // when reassigning indirect, your indirectly reassigning indirect
console.log(indirect.age); // returns 3
console.log(indirect2.age); // returns 3

var x = {foo: 3};
var y = x;  // copied by reference
y.foo = 2; // reassigning the refrence
console.log(x.foo); //  returns 2

var num = [2, 4, 6,];
var num2 = num; // copied by reference
num2.push(2);  
console.log(num); // returns 2, 4, 6, 2


var baby = {
    name: 'Ezra',
    age: 2
}; 
var baby2 = baby; // copied by reference
baby2.age = 3; 
console.log(baby) // returns { name: 'Ezra', age: 3 }


// Primitive Values
var direct = 2;
var toDirect = direct; // makes another copy of direct value and asign it toDirect
toDirect = 3; // toDirect reassign it's value to 3
console.log(direct); // direct's value was never reassigned so it returns 2 stil
console.log(toDirect); // returns 3

var name = "Kalkidan";
var nickName = name; // copied by value
nickName = "Kelly"; // doesn't reassigning the refrence

console.log(name); // returns "Kalkidan"
console.log(nickName); // returns "Kelly"







