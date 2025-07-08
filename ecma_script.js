// 1. Default parameters
// - Default parametrea are handel the non parametre function

//  EXE - function add(num1, num2=2) {
//  return num1+num2;
// }
// add (5); //returns 7 

// 2. Template literals- 
// exe - let myName = 'John';
// let myRole = 'Software Developer';
// console.log(`My name is ${myName} and I am a ${myRole}.`); //  My name is John and I am a Software Developer


// 3. Destructuring assignment
// The destructuring assignment allows reading values from an array or properties from an object, into distinct variables

// let myName, myRole;
// let array = ['John', 'Software Developer'];
// [myName, myRole] = array; //positional assignment occurs here
// console.log(myName, my Role); //John Software Developer

// 4. Let Keyword
// - Variables defined with let cannot be Redeclared.
//   Variables defined with let must be Declared before use.
//   Variables defined with let have Block Scope.

// 5. const keyword
// -Variables defined with const cannot be Redeclared.
// Variables defined with const cannot be Reassigned.
// Variables defined with const have Block Scope.

// 6. Arithmetic Operators
// 	 +	Addition
// 	-	Subtraction
// 	*	Multiplication
// 	**	Exponentiation (ES2016)
// 	/	Division
// 	%	Modulus (Division Remainder)
// 	++	Increment
// 	--	Decrement

// 7 HTML Events
// 	onchange	  An HTML element has been changed
// 	onclick	The   user clicks an HTML element
// 	onmouseover	  The user moves the mouse over an HTML element
// 	onmouseout	  The user moves the mouse away from an HTML element
// 	onkeydown	  The user pushes a keyboard key
// 	onload	      The browser has finished loading the page


// String Method
// 1. slice() Method
// - slice() extracts a part of a string and returns the extracted part in a new string.
// The method takes 2 parameters: the start position, and the end position (end not included).
// This example slices out a portion of a string from position 7 to position 12 (13-1):
// exe -let str = "Apple, Banana, Kiwi";
// document.getElementById("demo").innerHTML = str.slice(7,13);
// //output - Banana

// 2.substring() Method
//  substring() is similar to slice().
// The difference is that substring() cannot accept negative indexes.

// exe -let str = "Apple, Banana, Kiwi";
// document.getElementById("demo").innerHTML = str.substring(7,13);
// Output = Banana

// 3. substr() Method
// substr() is similar to slice().
// The difference is that the second parameter specifies the length of the extracted part.
// exe -let str = "Apple, Banana, Kiwi";
// document.getElementById("demo").innerHTML = str.substr(7,5);
// output - Banan

// 4. Replacing String
// -The replace() method replaces a specified value with another value in a string:

// 5. Upper and Lower Case
// let text1 = "Hello World!";
// let text2 = text1.toUpperCase();
// let text3 = text1.toLowerCase();

// 6. concat() Method
// - let text1 = "Hello";
// let text2 = "World!";
// let text3 = text1.concat(" ",text2);
// document.getElementById("demo").innerHTML = text3;

// Output - Hello World!

// 7. String.trim()
// - The trim() method removes whitespace from both sides of a string:
// exe -let text = "     Hello World!     ";
//   alert(text.trim());
// output - Hello World!

// 8. charAt() Method
// var text = "HELLO WORLD";
// document.getElementById("demo").innerHTML = text.charAt(0);
// Output === H

// 9.charCodeAt() Method
// - let text = "HELLO WORLD";
// document.getElementById("demo").innerHTML = text.charCodeAt(0);
// Output ==72

// 10. String indexOf()
// let text = "Hello world, welcome to the universe.";
// let result = text.indexOf("welcome");
// Output = 13

// 11.String includes()
// - The includes() method returns true if a string contains a specified string.
// Otherwise it returns false.

// let text = "Hello world, welcome to the universe.";
// let result = text.includes("world");
// poutput -true

// 12. String match()
// The match() method searches a string for a match against a regular expression
// The match() method returns the matches in an array.
// The match() method returns null if no match is found.

// Exe -let text = "The rain in SPAIN stays mainly in the plain";
// let result = text.match(/ain/g);
// Output -ain,ain,ain

// 13. String repeat()
// - The repeat() method returns string with a number of copies of a string.
// The repeat() method returns a new string.
// The repeat() method does not change the string it copies from.

// 14. String search()
// The search() method searches a string for a value.
// The search() method returns the index (position) of a match.
// The search() method returns -1 if no match is found.
// The search() method is case sensitive.

// exe -let text = "Mr. Blue has a blue house"
// let position = text.search("Blue");
// Output -4
