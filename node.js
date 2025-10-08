/* 
1. NODE JS  - > node js is runtime environment. build on Chrome's V8 javascript engine. It is used to create server-side web applications. Ye Chrome V8 engine par based hai aur non-blocking, event-driven I/O model use karta hai. Node js na koi language h na hi koi framwork h.
Node js run is single thread (AK time pe ak hi request handel karna), 
Non-blocking:
Jab Node.js kisi slow kaam (like file read, DB fetch) ko kare, to wo uska result aane tak rukta nahi hai.
Wo kaam background me bhej deta hai aur aage badh jaata hai.

Event-driven:
Jab wo background task complete ho jaata hai, tab Node.js event ke through batata hai: "Kaam ho gaya!"
Aur tab aapka callback ya promise chal jaata hai.
Event-driven I/O ka matlab hai: Jab bhi koi input/output (I/O) ka kaam complete hota hai — jaise file read, database query, HTTP request — tab Node.js event ke through batata hai:
“Kaam ho gaya, ab aap response de sakte ho!”

Request aata hai (file read, API call, etc.)
Node.js background me kaam start karta hai
Kaam complete hone pe event trigger hota hai
Node.js callback function chalata hai

2 - Event Loop - Event loops handle asynchronous callbacks in Node.js. ensuring that non-bloking task are executed efficiancy. event loop helps manage multiple task without bloking the main thread.  Event loop ka kam basicaly jo function execute hone me thoda time leti h o  call queue environment me chali jati h. jo function call  ho jata h o khud ka Execution Context create karta h or execute hoke result return karta h. or jab call queue code execute hone ke bad o Message Queue me aa jati h. to event loop yaha pe check karta h ki mgs queue me kuch h ya nhi, to event loop us code ko  Call stack me rakh leta h. or output aa jata h. execution stack se hame result mil jata h.            
Event loops handle asynchronous callbacks in Node.js. It is the foundation of the non-blocking input/output in Node.js, making it one of the most important environmental features.  

jab async function call hota h to libuv use background me  “Thread Pool” ke through handel karti hai.jo call queue env me use process karti hai. jab kaam complete ho jata hai tab event trigger hota hai. To jaise hi event trigger hota hai, woh callback ready ho jaata hai. libuv callback ko event queue me bhej deta h. yaha pe event loop bar bar event que and call stack ko check karta ki call stack empaty ha ya nhi. agr empaty hota hai. event loop use callback ko call stack me rakh deta hai for the execution . Event Loop phases -  Timers → Pending → Poll → Check → Close

3 - Micro-task (Micro Queue) - Micro-task wo tasks hote hain jo current execution stack ke end me, lekin next macro-task se pehle execute hote hain. Ye higher priority hote hain.
Promise.then() / Promise.catch() / Promise.finally()
process.nextTick() (Node.js specific, promises se bhi pehle execute)
queueMicrotask()

4. - Macro-task (Task Queue)
Macro-task wo tasks hote hain jo event loop ke ek iteration ke end me execute hote hain. Ye generally I/O operations, timers aur high-level events ke liye use hote hain.Lower priority: Micro-tasks ke baad execute hote hain.Ek iteration me ek macro-task execute hota hai
setTimeout()
setInterval()
setImmediate()

INSTALLING NODE JS
- Download node js and install it.
- Create a one file like(index.js)
- install node package initialize(npm init)
- INstall express(npm install express)


2. NPM - NPM stands for Node Package Manager, responsible for managing all the packages and modules for Node.js.

3. synchronous - synchronous operations tasks are performed one at a time and only when one is completed, the following is unblocked. In other words, you need to wait for a task to finish to move to the next one. 

4.asynchronous-asynchronous operations, on the other hand, you can move to another task before the previous one finishes. This way, with asynchronous programming you’re able to deal with multiple requests simultaneously, thus completing more tasks in a much shorter period of time.

5. require() is used to load modules in CommonJS format.
Node.js ka default module system hai CommonJS.
Synchronous hota hai: module ko load karte hi use kiya ja sakta hai.
Har module module.exports ke through values return karta hai.
const fs = require('fs');

6. import is ES6 module system, asynchronous and modern.
import is part of ES6 Modules (ECMAScript Modules / ESM).
Asynchronous behavior.Modern JS ka standard hai, browsers me bhi use hota hai.
File ka extension .js likhna padta hai (ya use "type": "module" in package.json).
import { readFile } from './utils.js';

7. Data Steaming - Streaming means processing data in small chunks instead of loading the entire data into memory at once. They are data-handling method. Streams are a way to handle reading/writing files, network communications, or any kind of end-to-end information exchange in an efficient way.
 There are 4 types of streams in Node.js:
  1. Writable: streams to which we can write data. For example, fs.createWriteStream() lets us write data to a file using streams.
  2. Readable: streams from which data can be read. For example: fs.createReadStream() lets us read the contents of a file.
  3. Duplex: streams that are both Readable and Writable. For example, net.Socket
  4. Transform: streams that can modify or transform the data as it is written and read. For example, in the instance of file-compression, you can write compressed data and read decompressed data to and from a file.

8.event emitter is a pattern that listens to a named event, fires a callback, then emits that event with a value.(Event Emitter node js me APi ke through hi ban sakta h)
Node.js me event-driven architecture ka use hota hai taaki asynchronous code ko efficiently handle kiya ja sake — jab event hota hai tabhi uska callback run hota hai.

const EventEmmiter = require('events');
const eventEmitter = new EventEmmiter();

app.on('countApi',()=>{
  console.log("Count API called");
})

app.get('', (req, res)=>{
  eventEmitter.emit('countApi', data);})

9.package.json file-
The package.json  used to install multiple packages in a project. This file holds the metadata for a particular project. The package.json file is found in the root directory of any Node application or module

10. package.lock.json -  used to lock dependencies to a specific version number. is created for locking the dependency with the installed version. It will install the exact latest version of that package in your application and save it in package.json.

11. Express.js package-
Express is a flexible Node.js web application framework that provides a wide set of features to develop both web and mobile applications.


13.asynchronous and non-blocking APIs -A Node.js-based server never waits for an API to return data. Instead, it moves to the next API after calling it, and a notification mechanism from a Node.js event responds to the server for the previous API call
12.open a file in Node.js- fs.open( filename, flags, mode, callback )
var fs = require('fs');
// Open file demo.txt in read mode
fs.open('demo.txt', 'r', function (err, f) {
  console.log('Saved!');
});

14. middleware- Middleware is a function that receives the request and response objects. is is Update or modify the request and the response objects.Middelware function is function which is use with routes.

15 - Web Service - It is a software system that supports machine-to-machine interaction over a network.

16 - API -  is a software interface that allows two applications to interact with each other without any user intervention. API is a collection of software functions and procedures. In simple terms, API means a software code that can be accessed or executed. API is defined as a code that helps two different software’s to communicate and exchange data with each other. 

17 - PUT - PUT is a request method supported by HTTP used by the World Wide Web. The PUT method requests that the enclosed entity be stored under the supplied URI. If the URI refers to an already existing resource, it is modified and if the URI does not point to an existing resource, then the server can create the resource with that URI.

18 - POST - POST is a request method supported by HTTP used by the World Wide Web. By design, the POST request method requests that a web server accepts the data enclosed in the body of the request message, most likely for storing it. It is often used when uploading a file or when submitting a completed web form. 
 
19- Nodejs is single thread or multi thread - node.js use Single Threaded Event Loop Model architecture to handle multiple concurrent clients like JSP, Spring MVC, ASP.NET, HTML, Ajax, jQuery, etc. are other web technologies that can be used rather than node.js but these listed technologies follow “Multi-Threaded Request-Response” architecture to handle multiple concurrent clients.

20. A RESTful API - is an architectural style for an application program interface (API) that uses HTTP requests to access and use data. That data can be used to GET, PUT, POST and DELETE data types, which refers to the reading, updating, creating and deleting of operations concerning resources

21. The body-parser body-parser ek Express middleware hai jo request ke body(raw JSON format exe - '{ "name": "Amar", "age": 25 }' ) ko read karke usko JavaScript object({ name: "Amar", age: 25 }
) me convert karta hai, taaki aap easily use kar pao.
const bodyParser = require('body-parser')
app.use(bodyParser.json())

22. API - (API) is a set of subroutine definitions, protocols, and tools for building software and applications.

23. Web API as the name suggests, is an API over the web which can be accessed using HTTP protocol

24. Web soket - WebSocket ek protocol hai jo browser aur server ke beech me ek live, full-duplex (2-way) connection establish karta hai.Client aur Server dono ek hi connection par ek dusre ko message bhej sakte hain — bina baar-baar connect/disconnect kiye.
🧠 Use Cases of WebSocket:
✅ Real-time chat app (WhatsApp, Messenger)
✅ Live stock prices / crypto charts
✅ Multiplayer games
✅ Live notifications (Amazon, Flipkart)
✅ Collaborative editing (Google Docs)

ejs

25. Third party middleware - Cors, compression, helmet
25 JWT Token - JWTs are used as a secure way to authenticate users and share information. securely transmitting information between parties as a JSON object

26. Child Process -"Child Process ka matlab hai ki Node.js me aap main program ke alawa ek naya program/process chala sakte ho — jo alag alag kaam kare bina main program ko block kiye. Node.js khud single-threaded hota hai, lekin child_process module ki help se aap background me dusre processes chala sakte ho — bina main thread ko block kiye.
Node.js me ek alag process create karke heavy kaam karwana, taki main event loop block na ho aur server fast rahe

exec() -	Ek baar ka kaam, pura result ek sath milta hai
spawn()	- Stream wala kaam, real-time output milta hai
fork()	- Dusra Node.js file chalu karna, dono ke beech message bhejna
Why Use Child Process?
✅ Heavy CPU tasks ko isolate karne ke liye
✅ External command (like Python, bash) run karne ke liye
✅ Parallel execution karne ke liye
✅ Cluster/Worker Thread se low-level control ke liye


27.Web API - 

28. web services is provide the cloud computing services(cloud based serives), like Compute, storate, Developer tool,datbase, networking security etc.


29. Multer ek Node.js middleware hai jo file uploads ko handle karta hai — specially multipart/form-data form ke liye.
Yani agar user koi image, document, ya file upload karta hai (form ya API ke through), toh Multer us file ko read karke server par save karta hai (ya memory me store karta hai).

Thread - ek chhoti execution unit jo process ke andar chalti hai.
Har thread apna kaam independently execute kar sakta hai.

Single thread - Sirf ek execution line jo code ko execute karti hai.
Ek time pe sirf ek hi task execute hota hai (step by step).

30. Cluster Module - "Cluster module ka use Node.js me isliye hota hai taaki ek hi application ko ( multiple CPU cores) multiple processes me run kiya ja sake, jisse performance improve ho aur multiple users ka load efficiently handle ho sake."Node.js by default single-threaded hota hai. Iska matlab ek time par sirf ek request handle karta hai — lekin fast kyunki non-blocking hota hai.Master process sirf workers manage karta hai, client request handle nahi karta
 Lekin agar CPU-intensive kaam ho (jaise large calculation ya heavy processing), to Node.js block ho sakta hai.
 🔥 "Jab multiple users ek hi request ya API ko same time pe req karte hain, tab cluster ka use hota hai!"
 jab Multiple concurrent requests aati hain to Har worker ek request parallel handle karta hai.
  Ek worker crash ho jaye	Cluster auto restart karta hai usko.
  Jab user request bhejta hai, toh request OS ke load balancer ke through kisi free worker ko assign hoti hai
Worker request handle karta hai aur response bhejta hai
 Solution – Cluster Module
> Cluster module ka use karke hum Node.js app ko multi-core CPU pe run kara sakte hain — multiple child processes bana ke app ko fast banata hai.
Har process:
Apni memory use karta hai
Same server port pe listen karta hai
Independent hota hai

How It Works:
cluster.isPrimary:
Ye check karta hai ki process Master hai ya Worker
Master sirf fork karta hai → multiple worker processes

Fork = ek naya Node process create karna
Node.js process = ek running instance of Node.js program
Matlab jab aap node index.js run karte ho → ek Node process start hota hai
Is process ke paas apna memory, CPU thread, event loop hota hai
Worker process ka kaam → actual server run karna aur client requests handle karna
cluster.isMaster or cluster.isPrimary: = false ka matlab ye process worker hai, jo actual server run karega aur client requests handle karega.

cluster.fork():
Naya process banata hai → worker
Har worker Express server run karega

os.cpus().length:
Kitne CPU cores hai machine me, woh batata hai
Usi hisaab se workers create karte hain

cluster.on('exit'):
Jab koi worker crash kare, tab Master naya worker fork kare

31. CPU Core Kya Hota Hai?
🔹 Core ek independent processing unit hota hai CPU ke andar.
Pehle ke CPUs mein sirf 1 core hota tha (Single-core). Aaj kal ke CPUs mein multiple cores hote hain — jaise Dual Core, Quad Core, Octa Core, etc.Ek aisa CPU jisme ek se zyada cores (processing units) hote hain, jinke through multiple tasks parallelly run ho sakte hain.

32. Stream -- Stream ek aisa tareeka hai jisse hum bade data ko chhote chhote tukdo me process kar sakte hain bina poora memory bhar ke.
Types of Streams in Node.js. Non-blocking hota hai aur memory efficient hota hai.
Node.js me streams ka use hota hai jab hume data ko read/write karna ho

Stream Type	Kya karta hai
Readable -	Data read karta hai (e.g. file, network)
Writable -	Data write karta hai
Duplex  --	Read + Write dono karta hai (e.g. socket)
Transform --- 	Data ko modify karta hai beech me (e.g. compression)
Example ----
 const readStream = fs.createReadStream('exe.text', 'utf8');

// Write stream banate hain
const writeStream = fs.createWriteStream('example.text');

// Data ko directly pipe karte hain — read se write tak
readStream.pipe(writeStream);

// Optional: Events track karne ke liye
readStream.on('data', (chunk) => {
console.log('🔹 Chunk received:', chunk.length, 'bytes');
});

writeStream.on('finish', () => {
console.log('✅ File written successfully using stream!');
});


33. process - ek global object hai jo Node.js runtime ke current execution environment ke baare mein info deta hai.
iska kaam System-level info dena, Process arguments lena, Errors handle karna
like  - Environment Variables Access Karna (process.env) - process.env.PORT
Program ko Manually Exit Karna - process.exit(1); 

34. JWT Token Kya Hota Hai?
JWT (JSON Web Token) ek secure token hota hai jo user identity ko digitally represent karta hai — jise mostly authentication aur authorization ke liye use kiya jata hai.
Jab user login karta hai, server ek token deta hai jisme user ka data hota hai. Ye token client (browser/app) me store hota hai. Aage ke requests me wahi token bhejna padta hai to prove user is logged in.

35. Security Practices in Node.js -
1. Environment Variables ka use karo (dotenv)
dotenv ek Node.js package hai jo aapko environment variables ko ek alag file (.env) me rakhne aur unhe securely use karne ki suvidha deta hai.
2. Use helmet for setting secure HTTP headers
3.Rate Limiting lagao (npm install express-rate-limit)
4. Data Validation (Joi / express-validator)
5. Stack Trace? - Jab aapke code me error aata hai, Node.js uska stack trace deta hai — yaani error ka complete path: kaunse file, kaunse line, kaunse function me error hua.
6. Database Optimization
Indexes: frequently queried fields me indexes lagao


36 -- improve the API performance
1️. Use Asynchronous / Non-blocking Code
2️. Use Clustering / Multi-core
3. Database Optimization
Indexes → frequently queried fields fast
Connection pooling → DB connection har request me na bane
Select only required fields → unnecessary data avoid karo
4. Avoid Heavy Computation in Main Thread
CPU intensive tasks → worker_threads me do
5. Input Validation & Early Rejection
6.Connection Pooling: har request me new DB connection create na ho
8.Use Streaming for Large Data

36. Buffer - Buffer ek temporary memory area hota hai jo binary data (0s & 1s) ko store karta hai — especially tab jab data file, network, stream ya I/O se aata hai.

File read karte waqt
Video/audio stream karte waqt
Network socket me data bhejte/lete waqt
Binary image data store karne ke liye

Buffer	Pura data memory me ek sath load hota hai, fir process hota hai.
exe - fs.readFile()
Stream	Data thoda-thoda chunk me aata hai, aur aate hi process hota jaata hai.
exe - fs.createReadStream()

37. process.nextTick(callback)- ek Node.js ka special function hai jo callback ko "event loop ke current phase ke baad immediately chalata hai. current operation complete hone ke baad aur next event loop iteration se pehle execute ho jaye.
There is a special function in Node.js that runs the callback immediately after the current phase of the event loop, meaning it executes after the current operation is complete but before the next iteration of the event loop begins.

38. setImmediate - ek asynchronous function hai jo Node.js me use hota hai callback ko next event loop phase me run karne ke liye (execute this function on the next iteration of the event loop) Jab aap chahte ho ki koi kaam thoda baad me chale, jab Node.js ke event loop ka ek round complete ho jaye (especially I/O ke baad), tab aap setImmediate() use karte ho.Kaam complete hone ke baad turant nahi, lekin agle round me chala do.

39. core modules - Core modules wo hote hain jo Node.js ke sath built-in aate hain. Aapko inhe install karne ki zarurat nahi hoti.
fs	 ---  File system operations (read/write file)
http	 ---  	Web server banana
https	 ---  	Secure web server
path	 ---  	File path handle karna
url	 ---  	URL parsing aur formatting
os	 ---  	Operating system ke info lena (CPU, RAM, etc.)
events	 ---  	Event emitter banana aur listen karna
stream	 ---  	Streams handle karna (large file/data chunks)
util	 ---  	Utility functions (inherit, promisify, etc.)
querystring		 ---  Query string parse/format karna
crypto	 ---  	Encryption, hashing, secure data
zlib	 ---  	Compression (gzip, deflate)
child_process	 ---  	External command run karna / child thread

40. libuv ek  Node.js ki c/c++ layer ki library hoti jo task ko asynchronous aur non-blocking banane ke liye background me kaam karta hai.() engine hai jo event loop ka kaam chalata hai aur system-level tasks ko handle karta hai — taaki Node.js non-blocking ban sake.Jab aap Node.js me setTimeout(), fs.readFile(), http requests, ya koi bhi async operation use karte ho, to wo kaam libuv handle karta hai, Event Loop and Thread Pool ke through.Ye background me thread pool use karta hai (multithreaded kaam) — jaise file system access, DNS lookup, etc.Yeh Event Loop, Thread Pool, I/O handling jaise kaam sambhalti hai..

41. Libuv is an engine that runs the event loop and handles system-level tasks — so that Node.js can be non-blocking.
Whenever you use setTimeout(), fs.readFile(), HTTP requests, or any asynchronous operation in Node.js, libuv is responsible for handling those tasks through the Event Loop.

42. Node.js ek runtime environment --- hai jo JavaScript code ko directly system pe (terminal ya server pe) execute karta hai bina browser ke use ke.
Isme Google ka V8 JavaScript engine hota hai jo JavaScript ko fast machine code me convert karta hai, aur libuv library hoti hai jo asynchronous I/O operations jaise file read, network request, timers, etc. ko efficiently handle karti hai.
Is wajah se Node.js non-blocking, event-driven aur lightweight hota hai – aur backend development ke liye perfect mana jaata hai.

43. Framework  -- ek ready-made structure ya foundation hota hai jo developers ko ek organized way me application banane me help karta hai.
Isme pre-written code, libraries, aur rules hote hain jinhe follow karke aap faster aur maintainable apps develop kar sakte ho.

44. Node.js ke Top Features
1. Asynchronous & Non-blocking I/O
2.Single-Threaded but Highly Scalable
3.Event-Driven Architecture
4. Cross-Platform
5. Node Package Manager
6.Real-Time Application Support
7.Streaming and Buffering

45. Event-Driven Architecture ka matlab hota hai:
Event-Driven Architecture in Node.js ek aisa model hai jisme har kaam (function) kisi event ke trigger hone par hi execute hota hai. Ye model Node.js ko asynchronous aur non-blocking banata hai — jo high performance ke liye perfect hai.
or a Non-blocking Execution, High Performance & Scalability, Asynchronous I/O operations ke liye responsible hota hai.


Kaise kaam karta hai ye architecture?
Node.js ka engine (libuv) use karta hai:
Event Loop: Continuously check karta hai ki koi event fire hua ya koi kaam complete hua?
Event Emitter: Har asynchronous kaam ek event emit karta hai (like 'done', 'error', 'data').
Callback Queue: Wo function jise aapne diya tha event ke response me — usko event loop queue se uthakar execute karta hai.

"Jab file mil gayi" → File system se data read complete hua.
"event trigger hua" → Node.js ne internal 'complete' event trigger kiya
"aur callback chala" → Aapka diya hua function (err, data) => {...} run hua

Request aata hai (file read, API call, etc.)
Node.js background me kaam start karta hai
Kaam complete hone pe event trigger hota hai
Node.js callback function chalata hai

46. Core components of Event-Driven Architecture in Node.js:
1. Event Loop: Ye continuously check karta hai ki koi event fire hua ya nahi.
2. Event Emitter: Ye events ko emit karta hai jab koi asynchronous kaam complete hota hai.
3. Callback Function: Jab event fire hota hai, toh uske saath associated callback function chalaya jata hai.
4. Event Handlers: Ye wo functions hote hain jo specific events ke liye lik
he gaye hote hain — jaise file read hone par kya karna hai.

Node.js single-threaded hota hai JavaScript execution ke liye, lekin background tasks ke liye multiple threads ka use karta hai, jise "Thread Pool" kehte hain.


47. fs Module in Node.js –
fs ka full form hai File System, aur ye Node.js ka built-in module hai jo file aur folder ke saath kaam karne ke liye use hota hai.
1. fs.readFile()
📌 File ka content read karta hai (asynchronously).

2. fs.writeFile()
📌 File me naya data likhta hai. Agar file nahi hai to create karta hai.

3.fs.appendFile()
📌 File ke end me data add karta hai (overwrite nahi karta).
fs.appendFile('demo.txt', '\nNew line added', (err) => {
  if (err) throw err;
  console.log('Data appended');
});

4. fs.unlink()
📌 File ko delete karta hai.
 fs.unlink('demo.txt', (err) => {
  if (err) throw err;
  console.log('File deleted');
});

6. fs.rename()
📌 File ka naam ya location change karta hai.
 fs.rename('demo.txt', 'newDemo.txt', (err) => {
  if (err) throw err;
  console.log('File renamed');
});


8. fs.mkdir() and fs.rmdir()
📌 Directory (folder) banata hai ya delete karta hai.

9.fs.mkdir('myFolder', (err) => {
  if (err) throw err;
  console.log('Folder created');
});

10. fs.rmdir('myFolder', (err) => {
  if (err) throw err;
  console.log('Folder deleted');
});

11. fs.readdir()
📌 Folder ke andar sabhi files/folders ke naam deta hai.
fs.readdir('.', (err, files) => {
  if (err) throw err;
  console.log(files); // array of file/folder names
});

48. REPL (Read-Eval-Print Loop) is Node.js's interactive shell which lets developers test JavaScript code directly in the terminal. It reads the input, evaluates it, prints the result, and loops again.

49. Common Node.js Global Objects:
__dirname	            ---           Current directory ka path
__filename	            ---           	Current file ka full path
global		            ---           Global scope object (browser ke window jaisa)
require()	            ---           	Module import karne ke liye
module	            ---           	Current module info
exports	            ---           	Cheeze export karne ke liye
process	            ---           	System + runtime info
setTimeout()	            ---           	Timer set karne ke liye
clearTimeout()	            ---           	Timer cancel karne ke liye
setInterval()		            ---           Repeat code after time
Buffer		            ---           Binary data handle karne ke liye

50. module.exports is used to export functions, objects, variables, or classes from a file (module) so they can be used in another 
// math.js
function add(a, b) {
  return a + b;
}
module.exports = add;

// app.js
const add = require('./math');
console.log(add(2, 3)); // 5

53. Handdle the Asyncrouse code in Node.js
Callbacks → basic, old school
Promises → readable, chainable, modern
Async/Await → easiest, synchronous style, error handling easy
EventEmitter → events based async
Promise.all / Promise.race → parallel async task management

*/

