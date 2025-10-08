/* 
1. Type Scipt - TS an an enhanced version of javascript. we can say superset of javascript.TS can not run directaly in browser. ts compiler convert the code from type script to javascript.It is pure object-oriented with classes, interfaces and statically typed programming languages

2. TypeScript Modules - TypeScript provides modules and namespaces to prevent the default global scope of the code and also to organize and maintain a large code base
Modules are a way to create a local scope in the file. So, all variables, classes, functions, etc. that are declared in a module are not accessible outside the module. A module can be created using the keyword export and a module can be used in another module using the keyword import.

export let age : number = 20;
export class Employee {}

import { Employee } from "./Employee";

3. Namespaces
The namespace is used for logical grouping of functionalities. A namespace can include interfaces, classes, functions and variables to support a single or a group of related functionalities.
A namespace can be created using the namespace keyword followed by the namespace name. All the interfaces, classes etc. can be defined in the curly brackets { }.

4.features of TypeScript- Cross-Platform:  The TypeScript compiler can be installed on any Operating System such as Windows, MacOS, and Linux.

Object-Oriented Language: TypeScript provides features like Classes, Interfaces, and Modules. Thus, it can write object-oriented code for client-side as well as server-side development.

Static Type-Checking: TypeScript uses static typing and helps type checking at compile time. Thus, you can find errors while writing the code without running the script.

Optional Static Typing: TypeScript also allows optional static typing in case you are using the dynamic typing of JavaScript.

DOM Manipulation: You can use TypeScript to manipulate the DOM for adding or removing elements.

ES 6 Features: TypeScript includes most features of planned ECMAScript 2015 (ES 6, 7) such as class, interface, Arrow functions, etc.


5. compile TypeScript files- tsc edureka.ts
6. combine multiple .ts files into a single .js file  -  tsc --outFile comman.js file1.ts file2.ts file3.ts
7 - data types in TypeScript- 
Number: This represents number type values. The numbers are stored as floating-point values in TypeScript.
String: A string represents a sequence of characters stored as Unicode UTF-16 code.
Boolean: This represents a logical value. When we use the Boolean type, we get the output only in true or false.
Null: Null represents a variable whose value is undefined. It is not possible to directly reference the null type value itself.
Undefined: The Undefined type denotes all uninitialized variables.
Void: A void is the return type of the functions that do not return any type of value.

8- object-oriented terms supported by TypeScript - 
Modules
Classes
Interfaces
Inheritance
Data Types
Member functions


JavaScript is scripting language hai jo browser ya Node.js me directly run hoti hai.
Runtime errors – code execute hone ke baad error milta hai.
No compilation needed, directly run hota hai.
Small scripts, quick prototyping, simple web apps.

TypeScript
TS ek superset of JavaScript hai jo static typing, interfaces, classes jaise extra features add karta hai. TS ko run karne ke liye pehle compile karke JS me convert karna padta hai.
Compile-time errors – code run hone se pehle hi error pakad leta hai.
Needs compilation (transpilation) → TS → JS.
Large-scale applications, enterprise projects jahan maintainability & scalability important hai.
*/


interface Userdata{
	name : string,
	age : number
	status?:boolean
}

let userdata : Userdata={
	name : "sandeep",
	age : 90,
}