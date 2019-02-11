/*String manipulation
* You can manipulate srings using a sting methods
* you can also manipulate string with operators
*/

/*
*String Mothods:
* .length = the length of a string
* .trim() = removes space from both side of the string
* .charAt() = the character at specified position
* .concat() = two or more strings joined together
* .replace() = replaces a value with a specified value
* .split() = converts to an arraay with a specifide value
* .indexOf() = Finds a specified value in a string
* .lastIndexOf() = returns the last index
* .toUpperCase() = returns the string in upper case
* .toLoweCase() = returns the string in lower case
* .search() = checks for a specified value and return the position
* exracting string parts:
* .slice(start position, end position) = returns the extracted part
* .substring(start position, end position) = returns the extracted part but it can not accept negative indexes
* .substr(start position, length of extract) = returns the extracted part
*/
var greatings = "Hello";
var name = "Kalkidan";
// With operators
console.log(greatings + name); // returns HelloKalkidan
//With string methods
console.log(name.length); // returns 8
console.log(name.lastIndexOf()); // returns -1
console.log(greatings.concat(name)); // returns Hellokalkidan
console.log(greatings.split()); // returns ['Hello']
console.log(greatings.indexOf('H')); // returns 0
console.log(greatings.charAt(1)); // returns e
console.log(name.slice(4)); // returns idan
