/*
*Functions:
*Function allows us to run a block of code multiple times without having to rewrite it
*We can do so by simply calling the function with the argument however many times we want
*We can call the function with different arguments using the same block of code
*
*Functions Syntax:
*The keyword functions followed by the name if the function and an opening and closing parentheses
*Parameters - are placed between the two parentheses followed by opening and closing curly brackets
*Parameters - They are variables we use as a placeholders for the values we call the functions with
*Statements - The body of the function, it's placed within the curly brackets, followed by the return keyword
*Return statment - is used to return a value to the function caller
*Return statment is  an end statment in a function, anything after return does not execute
*call function - Call the function with an arguments to execut the code inside the function body
*Arguments - the actual values that are input in place of the parameters

*Scope: The visibility of variables
*Global Scope - Vairiables that are defined outside of the function block, it is available throughout the code, variables with out the keword var are global
*Local  Scope - Vairiables that are defined within a function, only available within
*Block Scope - Vairiables that are even more certin areas like an if statement
*Global scope can only access the global scope but the block scope can access the block, local, and global scope
*If both global and local scope have the same variable names, the local takes charge over the global variable
*/

//Closure is a scope chain, functions within functions 
//The inner function can access the outer but the outer function can't access the inner

function add(value){
    return function(value2){
        return value + value2;
    };
}

console.log(add(3)(3)); // returns 6

var object = {firstName: "Kalkkdian", lastName: "Mulatu", age: 28};
function fullName(){
    var firstName = "Kelly";
    return function() {
        return firstName + object.lastName;
    }
}
//we can take the return value of a function and assign it to a variable.
var reassign = fullName()();
console.log(reassign); //returns KellyMulatu

//Use closures to protect properties within an object from being modifide externally
var security = function(){
  var password = 465;
  return{
    getPassword: function(){
                  return password
                }
  }
}
console.log((security)()); // returns { getPassword: [function]};
