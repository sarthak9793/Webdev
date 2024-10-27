// Spread:The spread (...) syntax allows an iterable, such as an array or string, to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected. In an object literal, the spread syntax enumerates the properties of an object and adds the key-value pairs to the object being created.

// Spread in function calls: Expands an iterable(array, string) into a list of arguments.
const nums = [1,2,3,4,5]
    // To find max
    let max = Math.max(1,2,3,4,5)
        // console.log(max)
    // Or we can use spread
    let max2 = Math.max(...nums)
        // console.log(max2)

// Spread in array literals: Creates a new array using an existing array. Spreads the elements from one array into a new array.
const a = [1,2,3];
const b = [5,6,7];
const c = [...a , 4, ...b]
    // console.log(c);

// Spread in objects: Copies properties from one object into another object.
    // Note: In case two properties that are getting copied have the same keys, then the value of the latter object will be chosen.
const student = {
    name: 'Sarthak',
    age: 21
};
const marks = {
    maths: 21,
    physics: 22
};
const studentResult = {...student, ...marks, chemistry: 23}
    // console.log(studentResult)


// Rest parameters(...): Used when we dont know how many arguments we will get.
function winner(gold, silver, ...everyoneElse){
    // console.log(`Gold goes to ${gold}`);
    // console.log(`Silver goes to ${silver}`);
    // console.log(`And thanks to everyone else ${everyoneElse}`);
}

/* Destructuring: A short clean syntax to 'unpack'
    - Values from array
    - Properties from objects 
   into distinct variables
*/
// Destructuring arrays
const scores = [91,45,33,86,44,67];
const [first, second, ...everyoneelse] = scores
    // console.log(first)
    // console.log(second)
    // console.log(everyoneelse)

// Destructuring objects
const user = {
    name: 'Sarthak',
    age: 21,
    email: 'sar.sri67@gmail.com'
};
const {name, age, email:gmail, height='6ft'} = user //this will copy the value of the properties into a variable of the same name or we can specify the variable name also. We can also set default values.
    // console.log(name)
    // console.log(age)
    // console.log(gmail)
    // console.log(height)

// Destructuring parameters
    // instead of getting all properties
    function name2(user){
        // console.log(user.name, user.age);
    }
    // We can choose the ones we want. We can also set default parameters
    function name3({name,age,height='6ft'}){
        // console.log(name,age,height);
    }


// THIS keyword
/* 
1. Global Scope: When this is used outside of any function or object, it refers to the global object, which is often window in a web browser or global in Node.js.
        console.log(this); // Refers to the global object (window in browser)

2. Function Context: When this is used within a regular function (not an arrow function), its value is determined by how the function is called. It can refer to the object on which the function is invoked.
        function myFunction() {
        console.log(this);
        }
        myFunction(); // Refers to the global object (window)
        const obj = {
        method: myFunction
        };
        obj.method(); // Refers to the obj object

3. Object Method: When this is used inside a method of an object, it refers to the object itself.
        const obj = {
        name: "John",
        sayHello: function() {
            console.log("Hello, " + this.name);
        }
        };
        obj.sayHello(); // Refers to the obj object and prints "Hello, John"

4. Constructor Function: When this is used within a constructor function (a function used to create objects), it refers to the specific instance of the object being created.
        function Person(name) {
        this.name = name;
        }
        const john = new Person("John");
        console.log(john.name); // Refers to the john object created by the Person constructor

5. Event Handlers: When this is used within an event handler, it typically refers to the DOM element on which the event occurred.
        const button = document.querySelector("#myButton");
        button.addEventListener("click", function() {
        console.log(this); // Refers to the button element
        });

6. Explicit Binding: In some cases, you can explicitly set the value of this using methods like call(), apply(), or bind().
        function sayName() {
        console.log(this.name);
        }
        const person = {
        name: "John"
        };
        sayName.call(person); // Refers to the person object */