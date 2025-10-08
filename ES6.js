
/* ECMA Script  */
// JavaScript (js) is a light-weight object-oriented programming language which is used by several websites for scripting the webpages. JavaScript is very easy to implement because it is integrated with HTML. it is  scripting language for Web pages. many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat.
// JavaScript is a synchronous, blocking, single-threaded language. That just means that only one operation can be in progress at a time
// JavaScript object is a non-primitive data-type that allows you to store multiple collections of data. like Object
/* ES5 supports primitive data types that are string, number, boolean, null, and undefined.

ES6, there are some additions to JavaScript data types. It introduced a new primitive data type 'symbol' for supporting unique values. */


// Europian Computer Manufactures Association script
//  Ecma script javascript KE STANDERD HOTE HAI. jo ki sare brawser saport karte hai.
// also used in node js
// it is not lirary or framwork
// first apeear in 1997
/* 
 JavaScript objects - object is a collection of properties, and a property is an association between a name (or key) and a value. can have properties, which define their characteristics.

Class - Class is a collection of objects. Object has properties and behavior.includes local variables and local methods.

JSON is a text format for storing and transporting data
 */

/* 1. var Keyword
 data storing Keyword used for variable declaration in js.
 var function scop and global scope and var se declare karte h to o window object ki property ban jata h
Hoisting hota hai → declaration upar move ho jata hai, lekin value undefined hoti hai jab tak assign nahi hoti.
Re-declare aur re-assign dono allowed hain.

/* 2. Let keyword
data storing Keyword used for variable declaration in js.
let is block scop.
Hoisting hota hai lekin Temporal Dead Zone (TDZ) hoti hai → tab tak access nahi kar sakte jab tak declare nahi hota.
Re-assign allowed, re-declare in same scope not allowe
let z = 30;
z = 40; // ✅ Re-assign allowed
// let z = 50; // ❌ Error → Re-declare not allowed in same scope

3 - const- 
Constants are block-scoped, much like variables declared using the let keyword. The value of a constant can't be changed through reassignment (i.e. by using the assignment operator), and it can't be redeclared 
Re-assign not allowed → constant value hoti hai.
Hoisting hota hai lekin TDZ applies.
Object aur array ke contents change kar sakte ho, lekin reference change nahi kar sakte.
const PI = 3.14;
// PI = 3.15; // ❌ Error → cannot re-assign
const person = { name: 'John' };
person.name = 'Jane'; // ✅ Allowed, object content change
// person = {}; // ❌ Not allowed, reference change



 4. Default Parametrs
Whene we not pass a parametrs in function then we user default parametre.
 function add(a, b=20)
{
    return a+b
}
console.warn(add(22))

5. Template Litral
let str= "this id test";
let string = "angular developer"
console.warn(`nodejs ${str} php ${string}`)

6. Find Function-
return a first array element according to passes condition
let data =[10,20,30,40,50]
let res = data.find((item)=>
     item > 20
)
console.warn(res) // 30

7 - findIndex method - this method return the index of the first element in the array that pass the test
let arr = [2,4,5,6,7,8]
let newArr = arr.findIndex((ele)=>ele > 4)
console.log(newArr) // 2
 
8 - Some method - Check if any of the element in an array pass the test then it return the true.
let arr = [2,4,5,6,7,8]
let newArr = arr.some((ele)=>ele == 5)
console.log(newArr) // true

9 - every method - The every() method of Array instances tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

let arr = [10,9,5,6,7,8]
let newArr = arr.every((ele)=>ele >= 5)
console.log(newArr) // true

10. Arrow Function
its a very simple and basic function . It's anonimouse function, no need a name of function and no return statment in loop
Advantage - This arrow function reduces lots of code and makes the mode more readable.
Arrow function syntax automatically binds “this” to the surrounding code’s context.
Writing the arrow => is more flexible as compared with the writing function keyword.

let arraow = ()=>{
    return "demo";
}
console.log( arraow())

11. Classes
it is a User define class, set of methods and variable

12. Inharitance
use parant class prperty in child class
we have to call super() in child calass of parent class 

class student{
     name ="raman";
}
class cource extends student
{
    constructor(){
        super()
    }
}

let obj= new cource()
console.log(obj.name)

13. Lexical Scope for this
kishi cheej ki kitni ranje hai.
lexical scope of this variable is that function

let arr ={
    name:"ramesh",
    list:["demo","test","same"],
    getfunction:function(){
        console.log(this.name)
        let td = this.name
        this.list.map(function(item){
            console.log(td,item)
        })
    }
}
arr.getfunction();

14.Rest Oprator - It is access the remaining element from array.
It is a collection of all remaining elements into an array. with the help of three dotes(...rest).
rest parameter collects items into an array, the spread operator unpacks the collected elements into single elements. jo bhi element ham pass karte h o combine ho jate h. spread me jo combine h unhe divide karte h. Mostly it sued with array and object
function fruits(a,...rest)
{
    console.warn(a,rest)
}
fruits("apaple","banana","kiwi","orange")

15. Spread oprator
It  it's expends the combined array into individual element
Difference - It’s the opposite to rest parameter , where rest parameter collects items into an array, the spread operator unpacks the collected elements into single elements.

const inputWords = ["spray", "limit", "elite", "exuberant", "destruction", "present"];

function getitem(a,b,c,d)
{
    console.log(a,b,b)
}
getitem(...inputWords)


16. Destructuring Array
 Unpack or expends or divid values from array or object is Destructuring Array.Destructuring Assignment on the left-hand side defined that which value should be unpacked from the sourced variable.

let arr = ["php","java","angular"]
let [arr1,jv,ng]=arr
console.warn(arr1,jv,ng)// php java angular// get all array value

let arr = ["php","java","angular"]
let [arr1,,ng]=arr
console.warn(arr1,ng)// php angular // get first and third array value

17.Destructuring Array with rest oprator
let arr = ["php","java","angular","node"]
let [arr1,...arrx]=arr
console.warn(arr1,arrx) //php [ 'java', 'angular', 'node' ]


18. Exponentiation Oprator 
define a power of integer
console.log(4**2) //16
console.log(2**4**2) //65536 

19. Module
you can use modules to separate codes in separate files as per their functionality. This makes our code organized and easier to maintain.Module is a file that contains code to perform a specific task
module allow the access class property from one file to other files(IMport & export);

20. Splice Method-
Add and remove element from the array.
Add Element---const months= ['jan', 'feb','march', 'april']
//  months.splice(4,0,'Decem')
months.splice(months.length,0,'Decem')
console.log(months)//[ 'jan', 'feb', 'march', 'april', 'Decem' ]

21. IndexOf Method -
method of Array instances returns the first index at which a given element can be found in the array, or -1 if it is not present
Update Element--
const months= ['jan', 'feb','march', 'april']
let findIndex = months.indexOf('march');
console.log(findIndex)

updatemonths=months.splice(findIndex,1,'March')
console.log(months)


22.Map Method-
its a call back function.Return a new array from existing array. 
and it return new array bithout changing the orignal array and we can attach multiple method with map method(Chaining style)
Syntex = array.map((currentValue, index, arra), thisValue)

like let mapdata = array.map((currentvalue, index, arra)=>{
return `index no ${index}, and value ${curele} and ${array}`
}).reduce.(filter)


const array = [1, 4, 6, 8, 9];
let mapdata = array.map((curele, index, arra)=>{
return `index no ${index}, and value ${curele} and ${array}`
})
console.log(mapdata)

const arr = [3,4,5,6,6,7];
let total = arr.map((currele)=>currele *2).reduce((accumu, crele)=>{
    return accumu+= crele
})
console.log(total)


23. Reduce Method - the reduce method executes the reduser function(that you provide) on each element of the array. resulting in single output value. its take a four parameter.
it convert 3d or 2d array into a single dimantionsl array. 
const arr = [1,2,3,4,5,6];
let total = arr.reduce((accumulator,currele,currindex,arr)=>{
    return accumulator+= currele
})
console.log(total) // 21

24-slice method - extract a part of string (start index, end endex) take a negative index(1,-5)
21 - substring -  extract a part of string (start index, end endex). it not accept negative index, return only first parameter value.

25-substr- extract a part of string (start index, end endex). and second parameter return the part of extracting string. and not take nagative value.return a blank on nagetive value

26. Replace()
ak value ke sath dusri value ko replace karta h
let str ="this id demo";
let replace = str.replace('demo','test')
console.log(replace)// this id test

27. split method - Convert a string into array with comma saprated.

ES17
28.Object.value()-
get object values
const obj ={name:"rame", age:50}
console.log(Object.values(obj))//[ 'rame', 50 ]

29. Object.entries()
get object key and value pair in array
const obj ={name:"rame", age:50}
console.log(Object.entries(obj))// [ [ 'name', 'rame' ], [ 'age', 50 ] ]

ES19
30. flate Method- flate multidimantional array in single array
const arr =[
   {name:'ram',age:45},
   [{tes:'demo',php:'jaua'},
   [{angulaer:'lag'},{node:"express"}]]
]
console.log(arr.flat(Infinity))

31. for..of Loop - it Return value of array.
let list = [4, 5, 6];
for (let i of list) {
   console.log(i); // "4", "5", "6"
}

32. for..in Loop -it Return key of array.
let list = [4, 5, 6];
for (let i in list) {
   console.log(i); // "0", "1", "2",
}

33. shift()
Array ke start se ek element hataata hai (first element)
Aur us element ko return karta hai.
let arr = [10, 20, 30];
let removed = arr.shift();
console.log(arr);      // 👉 [20, 30]
console.log(removed);  // 👉 10

34. unshift()
Array ke start me ek ya zyada elements add karta hai
Aur new length return karta hai.
let arr = [20, 30];
let newLength = arr.unshift(10);
console.log(arr);       // 👉 [10, 20, 30]
console.log(newLength); // 👉 3

35. Call Method - it is  predefind method in javascript. Ak object dusre object ke method ka use kar sakta h by using the call() method.

const set1 ={
    name:"amardeep",
    devloper : "Angular",
    features : function(rating){
        console.log(`my Name is ${this.name} and developer of ${this.devloper} and give the rating of ${rating} start`)
    }
}

const set2 = {
    name :'ankur',
    devloper : 'nodejs' 
}
set1.features.call(set2,5)//my Name is ankur and developer of nodejs and give the rating of 5 start.

36. Appyle Method() - Apply method() is similar to the call() method. difference is that  the call method takes a arguments seprately fun a(parameter1,par2). the Apply method takes a arguments as an array

const set1 ={
    name:"amardeep",
    devloper : "Angular",
    features : function(rating, techno){
        console.log(`my Name is ${this.name} and developer of ${this.devloper} and give the rating of ${rating} start to the ${this.name}, please use ${techno}`)
    }
}

const set2 = {
    name :'ankur',
    devloper : 'nodejs' 
}
set1.features.apply(set2,[5,"java"]) // use perameter as array["33","test"]

37. Bind Method() - Bind method ka use kishi object ko common function ke sath bind kar sakte h.and a function different result deta h jab iski need ho. WE na bind the the object with common function

const set1 ={
    name:"amardeep",
    devloper : "Angular",
}

const set2 = {
    name :'ankur',
    devloper : 'nodejs' 
}

function features(rating,techno){
        console.log(`my Name is ${this.name} and developer of ${this.devloper} and give the rating of ${rating} start to the ${this.name}, please use ${techno}`)
    }

let setall = features.bind(set1)
setall(5,"java")

38. JavaScript data types.
There are a total of 7 basic data types supported by JavaScript. Each one of them is briefed up as follows:

Boolean – Represents true and false values.
Null –  ek primitive value hai.Represents empty, nothing, and unknown type of values
Number – Represents both integer and floating-point values.
Object – Used for storing collections of data or more complex entities
String – Represents single-character, multi-character, and alphanumeric values.
Symbol – Used for creating unique identifiers for objects
Undefined – Represents value not assigned. If a variable is only declared and not assigned in JS, it

39.Use strict - defines that the JavaScript code should be executed in "strict mode".
With strict mode you can, for example, not use undeclared variables.


40. Closer-A closer is a function having access to the parent scope. it preserve the data from outside.
    the closer is inner function that has acces to outer function variable.
    closer ak function h jo apne pass parent scop rkhta h. a outside function ka data preserve karta h.
    means (nested function) function ke andar function jo hota h usme inner function outer function ke variable ko access kar sakta h. but parent function inner function ke variable ko access nhi kar sakta.

     function outerFun()
    {
        var str= "this is testing"
        function inner(){
            var instr = "this is inner"
            console.log(str)// this is testing
        }
        inner()
        consol.log(instr)// error
    }
    outerFun()

41 . call Back - A callback function is a function passed into another function as a argument.A callback function is called after a given task. this is then invoked inside the outer function to complete some kind of routing or action.

function show()
{
    console.log("show method")
}
function getshow(callback){
    callback()
}
getshow(show);

42. Event Loop - Event loops handle asynchronous callbacks in Node.js. ensuring that non-bloking task are executed efficiancy. event loop helps manage multiple task without bloking the main thread.  Event loop ka kam basicaly jo function execute hone me thoda time leti h o  call queue environment me chali jati h. jo function call  ho jata h o khud ka Execution Context create karta h or execute hoke result return karta h. or jab call queue code execute hone ke bad o Message Queue me aa jati h. to event loop yaha pe check karta h ki mgs queue me kuch h ya nhi, to event loop us code ko  Call stack me rakh leta h. or output aa jata h. execution stack se hame result mil jata h.            
Event loops handle asynchronous callbacks in Node.js. It is the foundation of the non-blocking input/output in Node.js, making it one of the most important environmental features.  

jab async function call hota h to libuv use background me  “Thread Pool” ke through handel karti hai.jo call queue env me use process karti hai. jab kaam complete ho jata hai tab event trigger hota hai. To jaise hi event trigger hota hai, woh callback ready ho jaata hai. livue callback ko event queue me bhej deta h. yaha pe event loop bar bar event que and call stack ko check karta ki call stack empaty ha ya nhi. agr empaty hota hai. event loop use callback ko call stack me rakh deta hai for the execution . Event Loop phases -  Timers → Pending → Poll → Check → Close

3 - Micro-task (Micro Queue) - Micro-task wo tasks hote hain jo current execution stack ke end me, lekin next macro-task se pehle execute hote hain. Ye higher priority hote hain.
Promise.then() / Promise.catch() / Promise.finally()
process.nextTick() (Node.js specific, promises se bhi pehle execute)
queueMicrotask()

4. - Macro-task (Task Queue)
Macro-task wo tasks hote hain jo event loop ke ek iteration ke end me execute hote hain. Ye generally I/O operations, timers aur high-level events ke liye use hote hain.Lower priority: Micro-tasks ke baad execute hote hain.Ek iteration me ek macro-task execute hota hai
setTimeout()
setInterval()
setImmediate()

43. Execution Context - Javascript ke code run karne ke liye ak environment ki need hoti h use ham execution contaxt kahet h.the environment in which our code is executed and is evalueted. java script engin ME Jab koi function ya var call hota o khud ka execution context create karta h.

44- Global Execution Context - Java script engine create the global execution context befor it start to execute any code. Jab tak ham kishi function ko call nhi karte tak tak function ya variable global Execution Context me rehta h. and browser by default ise create kar deta h.

45. Call Stack(execution Stack) - JavaScript engine uses a call stack to manage execution contexts. it is follows the Last In First Out (LIFO) principle. We use call stack for memorizing which function is running right now. Jab bhi ham code ko execute karte h us time jitne bhi execution context create hote h unhe store karta h LAST IN, FIRST OUT MANNER me.

46. Cuncurrency -Concurrency handling multiple operations at the same time without blocking the main thread, using Event Loop, Call Stack, Web APIs, Callback Queue & Microtask Queue ke combination se hota hai.


 47 - Call Queue = Jitne bhi time taking wale function execute ho jate h(jo background me chalre hote h) o call queue evironment me aa jate h. and event loop unka result execution context me le aata h. result show karne ke liye.

48. Hoisting - Hoisting is the default behaviour of javascript where variable and function declaration are moved to the top of thier scope before the code execution.(Creation fase pe var and function declaration hota h to use execution se pehle function scope ke top me rakh diya jata h with the of JS Engin.) If we use function hoisting then it will return result but if we use variable hoisting then it will return undefined.

console.log(a) // undefined assign kar dega. lakin error though nhi karega.
var a = 10; // variable hoisting

test(); // it will return result
function test(){
    console.log("test function")
}

49. Callback Hell - Callback hell is big issue of nested callback. Every callback argument leta h jo ki pichle callback ka result hota h. is code structure se ak piramide ban jata h. jisse ise maintain rakhna muskil ho jata h. or sath hi kishi ak function me error aati h to baki sare function effect hote h.

50.What is the Temporal Dead Zone
Temporal Dead Zone (TDZ) wo time period hai jab ek let ya const variable apne scope me pehle se hi hoist ho chuka hota hai, lekin initialize nahi hua hota, aur us time usko access karne par ReferenceError aata hai.

 Jab aap kisi variable ko let ya const se declare karte ho, o global scope me memory alocat na karke khud ka scop create karta hai. jise hame Temporal dead zone kehte hain. if you want access these variable then it will get error.
 console.log(a) // ReferenceError: Cannot access 'a' before initialization
 let  a = "helll00"

51. Body Parser - used to process a data sent through an HTTP request body. OR It is responsible for parsing the incoming request bodies in a middleware before you handle it.



52. Currying
 Currying means ek function ko multiple functions mein break karna jo one argument lete hain.
 function add(a) {
  return function(b) {
    return a + b;
  }
}

console.log(add(2)(3)); // 5

53.Prototype : Every JavaScript object has a hidden internal property called [[Prototype].JavaScript me prototype ek core concept hai jo ki inheritance ko support karta hai

const person = {
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  }
};
const student = {
  name: "Amit"
};

student.__proto__ = person;
student.greet(); // Output: Hello, my name is Amit

54 - Shallow Copy - Sallow copy me just main object hi copy hota h. isme memory location(reference) ki jagah value copy hoti h. Agar object ke andar nested object ya array hai, to uska reference copy hota hai — actual data nahi.
(In shallow copy, only the main (top-level) object is copied. Instead of copying the memory location (reference), the value is copied. However, if the object contains a nested object or array, its reference is copied — not the actual data.)

const shallow = Object.assign({}, original);
// ya
const shallow = { ...original }; // spread operator

// let obj = {
// name: "sandeep",
// add : {
//     city : "delhi",
//     state : "up"
// }
// }
// let user = {...obj}
// user.name ="amar"
// user.add.city = "uttar pradesh"
// console.log(obj) // { name: 'sandeep', add: { city: 'uttar pradesh', state: 'up' } }
// console.log(user) // { name: 'amar', add: { city: 'uttar pradesh', state: 'up' } }

55. Deep Copy - Deep copy me main object ke sath uske sub object bhi copy hote h.isme bhi memory location ki jagah value copy hoti h. Deep copy ki apni limitation h. agar isme function use karte h to wo copy nhi hota h.iske solution ke hame lodash ka use kar sakte h.
In a deep copy, not only the main object but also its sub-objects are copied. Here, instead of memory references, the values are copied.

let obj = {
name: "sandeep",
add : {
    city : "delhi",
    state : "up",
    fun : function(){
        console.log("hello")
    }
}
}
let user = JSON.parse(JSON.stringify(obj))//
let user = _.cloneDeep(obj) // lodash deep copy for function copy
user.name ="amar"
user.add.city = "uttar pradesh"

console.log(obj) // { name: 'sandeep', add: { city: 'delhi', state: 'up', fun: [Function: fun] } }
console.log(user)// { name: 'amar', add: { city: 'uttar pradesh', state: 'up' } }

56. Call by value - Jab aap ek variable(Primitive value -number string, boolean) ko dusre variable mein primitive value ke saath assign karte ho, to sirf uski copy jaati hai (only its value is copied.). Dono variables alag memory location mein store hote hain.is me Sirf value ki copy hoti hai, reference nahi.
let a = 10;
let b = a; // b gets a copy of a
b = 20;
console.log(a); // 10 ❗ (original a change nahi hua)
console.log(b); // 20


57. Call by Reference — (Non-Primitive Types)
Jab aap ek object ya array ko dusre variable mein assign karte ho, to uska reference (yaani asli location) copy hota hai.
Dono variables same object/array ko point karte hain. isme sirf reference ki copy hoti hai, value ki nahi.
let obj1 = { name: "Amit" };
let obj2 = obj1; // obj2 gets reference to obj1
obj2.name = "Ravi";
console.log(obj1.name); // "Ravi" ❗ (original bhi change ho gaya)
console.log(obj2.name); // "Ravi"

58 - New  - new ek JavaScript keyword hai jo constructor function  ke saath use hota hai
taaki ek naya object banaya ja sake

59. Type of Object creation 
1. Object Literal
let person = {
    name: "John",
    age: 30,
    greet: function() {
        console.log("Hello, " + this.name);
    }
};
2. Using new Object() Constructor
    const person = new Object();
    person.name = "Amit";
    person.age = 25;
       
3. Using Constructor Function (Custom Object Type)
function Person(name, age) {
  this.name = name;
  this.age = age;
}
const p1 = new Person("Amit", 25);

4. Using ES6 Classes
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
const p1 = new Person("Amit", 25);

60. - What is IIFE (Immediately Invoked Function Expression)
Function jo turant execute ho jaata hai jaisi hi define hota hai.
(function() {
  console.log("IIFE");
})();

61 -  What is Memoization?
Memoization ek performance optimization technique hai technique hai jisme hum function ke previous result ko cache me store rakhte hain, taaki agar future mein same input se same result chahiye ho, to function ko dobara run na karna pade.

62- Stack Memory – Stack Memory wo memory area hai jisme JavaScript primitive data types (number, string, boolean, null, undefined, symbol, bigint) aur function call execution context ko store karti hai.Ye LIFO (Last In, First Out) principle pe kaam karta hai.

63 -  Heap Memory – Dynamic & Big (Objects ke liye)
Heap ek larger memory area hoti hai jo non-primitive (objects, arrays, functions) ke liye use hoti hai.Heap me value ka address (reference) stack me hota hai, asli data heap me hota hai.

64- Object.freeze() object ko completely freeze kar deta hai lock kar deta hai. usme kuch bhi change nahi ho sakta
Koi property add nahi kar sakte.
Koi property delete nahi kar sakte.
Koi property ka value change nahi kar sakte.

const user = {
  name: "Amit",
  age: 25
};
 Object.freeze(user);
user.age = 30;      // ❌ Not allowed
user.city = "Delhi"; // ❌ Not allowed
delete user.name;    // ❌ Not allowed
console.log(user);  // { name: 'Amit', age: 25 }

65 - Object.seal() object ko seal (bandh) kar deta hai.sirf existing values badal sakte ho
Yaani:
❌ Naye properties add nahi kar sakte
❌ Properties delete nahi kar sakte
✅ Lekin existing properties ki value change kar sakte ho

Object.preventExtensions()
❌ Naye properties add nahi kar sakte
✅ Properties delete kar sakte
✅ existing properties ki value change kar sakte ho

typeof null - JavaScript me historical bug hai. typeof null return karta hai "object" due to legacy reasons in early JS spec.
console.log(typeof null); // "object"

66- Optional chaining (?.) ek safe way hai object ya array ke andar deeply nested properties ko access karne ka, bina error ke.
Agar koi property undefined ya null ho toh JavaScript error nahi degi – bas undefined return karegi.
console.log(user?.address?.city); // ✅ undefined (error nahi aayega)

Nullish coalescing (??) ek logical operator hai jo null ya undefined values ko handle karne ke liye use hota hai.
let username = user.name ?? "Guest"; // Agar user.name null/undefined hai toh "Guest" use hoga

67 -  Debouncing & Throttling dono ka use hota hai performance improve karne ke liye, especially jab koi function bar-bar call ho raha ho (jaise scroll, resize, input events).
 - Debouncing (📌 Wait karke call karna) - 
Debouncing ka matlab hota hai function ko tabhi call karo jab user ne last action ke baad kuch time tak kuch nahi kiya ho.
 Example Scenario:
Search box mein user type kar raha hai.
Har keypress pe API call nahi karni chahiye.
Jab user typing stop kare (jaise 300ms ke liye) tabhi API call karo.

- Throttling (📌 Gap-Gap se call karna)
Throttling ka matlab hota hai function ko fixed interval (jaise har 1 second) ke baad hi chalne dena, chahe kitne bhi events aayein.

68- Memory Leak?
JavaScript mein Memory Leak tab hota hai jab aapke program ne memory allocate to kar li, lekin kabhi use release (free) nahi kiya — ya browser usse garbage collect nahi kar paaya.


69. Polyfill -- Polyfill ek custom JavaScript code hota hai jo naye JS feature ka apna version banata hai — taaki wo purane browsers me bhi kaam kare.(modern features ko purane browsers me support karne ke liye add karta hai)

70 ---Event Delegation -
Event delegation ek technique hai jisme aap parent element pe event listener lagate ho, aur child elements ke event usse handle karwate ho.Performance improve hota hai, aur dynamically added elements bhi handle ho jaate hain.
// Example:
document.getElementById("parent").addEventListener("click", function(event) {   
    if (event.target.matches(".child")) {
        console.log("Child clicked:", event.target);
    }
    }

71. Event Bubbling -Jab aap kisi child element pe event trigger karte ho (e.g., click), to wo event sabse pehle us element par execute hota hai, phir uske parent pe, phir uske parent ke parent pe… aur ye process top level (document) tak jata hai.
<div id="parent" style="padding: 20px; background: lightblue;">
  Parent
  <button id="child">Click Me</button>
</div>

<script>
  document.getElementById("parent").addEventListener("click", () => {
    console.log("Parent clicked");
  });

  document.getElementById("child").addEventListener("click", () => {
    console.log("Child clicked");
  });
</script>

72 -- Pure function wo function hota hai jo hamesha same input pe same output deta hai, aur uska koi side-effect nahi hota (jaise global variable ko change karna, console log karna, ya file/DOM access karna). Ye sirf apne input par hi depend karta hai.
function add(a, b) {
  return a + b
}
  add(2, 4); // 6
  add(2, 4); // 6
  add(2, 4); // 6

73 --Impure function wo function hota hai jo same input pe har baar same output nahi deta, ya fir function ke andar koi side-effect hota hai (jaise global variable ko change karna, random number generate karna, ya kisi external cheez ko access karna)
  example ---

let count = 0
function increment() {
  count++
  return count
}
  console.log(increment())  // 1
  console.log(increment())  // 2    
console.log(increment())    // 3


74 . A Generator Function ek aisa function hota hai jo apne execution ko pause kar sakta hai aur baad me resume bhi kar sakta hai. Ye ek iterator object return karta hai jiske through hum values ko ek-ek karke le sakte hain.

function* → ye syntax batata hai ki ye ek generator function hai.
yield → keyword jo ek value ko return karta hai aur function ko pause kar deta hai.

function* myGenerator() {
  console.log("Start");
  yield 1; // pause yahan hoga
  console.log("Middle");
  yield 2; // phir pause yahan hoga
  console.log("End");
}
const gen = myGenerator();
console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); 

agar plus (+) number aur string ke beech me use hota hai, to wo string ko number ke sath concatenate kar deta hai.
// Example: 
console.log('5' + 2); // Output?
// Output: '52' (string concatenation)

agar minus (-) ya multiplication (*) number aur string ke beech me use hota hai, to wo string ko number me convert kar deta hai.
// Example: 
console.log('5' - 2); // Output?
// Output: 3

null - 0 - false - Object
undefined - NaN   -  false - undefind
NaN - NaN   
Infinity - Infinity
true - 1
false - 0
/String - 0
blank string - 0
Object - NaN

DOM (Document Object Model) JavaScript ka core concept hai — ye basically HTML ya XML document ka structured representation provide karta hai, jise JS ke through manipulate kiya ja sakta hai.
1. Core DOM
2️⃣. HTML DOM
3️⃣ .XML DOM
*/




