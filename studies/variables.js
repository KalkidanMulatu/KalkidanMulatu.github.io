/*
* VARIABLES:
*
* 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
* are named identifiers that can point to values of a particular type, like a Number, String,
* Boolean, Array, Object or another data-type.  Variables are called so because once created, we
* can CHANGE the value (and type of value) to which they point.
*
* 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
* variable.
*
* 2. There are 2 phases of using variables: declaration and initialization (or assignment).
*/

// 1. declaration //
var myName;

/*
* At the declaration phase, the variable myName is undefined because we have NOT initialized
* it to anything
*/
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

/*
* const:
* You cannot re-assign using the keyword const
* You should only use const when you know for sure you dont need to reassign its value
* The pros of youing conts is that you wouldnt reasighn variable by accedent
* The cons of using const is that you will have to both declare and assign at the same time
* Another con for using const over let or var is that you can not reassign the value


*/
 let change = 2;
 change = 3;
console.log(change); // returns 3;
/*
* let:
* You can use the keyword let when you need to reassign the value
* It is only reassigned within the block of code
* The pros of using let is that you can reassign the values
*/
let x = 2;
for (let x = 2; x < 5; x++){
    console.log(x); // returns 2, 3, 4
}
console.log(x); // returns 2 becuse the let only reassigns within the block
/*
* Hoisting
* Hoisting is when JavaScript takes a declard variable to the top of the scope
* Only the name of the variable gets hoisted in variable declaration
* The name and the body is hoisted in function declaration
* only the name gets hoisted when using Function expressions
*/
var o = 1;
var y;
console.log(o + y); // returns 1 undefined
y = 2;




