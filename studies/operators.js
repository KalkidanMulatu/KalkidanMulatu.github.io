/*
*Operators:
*Assignment operators: =, *=, +=, -=, /=, %=
*An assignment operator assigns a value to alter an existing value
*/
var assign = 5;
console.log(assign += 3); //returns 8
console.log(assign /= 2); // returns 4
console.log(assign *= 5); // returns 20
console.log(assign -= 3); // returns 17
console.log(assign = 8);  // returns 8
/*
*Arithmetic operators: +, -, /, *, %, ++, --, **
*perform basic arithmetic to number values
*/
var math = 6;
console.log(math + 2); //returns 8
console.log(math / 2); // returns 3
console.log(math * 2); // returns 12
console.log(math - 2); // returns 4

/*
*Comparison operators:
*Comparison operators compare two values and returns a booleans
* <(Less than), >(Greater than), <= (Less than or equal to), >= (Greater than or equal to)
* == (Equal), === (Strict equal), != (Not equal), !== (Strict not equa)
*/
var compare = 6;
console.log(compare < 6); //returns false
console.log(compare <= 6); // returns true
console.log(compare == '6'); // returns true
console.log(compare === '6'); // returns false
console.log(compare != 6);  // returns false
/*
* Logical operators:
* && : logical And, returns a boolean true if both values are true
* || : logical Or, returns a boolean true if both or either are true
* !  : logical Not, returns a boolean true if one is not true
*/
var logic = 4;
var logic2 = 5;
// And Operator
if (logic < 5 && logic2 < 5){
    return false;
}
// Or Operator
if (logic < 5 || logic2 < 5){
    return true;
}
// Not Operator
console.log(!true); // returns false
console.log(!false); // returns true
/*
*Unary operators:
*Takes a value and performs an operation
*Can be either before or after the value
*Can not override unary
* delete : Deletes the property of an object or a spicific index of an array, does not delete an entire object
* typeof : Returns the type of the value
* void   : Voids a value and returns undefined
*++ : Increment adds one to the value
*-- : Decrement subtracts one from the value
* + : Unary plus changes the value to a number unless its already a number, then its stays as a number
* - : unary negation changes the element to a number, then add - before the number
* ~ : Bitwise not inverts all bits to a number
* ! : Logical Not returns true if the vale can be converted to false and vice versa
*/
var increament = 3;
// Increment
console.log(increament++); //returns 5
// Decrement
console.log(increament--); // returns 2
// Unarry
console.log(+true); // returns 1
console.log(-'-3'); // returns 3
console.log(!false); // returns true
console.log(~false);  // returns -1
// Typeof
console.log(typeof -2.2); // returns number
// Delete
var fruits = {1: 'banana', 2: 'apple'};
delete fruits[1];
console.log(fruits) // returns {2: 'apple'}
// void
console.log(void fruits[1]); // returns undefined

/*
*Ternary operator:
*Is a simplified way of writing an if/else statement
*The condition folowed by a question mark and expressions
*The else if is saparate by a colon
*/
// Condition? expression: defalt expresstion;
console.log(4 < 5? true: false); // returns true




