/*
* Control flow:
* control flow is the order in which the computer executes statements
* It runs in order from the first to last
*/
// Use switch statement instead of if statement when:
// You are comparing multiple possible conditions of an expression.
// You have multiple values that may require the same code.
// You have some values that will require essentially all of another value's execution, plus only a few statements.

// A switch statement to select from many case
// When the value matches the case, the statement executs
// Use the break keyword after each case to stop the execution
// Default is the keyword for  a default case there is no match


var mood = "Bored";
function controlFlow(value){
switch (value) {
    case "Happy":
    case "You fill like dancing":
    case "You hear your favorite song":
        console.log("Dance!");
        break;
    case "Tired":
        console.log("Go to sleep!");
        break;
    default:
        console.log("Do something fun!")  ;  
}
}
console.log(controlFlow(mood)); // 'Do somthing fun!'


// Use if instead of switch when:
// You want to test for the truthiness of an expression.
// You only have a single affirmative test.
// You need to evaluate different expressions for each branch.
var flow = 4;
if(flow < 5){ // Checks the first condistion first
    console.log("Less than 5"); // if its true the first statment runs, witch in this case it is so it returns "Less than 5"
}
else if (flow < 6){ // it doesn't run anymore condistions becouse the first one is true
    console.log("Less than 6");
}
else {
    console.log("Greater than or equal to 5"); // else is the default statment if all the if condistions dont meet
}

