
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

/* 1 Let keyword
data storing Keyword used for variable declaration in js.
let is block scop.

2. var Keyword
 data storing Keyword used for variable declaration in js.
 var function scop and global scope and var se declare karte h to o window object ki property ban jata h

const- 
Constants are block-scoped, much like variables declared using the let keyword. The value of a constant can't be changed through reassignment (i.e. by using the assignment operator), and it can't be redeclared 

 3. Default Parametrs
Whene we not pass a parametrs in function then we user default parametre.
 function add(a, b=20)
{
    return a+b
}
console.warn(add(22))

4. Template Litral
let str= "this id test";
let string = "angular developer"
console.warn(`nodejs ${str} php ${string}`)

5. Find Function-
return a first array element according to passes condition
let data =[10,20,30,40,50]
let res = data.find((item)=>
     item > 20
)
console.warn(res) // 30

findIndex method - this method return the index of the first element in the array that pass the test
let arr = [2,4,5,6,7,8]
let newArr = arr.findIndex((ele)=>ele > 4)
console.log(newArr) // 2
 
Some method - Check if any of the element in an array pass the test then it return the true.
let arr = [2,4,5,6,7,8]
let newArr = arr.some((ele)=>ele == 5)
console.log(newArr) // true

every method - The every() method of Array instances tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

let arr = [10,9,5,6,7,8]
let newArr = arr.every((ele)=>ele >= 5)
console.log(newArr) // true

6. Arrow Function
its a very simple and basic function . It's anonimouse function, no need a name of function and no return statment in loop
Advantage - This arrow function reduces lots of code and makes the mode more readable.
Arrow function syntax automatically binds “this” to the surrounding code’s context.
Writing the arrow => is more flexible as compared with the writing function keyword.

let arraow = ()=>{
    return "demo";
}
console.log( arraow())

7. Classes
it is a User define class, set of methods and variable

8 Inharitance
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

9. Lexical Scope for this
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

10.Rest Oprator - It is access the remaining element from array.
It is a collection of all remaining elements into an array. with the help of three dotes(...rest).
rest parameter collects items into an array, the spread operator unpacks the collected elements into single elements. jo bhi element ham pass karte h o combine ho jate h. spread me jo combine h unhe divide karte h. Mostly it sued with array and object
function fruits(a,...rest)
{
    console.warn(a,rest)
}
fruits("apaple","banana","kiwi","orange")

11. Spread oprator
It  it's expends the combined array into individual element
Difference - It’s the opposite to rest parameter , where rest parameter collects items into an array, the spread operator unpacks the collected elements into single elements.

const inputWords = ["spray", "limit", "elite", "exuberant", "destruction", "present"];

function getitem(a,b,c,d)
{
    console.log(a,b,b)
}
getitem(...inputWords)

12. Promise in es6
promise block tab execute hota h jab o hame complete output de deta h.
after a code execution then get a output

13. Destructuring Array
 Unpack or expends or divid values from array or object is Destructuring Array.Destructuring Assignment on the left-hand side defined that which value should be unpacked from the sourced variable.

let arr = ["php","java","angular"]
let [arr1,jv,ng]=arr
console.warn(arr1,jv,ng)// php java angular// get all array value

let arr = ["php","java","angular"]
let [arr1,,ng]=arr
console.warn(arr1,ng)// php angular // get first and third array value

13.Destructuring Array with rest oprator
let arr = ["php","java","angular","node"]
let [arr1,...arrx]=arr
console.warn(arr1,arrx) //php [ 'java', 'angular', 'node' ]



15. Exponentiation Oprator 
define a power of integer
console.log(4**2) //16
console.log(2**4**2) //65536 

16. Module
you can use modules to separate codes in separate files as per their functionality. This makes our code organized and easier to maintain.Module is a file that contains code to perform a specific task
module allow the access class property from one file to other files(IMport & export);

17. Splice Method-
Add and remove element from the array.
Add Element---const months= ['jan', 'feb','march', 'april']
// let pusdec = months.splice(4,0,'Decem')
let pusdec = months.splice(months.length,0,'Decem')
console.log(months)//[ 'jan', 'feb', 'march', 'april', 'Decem' ]

IndexOf Method -
method of Array instances returns the first index at which a given element can be found in the array, or -1 if it is not present
Update Element--
const months= ['jan', 'feb','march', 'april']
let findIndex = months.indexOf('march');
console.log(findIndex)

updatemonths=months.splice(findIndex,1,'March')
console.log(months)


18.Map Method-
A ak new array create karta h.jo existing array h use hi call karke new array create karta h.
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


19. Reduce Method - the reduce method executes the reduser function(that you provide) on each element of the array. resulting in single output value. its take a four parameter.
it convert 3d or 2d array into a single dimantionsl array. 
const arr = [1,2,3,4,5,6];
let total = arr.reduce((accumulator,currele,currindex,arr)=>{
    return accumulator+= currele
})
console.log(total) // 21

20-slice method - extract a part of string (start index, end endex) take a negative index(1,-5)
21 - substring -  extract a part of string (start index, end endex). it not accept negative index, return only first parameter value.

22-substr- extract a part of string (start index, end endex). and second parameter return the part of extracting string. and not take nagative value.return a blank on nagetive value

23. Replace()
ak value ke sath dusri value ko replace karta h
let str ="this id demo";
let replace = str.replace('demo','test')
console.log(replace)// this id test

24. split method - Convert a string into array with comma saprated.

ES17
25.Object.value()-
get object values
const obj ={name:"rame", age:50}
console.log(Object.values(obj))//[ 'rame', 50 ]

26. Object.entries()
get object key and value pair in array
const obj ={name:"rame", age:50}
console.log(Object.entries(obj))// [ [ 'name', 'rame' ], [ 'age', 50 ] ]

ES19
27. flate Method- flate multidimantional array in single array
const arr =[
   {name:'ram',age:45},
   [{tes:'demo',php:'jaua'},
   [{angulaer:'lag'},{node:"express"}]]
]
console.log(arr.flat(Infinity))

28. for..of Loop - it Return value of array.
let list = [4, 5, 6];
for (let i of list) {
   console.log(i); // "4", "5", "6"
}
29. for..in Loop -it Return key of array.

let list = [4, 5, 6];
for (let i in list) {
   console.log(i); // "0", "1", "2",
}


30. Call Method - it is  predefind method in javascript. Ak object dusre object ke method ka use kar sakta h by using the call() method.

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

31. Appyle Method() - Apply method() is similar to the call() method. difference is that  the call method takes a arguments seprately fun a(parameter1,par2). the Apply method takes a arguments as an array

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

32. Bind Method() - Bind method ka use kishi object ko common function ke sath bind kar sakte h.and a function different result deta h jab iski need ho. WE na bind the the object with common function

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

33. JavaScript data types.
There are a total of 7 basic data types supported by JavaScript. Each one of them is briefed up as follows:

Boolean – Represents true and false values.
Null –  ek primitive value hai.Represents empty, nothing, and unknown type of values
Number – Represents both integer and floating-point values.
Object – Used for storing collections of data or more complex entities
String – Represents single-character, multi-character, and alphanumeric values.
Symbol – Used for creating unique identifiers for objects
Undefined – Represents value not assigned. If a variable is only declared and not assigned in JS, it

34.Use strict - defines that the JavaScript code should be executed in "strict mode".
With strict mode you can, for example, not use undeclared variables.



34. Currying
 Currying means ek function ko multiple functions mein break karna jo one argument lete hain.
 function add(a) {
  return function(b) {
    return a + b;
  }
}

console.log(add(2)(3)); // 5

35.Prototype : Every JavaScript object has a hidden internal property called [[Prototype].JavaScript me prototype ek core concept hai jo ki inheritance ko support karta hai

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

36 - Shallow Copy - Sallow copy me just main object hi copy hota h. isme memory location(reference) ki jagah value copy hoti h. Agar object ke andar nested object ya array hai, to uska reference copy hota hai — actual data nahi.
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

37. Deep Copy - Deep copy me main object ke sath uske sub object bhi copy hote h.isme bhi memory location ki jagah value copy hoti h. Deep copy ki apni limitation h. agar isme function use karte h to wo copy nhi hota h.iske solution ke hame lodash ka use kar sakte h.
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

38. Call by value - Jab aap ek variable(Primitive value -number string, booklean) ko dusre variable mein primitive value ke saath assign karte ho, to sirf uski copy jaati hai. Dono variables alag memory location mein store hote hain.is me Sirf value ki copy hoti hai, reference nahi.
let a = 10;
let b = a; // b gets a copy of a
b = 20;
console.log(a); // 10 ❗ (original a change nahi hua)
console.log(b); // 20


Call by Reference — (Non-Primitive Types)
Jab aap ek object ya array ko dusre variable mein assign karte ho, to uska reference (yaani asli location) copy hota hai.
Dono variables same object/array ko point karte hain. isme sirf reference ki copy hoti hai, value ki nahi.
let obj1 = { name: "Amit" };
let obj2 = obj1; // obj2 gets reference to obj1
obj2.name = "Ravi";
console.log(obj1.name); // "Ravi" ❗ (original bhi change ho gaya)
console.log(obj2.name); // "Ravi"

39 - New  - new ek JavaScript keyword hai jo constructor function  ke saath use hota hai
taaki ek naya object banaya ja sake

40 Type of Object creation 
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

41 - What is IIFE (Immediately Invoked Function Expression)
Function jo turant execute ho jaata hai jaisi hi define hota hai.
(function() {
  console.log("IIFE");
})();

42 -  What is Memoization?
Memoization ek technique hai jisme hum function ke previous result ko yaad (cache) rakhte hain, taaki agar future mein same input se same result chahiye ho, to function ko dobara run na karna pade.

43- Stack Memory – Fast & Ordered (Primitive ke liye)
Stack ek linear (last-in-first-out) memory area hoti hai, jo primitive values aur function calls ke liye use hoti hai.isme value seedha store hota hai.

44 -  Heap Memory – Dynamic & Big (Objects ke liye)
Heap ek larger memory pool hoti hai jo non-primitive (objects, arrays, functions) ke liye use hoti hai.Heap me value ka address (reference) stack me hota hai, asli data heap me hota hai.

45- Object.freeze() object ko completely freeze kar deta hai lock kar deta hai. usme kuch bhi change nahi ho sakta
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

46 - Object.seal() object ko seal (bandh) kar deta hai.sirf existing values badal sakte ho
Yaani:
❌ Naye properties add nahi kar sakte
❌ Properties delete nahi kar sakte
✅ Lekin existing properties ki value change kar sakte ho

47- Optional chaining (?.) ek safe way hai object ya array ke andar deeply nested properties ko access karne ka, bina error ke.
Agar koi property undefined ya null ho toh JavaScript error nahi degi – bas undefined return karegi.
console.log(user?.address?.city); // ✅ undefined (error nahi aayega)

48 -  Debouncing & Throttling dono ka use hota hai performance improve karne ke liye, especially jab koi function bar-bar call ho raha ho (jaise scroll, resize, input events).
Debouncing (📌 Wait karke call karna) - 
Debouncing ka matlab hota hai function ko tabhi call karo jab user ne last action ke baad kuch time tak kuch nahi kiya ho.
 Example Scenario:
Search box mein user type kar raha hai.
Har keypress pe API call nahi karni chahiye.
Jab user typing stop kare (jaise 300ms ke liye) tabhi API call karo.

 Throttling (📌 Gap-Gap se call karna)
Throttling ka matlab hota hai function ko fixed interval (jaise har 1 second) ke baad hi chalne dena, chahe kitne bhi events aayein.

49- Memory Leak?
JavaScript mein Memory Leak tab hota hai jab aapke program ne memory allocate to kar li, lekin kabhi use release (free) nahi kiya — ya browser usse garbage collect nahi kar paaya.

50.setImmediate() tab chalta hai jab current event loop phase complete ho jaata hai.
// setTimeout() ke comparison mein, setImmediate() ko use karne ka fayda ye hai ki ye current phase ke baad turant execute hota hai, bina kisi delay ke.
setImmediate(() => {
    console.log("⚡ setImmediate");
  });

51- process.nextTick() ek Node.js specific function hai
jo callback ko event loop ke current phase ke end me run karta hai — sabse pehle.Ye normal async functions jaise setTimeout, setImmediate se pehle chalta hai — lekin event loop ke andar.
process.nextTick(() => {
  console.log("🔥 Inside process.nextTick");
});
*/




