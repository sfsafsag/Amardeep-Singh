/* 
1. angular - Its a javascript framwork for building web application. the angular now comes with every latest feature you need   to build complex application. angualer is type script based free and open source web application framwork lead by angular team  at google. It's writen in type script.

Angular CLI ek command-line tool hai jo Angular applications ko
create, build, serve, test, lint, deploy karne ke liye use hota hai.

tsconfig.json ek TypeScript configuration file hai jo TypeScript compiler (tsc) ko batati hai ki project ka code kaise compile karna hai.

npm install -g @angular/cli@latest.
ng --version
ng new GettingStarted

ANgular bootstaping - 
1. firstly Main.ts file run hoti h. jisme hamare application ke root module(app.module) inject hota h.
2. then app.module.ts file run hoti h. iske andar hamare application ke root component(app.component) inject hota h. 
declarations: [AppComponent],
imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, ReactiveFormsModule],
providers: [],
bootstrap: [AppComponent]
export class AppModule { }
3. then app.component.ts file run hoti h.
4. then index.html file run hoti h.


synchronous - synchronous operations tasks are performed one at a time and only when one is completed, the following is unblocked. In other words, you need to wait for a task to finish to move to the next one. 

asynchronous-asynchronous operations, on the other hand, you can move to another task before the previous one finishes. This way, with asynchronous programming you’re able to deal with multiple requests simultaneously, thus completing more tasks in a much shorter period of time. 

2. Component - The component is the basic building block of Angular. It has a selector, template, style, and other properties.The Component is responsible to provide the data to the view.The Angular applications will have lots of components. Each component handles a small part of UI.

3 .Obsrvable - Observable ek object hota hai jo asynchronous data stream ko represent karta hai. it is handel the request and responce of angualr application. and it is responsible for handing the Asynchronouse programing in angular.we have  to subscriber the observalbe to get the  result.observalbe RXJS library ka ak feature h.Agar aap unsubscribe() nahi karoge to memory leak ho sakti hai — kyunki component destroy hone ke baad bhi observable ka listener active rahega.

4. Interceptor - it is responsible for modify the HTTP Request by intercepting it before the Request is sent to the back end.The Interceptor can be useful for adding custom headers to the outgoing request.
intercepter http request ko modyfy karne ke liye use hota.OR out going request karne se pehle custom header add karne me usefull hota h.(jaise ki request karne se pehle request ko intercept karke authtoken add kar sakte.)

5 .Auth Guard - Allow us to controll the accebilty of routes based on condition provided by auth guard class
 - type of guard
 a. CanActivate- CanActivate is used to control the accessibility of the current route.
 b. CanActivateChild - CanActivateChild is used to prevent access to child routes of a given route, so by using this you don’t need to add canActive on each child route, in other words, you just need to add canActiveChild to parent route and it will work for child routes as well.(parent route ke child ke route ki accessbility ko conteroll karta h.)
 C - CanLoad - ek route guard hai jo lazy-loaded modules ke access ko control karta hai.Ye module load hone se pehle check karta hai ki user authorized hai ya nahi.Agar guard false return kare → module load nahi hota.
 D - CanDeactivate - CanDeactivate ek route guard hai jo current route se exit karne se pehle check karta hai.
  Ye useful hai jab aapko user ko warn karna ho, jaise: unsaved changes form me.
  Agar guard false return kare → user ko route se exit nahi hone deta.

 6. Resolver  -  Resolver is used for pre-fetching some of the data when the user is navigating from one route to another. It can be defined as a smooth approach for enhancing user experience by loading data before the user navigates to a particular component. Angular me Resolver ek service hoti hai jo route load hone se pehle data fetch kar deti hai.
Matlab agar aapke component ko data chahiye route activate hone se pehle, to resolver use hota hai.
Ye mainly API calls ya async data fetching ke liye useful hai.

 7. Router Outlet- it is a dinamic component of angular package where our view is loaded based on router navigation.(it is a place where router navigation  component is display)

 8. Routing - Paging navigation.

 9. Decorator - it a feature of type script and are implemented as function.this function suply metadata to angular (means a function class, property values ke bare me metadata provide , suply and pass karta h  angular ko.) it is start with @ symbol follow by brackets and argument.
 Ye decorators compile time pe Angular ko instructions dete hain ki kis class ko kaise treat karna hai.
 decorator run at a time when application is run.

Angular me 4 main types ke decorators hote hain:
Class Decorator → Component/Service/Directive define karte hain
Property Decorator → Input/Output ya View access karte hain
Method Decorator → Host events handle karte hain
Parameter Decorator → DI tokens specify karte hain 

 10.data Binding- rendring data from component to html
 a. Interpolution - when return a string value then we use interpolution({{}})
 b.Property Binding- when return a Boolean value then we use property binding([])
 c.Event Binding - when we perform action on Buttons like Submit,Onclick, Onblur.
 d.Two way Binding - same time pe same value hit karte h. component to html and HTML to component

11.Template Driven Form -it a symple Basic form.based on Template(HTML).isme form ka logic zyada tar HTML template me likha jata hai,

12. Reactive Form - Reactive form are form where we define the structure of the form in the component class. we create the form model with form group,form control, and FromArray. We also define the validation rules in the component class. then we bind it to html form in the template.  Reactive form are form where we define the scructure Used for complex form. its based on Type Script. we are define the scrucor of form in the type script code.and setup the html form. and manual connect the html with TS code. 

FormBuilder -  Creating multiple form control instances manually can become repetitive when dealing with multiple forms
FormGroup - is a collection of Form controls It Tracks the value and validation state of form control




Cross-Site Scripting (XSS) ek aisi security problem hai jisme koi attacker aapke website ya app ke andar aise JavaScript code daal deta hai jo waha daalna allowed nahi hona chahiye.
Best Practices in Angular to Prevent XSS:
✅ Interpolation ({{ }}) ka use karo, ye safe hota hai.
❌ innerHTML, document.write(), eval() avoid karo jab tak necessary na ho.
✅ Always validate and sanitize inputs on both frontend and backend.
✅ Use Angular's DomSanitizer carefully.
 

Angular me EventEmitter ek aisa object hota hai jo component ke andar se koi event emit (bhejne) ke liye use hota hai — taaki parent component us event ko listen kar sake.


29. Services - service ak reuseble type script class hoti h, kishi bhi specific kam ko karne ke liye.jiske andar ham apne data ko stor karke rakhte h or us her ak component me use kar sakte h jaha hame use kara h.

singlaton service - Pure Angular application me us service ka bas ek hi object (instance) create hota hai aur sabhi components wahi same object use karte hain.same data share hota hai

30. HTTPClient-The HttpClient is used to perform HTTP requests and it imported form @angular/common/http. The HttpClient is more modern and easy to use the alternative of HTTP. HttpClient is an improved replacement for Http.

31. module.Exports - The module.exports is a special object which is included in every JavaScript file in the Node.js application by default. The module is a variable that represents the current module, and exports is an object that will be exposed as a module. So, whatever you assign to module.exports will be exposed as a module.

32. Diffirence bitween angular js and angular - 
AngularJS, is a javascript based open-source front-end framework and is mainly used to develop single page applications on web
AngularJS code is written in javascript.
AngularJS code is not mobile friendly.
Dependency Injection is not used.
AngularJS project is difficult to manage with increasing size of the source code

Angular code is written in typescript.
Angular develped applications are mobile browser friendly.
Angular code is better structured, is easy to create and manage bigger applications.

33. Client Side framwork - Usually a JavaScript library and runs in a Web browser, such as React, Angular and Vue. 

34. Adwantage of angular - 
 1.Effective Cross-Platform Development
 2.Improved Speed and Performance.
 3. Faster Development Process
 4. Readable and Testable Code
 5. More Lightweight Web Applications
 6. Efficient Problem-Solving Patterns
 7. Excellent Material Design Library

 35. Pipes -  It's Angular Feature. where we can use PIPES to transform our output in template
 36. Pure Pipe - Pure pipe tab execute hote h jab koi pure change detect hota h pipe ki inpute value me( Pure pipe purly focus karte h ki kab change detact hora h pipe ki value ans parameter me).Ye performance ke liye fast hota hai kyunki Angular isse baar-baar execute nahi karta unnecessarily.
 37. Impure Pipe - Impure pipe tab execute hote h jab  koi change detect hota h angualr ki app me ya component me. to isse hamare app me performance issue aane  ka khatra rehta h(a every change pe execute hote h). hame sirf pure : false add karna padta h in pipe decorator me.ise impure bnana ke liye.

 38. Custom Pipe -
 39. Index DB - 
 40. Meta Data - Metadata summarizes basic information about data
 41. NgJone -
 42. RXJS Library Features - Observable, Subscription, Operators, Subject, Error handling

43. @viewchild -  viewChild ke help se ham kishi bhi DOM element ko modify and manupulate kar sakte h.Basis on the template refrence ID. we can change the child component DOM from prant Component using view child.NgafterviewInit ke bad ise use karna chiahiye  jab view completly render ho jaye
 @ViewChild('demo', {static : true}) demo:ElementRef;

44. @viewchildren  -  The ViewChildren decorator is used to accesing multiple element. its return type is queryList. queryList is just a name for an object that list of items, queryList will always be updated whenever
any child alement add, update or remove the html DOM Tree.
@ViewChildren('refname') refname:QueryList<ElementRef>

45. defference between @viewchild AND @viewchildren - Both are in similer fation but view child access the first matching element however viewchildren access the all matching element.


47. ContentChild - ContentChild is used to select projected content in ngContent component. kishi component ke ngContent me koi content project karte  h to use access karne ke liye ham Contentchild ka use karte h.
@ContentChild('childcon',{ static:true}) contectChild:ElementRef

48.ContentChildren - is a parameter decorator that is used to fetch the QueryList of elements or directives from the content DOM. @contentCHildren is smaller to ContentChild only it return QueryList(ALl the Element) of child element matching selector from the DOM.
 @ContentChildren('childcon') contentcildren:QueryList<ElementRef>

49. ngContent use - The ng-content is used when we want to insert the content dynamically inside the component that helps to increase component reusability. Using ng-content we can pass content inside the component selector and when angular parses that content that appears at the place of ng-content  
EXE - appcompponent.ts
<app-geek> 
    <strong class="app">Senior Developer</strong>
    <strong class="app1">Experience : 5 years</strong>
</app-geek>
<hr>
  pure and inpur pipe - 
geek.component
<h3>
    <span>Hello, I am </span>
    <ng-content select=".app"></ng-content>
    <ng-content select=".app1"></ng-content>
</h3>

output - Hello, I am Senior Developer
Experience : 5 years

50. Asure devops  -

51. Lifecycle Hook - Lifecycle hooks are a special functionality in Angular that allow us to “hook into” and run code at a specific lifecycle event of a component or directive. Component/directive ke different stages pe run hone wale special functions jisme hum custom logic likh sakte hain.
Type of cycle hooks - 
 1) - ngOnChange - Its excute multiple time. ak bar a start me execute hota h jab new component create hota h.
 and tab execute hota h jab hamare component me koi inpute decorator ki value change hoti rehti h tab a call hota h. A hook argument ke sath work karta h. 
 2). ngOnint  - jab hamara component initialize hota h tab excute hota h.
 3).  ngDocheck - A hook bhi milti time excute hota h. jab component me change detact hota.jab kishi button me click karte h ya kishi property ki value change hoti h. ya koi bhi action hota h hamre component me.
 4). ngAfterContentinit- A tab execute hota h jab hamare component me jo content h jo ngContent ke throgh hamare component me project hora h, o initilize ho jata h. means agar ham ngcontent ka use karke koi content ka component me use karre h tab a  content initilize hota h.tab a hook execute hota h.
 5)- ngAfterContentCheck - A hook ngDocheck hook ki tarah work karta h. A tab execute hota h jab koi change detect hota h hamahe project ke ngcontent me.
 6)- ngAfterViewInit - a tab execute hota h jab hamare component ka initialys finish ho jata h.componet ka view poori tarahse render ho jata h.
 7)- ngAfterViewChecked - a tab execute hota h jab hamara component and uske child ka view poori tarah se initialise ho jata h jo bhi process h o poora ho jata h.
 8)- ngOnDestroy-  A hook tab execute hota h jab hamara component destroy hota h, means koi componet DOM se jara hota. yani previous page ka component DOM se remove ho jata h. Uski activiti destroy ho jati h. 

52. Module loading Strategy
    1. Lazy Loading - It's a process of loading component, moduled and other essets of application as they are required ANd it is would be loaded on demand after application is run. All of component load at a time once. this meaan lot of unnessesary library and module load ho jate h. it is optimize the application performance.

    2. Eager loading -Eager loading would be loaded before the application start. this is the default module loading stategy(means app module ke andar jo bhi module import karte o to o imported module bhi load ho jate h. jo ki ak application ko load hone me time lega.)
    
    3.Pre-Loading - pre loading would be loaded automaticaly after application start. when landing page or home page will be loaded then other module would be loaded in backgraund then we not nead  to load every module on rounting time. it will be already loaded using re-loading strategy. we can smoothly visit on our page or application.

53. Subject.next() - The subject next method is used to send messages to an observable which are then sent to all angular components that are subscribers (a.k.a. observers) of that observable.

54. Subject   - We can share a data from one componet to another component. Crosh component communication and a RXJS library ka ak feature h. it is special type of obervabel because usign subject we can subscribe it and emit data using next() method.


56 .latest version     -   14.0.4 / 29 June 2022    

57 . Host Element - Jis bhi element pe ham custom directive apply karte h to o us directive ka host element hota h.(The element on which we apply a custom directive is called the host element of that directive.)

58.@Hostlistner  in angular   - Jab ham Host Element ke kishi bhi Event ko capture karna chahte h to uske liye ham hostlistner use karte h. Hostlistner help us to listen and handel event and host element. host listner ki help se ham kishi bhi host element ke event ka pta lga sakte h and usme apna custom losic bhi bind kar sakte h. jaise koi bhi div h usme  click ho. mouse over, mouse out event ho to usko ham listen karna chahte h to waha host listner ka use karte h.
 @HostListener("click",['$event'])
  myclick(){
  alert("Hostlistne event called")
 }

59. @HostBinding - Hostbind ki help se ham kishi bhi host element me kishi bhi property ya Attribute ko bind kar sakte h.
EXE - @Hostbinding('style.backgroundColor') bgColor='green'; 
@Hostbinding('class.myClass') className; 
@HostListener('click') 

myClick(){
    this.bgColor='blue';
    this.className = true;
  } 

61. Authentication - is the process matching the visitor of a web application with the pre-defined set of user identity in the system. In other word, it is the process of recognizing the user’s identity. Authentication is very important process in the system with respect to security.

62. Authorization is the process of giving permission to the user to access certain resource in the system. Only the authenticated user can be authorised to access a resource.

63.Subject AND  Behavioursubject differance   - Both are used for share a data from one componet to another component. Crosh component communication and  BehaviorSubject holds one value. When it is subscribed it emits the value immediately. A Subject doesn't hold a value. a RXJS library ka ak feature h.

64. Angualr directive  -  Directive basicaly angular ke instruction hote h jo unke behaviour and apperiance ko change karne me help hote h.Angular mein Directive ek special class hoti hai jo HTML elements ke behavior ya appearance ko modify karne ke kaam aati hai.
Type of Directive 
1. Component Directive - directive with own component
2. Structural Directive - Manupulate the DOM element- using ngIf. ngFor.Ngswitch
3. Attribute Directive - Change the look and behaviour of DOM using ngStyle and Ngclass  

65.what is angular material -  Angular Material is a User Interface (UI) component library that developers can use in their Angular projects to speed up the development of elegant and consistent user interfaces 

66. difference between angular 5 and 6 - 
Angular 5- 
 1.HttpClient
 2.New events in the life cycle of the router
 3.Multiple Export Alias
 4.Enhanced Decorator support
 5.Animation
Angulr 6 - 
 1.Angular Elements
 2.Template Element
 3.ngModelChange
 4.ElementRef<T>
 5.RxJS 6.0

 68. how to pass data from routing- using the state object. The state object is stored in the History API.
The state can be provided in two ways:
<a [routerLink]="['dashboard']" [state]="{ id:1 , role:'super_admin'}">
  Dashboard
</a>
get the vlue- this.router.getCurrentNavigation().extras.state.

69. Renderer- Renderer angular ki ak pre - build class h jiski help se ham  kishi bhi DOM  elemnt ko modify and manupulate kar sakte h. Viewchild ki help se bhi same asha kar sakte h but o sahi tarika nhi h. kishi bhi DOm ke elment ko chnage karne ka.

70. Dependency Injection - Dependency are Services . that we inject the required dependency in class from the out side of class. so we do not need to create man ual object in the class. we have just inject the services ya dependencies ko constructor ke through automatically inject karna.

 Constructor kya hota hai Angular mein?
Constructor ek TypeScript ka feature hai (Angular ka nahi).
Ye tab chalta hai jab component ka object ban raha hota hai.
Instance create = Angular ne aapke component ka real object memory me banaya.
Isme aap dependencies inject karte ho (jaise service, router, etc.).
Iska use mainly initial setup ya DI (Dependency Injection) ke liye hota hai.
DOM ya template render se pehle constructor run ho jata hai.

ngOnInit() Angular ka lifecycle hook hai.
Ye tab chalta hai jab component properly initialize ho jata hai (jaise input properties set ho jaati hain).
Iska use hota hai data load karne ke liye ya component setup ke liye.

72. ng-template - ng-template is an Angular element that is used for rendering HTML in a template.ng-template is always used along with structural directives such as ngIf, ngFor, and ngSwitch. It is used for grouping content that is not rendered, but that can be used in other parts of your code.

73. ng-container allows us to create a division or section in a template without introducing a new HTML element. The ng-container does not render in the DOM, but content inside it is rendered. ng-container is not a directive, component, class, or interface, but just a syntax element.It is a very useful with Structural  directive

Change Detection - is the mechanism Angular uses to keep the view (UI) in sync with the underlying data model (component state).(Change Detection Angular ka ek mechanism hai jo yeh check karta hai ki
"component ke data me koi change hua hai ya nahi"
Agar change hua hai, to wo template (HTML) ko update karta hai.)
Jab aap component ke variables (jaise title, user.name, count, etc.) me koi change karte ho —
Angular automatically detect karta hai ki:
"Arre! Data badal gaya hai! Chalo UI (HTML) ko bhi update kar do."
Is process ko hi Angular me Change Detection kehte hain.
Change Detection Strategies
1️ Default (by default sabme hota hai):
Angular har chhoti chhoti change ke liye poore component tree ko check karta hai.
Useful for small apps, but slow in large apps.

2️ OnPush (optimized strategy):
Angular tabhi check karta hai jab:
@Input() me new reference aaye, inpute ka reference change hota hai
EventEmitter trigger ho
Performance zyada acchi hoti hai

74. Ag- Grid -

75. Ng-Grid - a component used to display tabular data in a series of rows and columns.

76.package.json file-
package.json ek configuration file hoti hai jo aapke project ke dependencies, scripts, project name, version, license, etc. ko define karti hai.
The package.json -  used to install multiple packages in a project. This file holds the metadata for a particular project. The package.json file is found in the root directory of any Node application or module, its contain the script, dependencies, devDependencies, and other metadata about the project.

version - 7.5.0
7 → Major version
5 → Minor version
0 → Patch version
^7.5.0 - "Caret range (^) ka matlab hai ki specified version ya uske baad ka koi bhi naya compatible version install karo, lekin same major version ke andar hi raho."
"~7.5.0 - ka matlab hai ki 7.5.0 se lekar 7.5.x tak ke patch updates install ho, lekin 7.6.0 ya 8.0.0 nahi."
✅ 7.5.1
✅ 7.5.9
❌ 7.6.0 (minor version change, not allowed)
❌ 8.0.0 (major version change, not allowed)

77. package.lock.json -package-lock.json ek auto-generated file hoti hai jo npm (Node Package Manager) banata hai jab aap dependencies install karte ho (npm install). used to lock dependencies to a specific version number. is created for locking the dependency with the installed version. It will install the exact latest version of that package in your application and save it in package.json.
Is file me jo packages install ho jate h unhe lock kar diya jata h.ki a packages instaal ho chuke h.Jo packages install hote hain, unka exact version, URL save hota hai package-lock.json mein.dependencies ko ek exact version pe lock karna. instaled packages ke dependent verion ko lock karta h. 

angular.json is the central configuration file that defines how an Angular project behaves during development, build, serve, test, and deployment. It allows customization of app settings, environments, file structure, and CLI behavior."
angular.json ek core configuration file hoti hai jo Angular CLI ko batati hai ki aapka project kaise build, run, test, serve aur optimize kiya jaye.

DomSanitizer - DomSanitizer helps preventing Cross Site Scripting Security bugs (XSS) by sanitizing values to be safe to use in the different DOM contexts.Angular ka ek security-related service hai jo help karta hai unsafe content ko safe banane mein, jise hum DOM (HTML, URL, etc.) mein use kar sakein without security risk.
type - 
 abstract bypassSecurityTrustHtml(value: string): SafeHtml
  abstract bypassSecurityTrustStyle(value: string): SafeStyle
  abstract bypassSecurityTrustScript(value: string): SafeScript
  abstract bypassSecurityTrustUrl(value: string): SafeUrl
  abstract bypassSecurityTrustResourceUrl(value: string): SafeResourceUrl

78.  Error Handling - Angular provides a hook for centralized exception handling with ErrorHandler.Injecting other services to the global error handler
1. Global Error Handler- First.create a GlobalErrorHandlerService  which implements the ErrorHandler
Then, override the handleError(error) method and handle the error.
export class GlobalErrorHandlerService implements ErrorHandler {
  constructor() {}
  handleError(error) {
     console.error('An error occurred:', error.message);
  }}

2. Try and catch -
   try {
        var a= b;  
      } catch (error) {
        throw error;    //rethrow the error
      }


JIT compiler Angular ke development mode me use hota hai.
Jab aap ng serve karte ho, to Angular app ko browser me run hone se pehle compile karta hai.
Ye compilation browser ke andar hoti hai, runtime pe.
Iska matlab hai: template HTML + TypeScript → JavaScript banaya jata hai jab user ne app open kiya.

79. AOT Compilation - AOT compiler Angular ke production mode me use hota hai.Templates, components, etc. sab kuch pehle hi JavaScript me convert ho jata hai.Isme browser pe koi extra compilation nahi hoti, sirf rendering hoti hai.It is build the app faster and it's build the app after finish the all error on the app it is use with big app and it show the error on compilation time. it is also reduce the size of app build.]

80. Angular Multiple HTTP Requests with RxJS -  ForkJoin()

 getData():Observable<any>
 {
  return forkJoin(
    [this.http.get('https://jsonplaceholder.typicode.com/posts'),
     this.http.get('https://jsonplaceholder.typicode.com/users')
  ])
 }

 81.Zonejs - Angular ko help karta hai kab data change hua aur kab UI (DOM) update karna hai. Har async operation pe nazar rakhna (like setTimeout, HTTP call, event listener), aur Angular ko batana ki ab change detection chalao."
Jab tum async kaam karte ho (like API call, event, promise), to Angular khud nahi samajh pata ki UI ko update kab karna hai.Zone.js Angular ke liye spy ka kaam karta hai — wo har async kaam pe watch rakhta hai.
Jab wo kaam complete hota hai, Zone.js Angular ko bolta hai kikuch change hua hai, ab change detection chala le.




83. RXJS Library -it is a reactive programming library. Reactive Programming ek programming style hai jisme aap asynchronous data streams ke sath kaam karte ho.Isme data flow "reactive" hota hai — mtlb agar data change hota hai, to app automatically react karta hai.
Yeh aapko Observables provide karta hai (ek aisa data stream jo values emit karta hai over time).
Aap in Observables ko subscribe karke unki values reactively handle kar sakte ho.
Aap data ko transform, filter, combine karne ke liye operators (jaise map, filter, switchMap) ka use kar sakte ho.

83 - Challenges in angular app -
1. Performance Issues - Angular apps can become slow if not optimized properly, especially with large data sets or complex components.
2. Change Detection - Angular's change detection can lead to performance bottlenecks if not managed correctly, especially with large component trees.
3.Memory Leaks - Improperly managed subscriptions or event listeners can lead to memory leaks, causing the app to consume more resources over time.
4. Complex Forms & Validations - Handling complex forms with multiple validations can be challenging and may lead to performance issues if not implemented correctly.

5. Third-Party Library Integration - Integrating third-party libraries can sometimes lead to compatibility issues or unexpected behavior in Angular apps.

84 - Optimization Techniques in Angular App -
1. Lazy Loading - Load modules only when needed to reduce initial load time.  
2. Change Detection Strategy - Use OnPush strategy to limit change detection checks to only when inputs change.
3. TrackBy in ngFor - Use trackBy function to optimize rendering of lists by tracking
changes in items, preventing unnecessary re-renders.Angular har baar list me puri DOM tree ko re-render karta hai.
trackBy se Angular sirf updated item ko update karega.
4. Use Pure Pipes - Use pure pipes to optimize data transformations, as they only re-evaluate when inputs change.
5. Avoid Memory Leaks - Unsubscribe from observables and remove event listeners to prevent memory leaks.
6. AOT Compilation - Use Ahead-of-Time (AOT) compilation to pre-compile templates and reduce runtime overhead.
7. Tree Shaking - Remove unused code during the build process to reduce bundle size.
8. Service Workers - Implement service workers for caching and offline support, improving performance and user experience.
9. Use Web Workers - ek separate background thread hota hai jo heavy tasks ko main thread se alag run karta hai.Agar aap heavy calculation / data processing directly main thread pe karte ho, to UI freeze ho sakta hai.
Web Worker use karke aap ye kaam background me kara sakte ho → UI smooth rehta hai.

85 - mergeMap() ek Observable ke andar doosra Observable merge karta hai without cancelling previous ones.
mergeMap() ka use tab hota hai jab aapko multiple asynchronous requests ko parallel run karna ho, aur kisi bhi purani request ko cancel nahi karna ho.
Use Case:
Jab aapko multiple async tasks parallel me run karne hain.
Example: Multiple image uploads, background syncing, etc.
User ek list me checkbox tick karta hai.
Har tick pe ek API call ja rahi hai (sab parallel).


86 - switchMap() bhi ek Observable ke andar doosra observable return karta hai, lekin purani request ko cancel kar deta hai agar nayi value aa jaye.
example: Agar aap search input me type karte ho, to switchMap previous search ko cancel karke nayi search request bhej deta hai.
Use Case:
Jab aapko sirf latest value ka result chahiye aur purani requests ki zarurat nahi hai.

87. Observable vs Promise
Observabel- 
Multiple values emit kar sakta hai.
Subscribe ko cancel (unsubscribe) kar sakte
Lazily execute hota hai (jab subscribe karo)
Har subscriber ko naya observable stream milega

Promise -
Single value return karta hai.
Promises are Immediately execute hota hai.
Cannot cancel once created.

88. Angular Key Features
- Component-Based Architecture
- Two-Way Data Binding
- Dependency Injection (DI)
- Directives
- Routing
- Forms Handling (Template & Reactive)
- RxJS & Observables
- TypeScript Based
- AOT (Ahead-of-Time) Compilation

89. 🔑 State Management in Angular
1. Component-Level State
Data sirf ek component ke andar stored.
Pros: Simple, lightweight
Cons: Share karna dusre components me tough
2. Using Services + RxJS (Built-in way)
Central service create karo → sab components use kare
RxJS subjects (BehaviorSubject, ReplaySubject) ka use karte ho data ko share karne ke liye.


Transpiler - Angular me basically ek converter hai jo TS ko JS me badal deta hai, taki browser me code chale.
Ye modern features ko backward compatible banata hai aur types check karke aapko development me help karta hai.

Compiler - ek program hai jo poore source code ko ek baar me read karke usse machine code / target language me convert karta hai.

  ================= ANGULAR 14 FEATURE ============
  1. Standalon component  - A standalone component is a type of component that doesn’t belong to any specific Angular module.it not depend on other module.Standalone component ke andar hi imports array hoti hai jisme aap dusre modules ya components import karte ho. 
  standalone: true,
  imports: [CommonModule],
  template: '<h1>Hello, World!</h1>'
})
2. Typed angular form - UntypedFormGroup
  EXE - const cat = new UntypedFormG


3. Extended developer diagnostics - HTML Template me run time pe error warning deta h. html
me koi galat type kar dete h to o waha pe warning deta h
EXE- <app-favorite-fruit ([fruit])="favoriteFruit"></app-favorite-fruit>


~~~~~~~~~~~~~~~~~~~~~~~~~
================= ANGULAR 15 FEATURE ============
1.Standalone Featur ko officialy add kar diya gya h
2. Functional router guards - ROuter Gaurd functional code change
BEFOR-
@Injectable({ providedIn: 'root' })
export class MyGuardWithDependency implements CanActivate {
constructor(private loginService: LoginService) {}
canActivate() {
return this.loginService.isLoggedIn();
}
}
const route = {
path: 'somePath',
canActivate: [MyGuardWithDependency]
};
AFTER - const route = {
path: 'admin',
canActivate: [() => inject(LoginService).isLoggedIn()]
};
================= ANGULAR 16 FEATURE ============
1. Signal - Signal Angular ka ak new reactive Premitive h. reactive Premitive Means a ak function
return karta h jiski value hamesha recalculate hoti rehti h.That give a signal when value is
changed. Jab bhi isse releted dependency me kuch update hota h.Iska matlab Signal ak new type
ki property h jisme ham kuch value jo store kar sakte hai. jab bhi is property ki value change hoti
h to a notify karti h apne subscriber ko means jaha jaha a signal property use hui h waha waha
automatacly change reflect kar jata h jab bhi signal value me change hota h. Jab change
detaction hota h tab app kafi sare Unnecesary checkes hote h kishi bhi change ke detect hone pe
but Signal ki help se in unnecessary checks ko avoid kiya ja sakta h or app ka wahi part update
hoga jisme change h. jisse app ki performance improve hoti h. Change detaction ko handel karta
h.
Signal Method
- Effect - a ak function hota h jo mostly constructor ke andar use hot h. Jab bhi koi signal update
hote h to hame ak effect function ke indication mil jta h ki yahan pe kyuch na kuch update hua h.
constructor( public _authService: AuthService) {
this._authService.showsideNav.next(true)
effect(()=>{
if(this.count() === 2)
{
this.isShow = true
}else{
this.isShow = false;
}
})
}
toggleValue(){
this.count.set(this.count() + 1);
}
- Set() - Set signal value. We can set two data types in signal -
exsetVal=
signal(200)
updateVal= signal(1000)
UpdateVal() {
this.setVal.set(this.setVal() + 100);
}
- Update() -signal value update based on it's current value. We can set only one data types in
signal.
EX- UpdateSignalVal(){
this.updateVal.update((pre)=> pre + 100);
}
- computed() - Calculated signal value update according to its dependency. this is read only
signal.
ex -
xval = signal(1000);
yval = signal(2000);
zval = computed(() => this.xval() + this.yval());
computedSignalVal(){
this.xval.set(3000);
this.yval.set(4000);
}
- mutate() - Modifies the content of signal value.Use it with array to modify array element.
TO update project for Signls
ng update @angular/cli @angular/coew --next
New project with Signals
npx @angular/cli@next new signals-project
2. Server Side Randering - Jab bhi ham angular app lo load karte h to o by default INdex page ke
source code ko hi rander karta h. Jab bhi alag-alag route pe navigate karte h to Indexe ka hi
source code load hota h. Jis bhi route pe navigate karte h to ushi page ka cource code load hona
chahiye. Standalone ke through ham SSR kar sakte h NG16 me.
Required - Jab bhi ham kishi apgular app ko search engin se search karte h to o sirf index page
ka hi code read karta h. To o consider karte h ki site me ak hi page h. or usme yahi content h to
other route ko read hi nhi karte h or waha pe sirf index page hi show hota h. is proplem ko solve
karne kle liye ham Server side rendring(SSR) karte h. Usse kya hota h ki google alag-alag route ko
alag alag read kar pata h. jisse use different page show hota h
NEED - SEO Friendly, Improve mobil performance. Show the first page quicly.
================= ANGULAR 17 FEATURE ============
1. Built-in control flow -- A new and faster way to add losics in the componets.
Conditional statements
@if (loggedIn) {
The user is logged in
} @else {
The user is not logged in
}
Switch case
@switch (accessLevel) {
@case ('admin') { <admin-dashboard/> }
@case ('moderator') { <moderator-dashboard/> }
@default { <user-dashboard/> }
}
Built-in for loop
@for (user of users; track user.id) {
{{ user.name }}
} @empty {
Empty list of users
}
2. Deferrable views - with the help of defer we can load havy componets laxyly. It's reduce the
app initial bundel size. Inhance the application performance. Differ ka use karke ham havy
component ko bad me lazily load kara sakte hai on demand component load kara sakte h jaise
kishi button pe ya scroll pe.Built-in control flow syntax is in developer preview, not stable in this
version
1. @defer - Load component lazily
2. @placeholder - Display placeholder befor the data loading.
3. @loading - Add loader or progresbar on data loading using @loading keyword in the
component.
4. @error - Display error when connection is failed in the app.
EXE - @defer (on viewport) {
<comment-list/>
} @loading {
Loading…
} @error {
Loading failed :(
} @placeholder {
<img src="comments-placeholder.png">
}
Triggers of Deferrable views
1. on viewport - Load component on demand whene we scroll page
2. on hover - When we hover on component then component will be load
3. when <expr> — enables you to specify your own condition via a boolean expression
4. on idle — lazily load the block when the browser is not doing any heavy lifting
5. on immediate — start lazily loading automatically, without blocking the browser
6. on timer(<time>) — delay loading with a timer
New lifecycle hooks -
afterRender — register a callback to be invoked each time the application finishes rendering
afterNextRender — register a callback to be invoked the next time the application finishes
rendering
3. Server side rendering - project create karte wakt a ssr ko add karne ke liye bhi poochega.
4. Standalone APIs from the start - Ab jo project create honge o initialy standalone ko default
follow karenge
5. Signal - Signal are stable now in ng17
Incremental Hydration?
Jab Angular Server-Side Rendering (SSR) ke baad page load hota hai, to poora page ek saath
hydrate (active) karne ke bajaye, Angular sirf zarurat wale components ko hydrate karta hai — aur
wo bhi step-by-step (incrementally).
"Jab user kisi component ko dekhta hai ya interact karta hai, tab us component ka JavaScript
active hota hai."
After Angular Server-Side Rendering (SSR), when the page loads, Angular doesn't hydrate
(activate) the entire page at once. Instead, it only hydrates the necessary components — and
even that happens step-by-step (incrementally).
Git - Distribution Version control system . kab kisne kya change kiya h h code me. then we can
take up and do push
*/
// ############### ANgular 18 feature #####################
/*
1.Zoneless change detection. changes ko detect karta h.
faster initial rendering and runtime.
Small bundle size.
Symple debugging
Defereble view is now stable
build in controll flow in now stable
SSR more emprovement in this version.such as i18, hydration support. better debugging
*/
// ############### ANgular 19 feature #####################
/*
1.Type scrip 5.6 suport
Angular 19 suport TypeScript 5.6.
angular 18 suport TypeScript 5.4
2.No need to add standalone : true it will be by default stand alone no need to add
standalone:true in the component decorator.
3. Unused imports in stand alone components.
if you forgate remove the unused imports in the stand alone component then it will give you
warning.it will help your componets is clean and small.
4.Many signal APIs are now stable.
SIgnal ak variable hota h. jo baki variable s more powerfull hota h. signal me stored value ke
updates ko detect kiya ja sakta h, track kiya ja sakta h effect() method ke through or usme ham
apn kaam kar sakte h. when signal vaue is changed it give a signal to other part of the project.
5.New signl APi introduced -
- LinkedSignal- its not stable yet.its experimental.
-exeperimental Api -its not stable yet.its experimental.





// ############### ANgular 20 feature #####################
1 - Built in control flow syntax now stable.
@if(){}@else {}
@switch(){
}
@defer()
2 - Signals – Fully Stable
Angular 20 mein signal(), computed(), effect() jaise APIs ab production-ready hain.
Ye reactive programming ko Zone.js ke bina bhi possible banate hain.
3- Zoneless Change Detection (Preview)
Angular ab Zone.js ke bina bhi work karta hai. Signals ke through app reactive ban jaata hai.
4.Incremental Hydration (Now Stable)
Angular ab visible ya interactive components ko hi hydrate karta hai — poore page ko ek saath
nahi.
5.Standalone Components are Default
Angular 20 se NgModule optional ho gaya hai — naye projects me standalone: true by default use
hota hai.
6-Enhanced Template Expression Support
Angular templates ab support karte hain:
** (exponentiation operator)
in operator
Untagged template literals (`Hello ${name}`)
7. Signal-based Forms (Experimental)
Angular ke forms ab signals ke through reactive ban rahe hain.

  
  */