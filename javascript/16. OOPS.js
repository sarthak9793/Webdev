/* Object Prototypes: 
Prototypes are the mechanism by which JavaScript objects inherit features from one another. 
Objects can have a prototype object from which all objects that share that prototype will inherit their properties and methods from. 
The idea boils down to having a single object that contains common properties and methods from which other objects inherit their properties and methods from. 
For ex] every primitive and derived data types in Javascript like Number, string, boolean, arrays is an object. And Javascript has inbuilt object prototypes for each of these objects. That is how we can use methods like .substr(), search(), etc on all strings. */
const arr = [1,2,3]
console.log(arr)
console.log(arr.__proto__) // we can see all the properties and methods that the arr object inherited from Array.prototype under the __proto__ property of arr object.
console.log(Array.prototype) // This is the actual Array prototype object

// Classes: class names usually start with a capital letter. 
class Color {
    constructor(r,g,b){ // The constructor method is a special method for creating and initializing an object created with a class. 
        this.r = r
        this.g = g
        this.b = b
    }
    //  When defining a method within a class in JavaScript, you don't use the function keyword
    rgb(){
        return `rgb(${this.r},${this.g},${this.b})`
    }
}
// Creating a new object/instance of class Color
const favColor = new Color(255,45,212)
console.log(favColor.rgb())

// Inheritance
class Pet{
    constructor(name, age){
        this.name = name
        this.age = age
    }
    eat(){
        return `${this.name} is eating`
    }
}
class Dog extends Pet{
    bark(){
        return `${this.name} is barking`
    }
}
class Cat extends Pet{
    // Super: If we want to have some additional information for cat, we will need to define its own constructor, and inside that constructor we will have to define all the properties we want to define for cat. To avoid repeating the properties that were already defined in the parent class we will use the super keyword to invoke the superclass's constructor
    constructor(name,age,livesleft=9){
        super(name,age)
        this.livesleft = livesleft
    }
    meow(){
        return `${this.name} is meowing`
    }
}
const tommy = new Dog("Tommy", 21)
console.log(tommy.bark())

const grey = new Cat("Grey", 21, 101)
console.log(grey.meow())
console.log(grey.livesleft)
