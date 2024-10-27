/* DOM: 
    - The DOM is a Javascript representation of your webpage.
    - It's your JS "window" into the contents of a webpage.
    - It's just a bunch of objects that you can interact with via JS.
*/
/* The document object is our entry point into the world of the DOM. It contains representations of all the contents on a page, plus tons of useful methods and properties. */
/* When the browser loads a webpage, part of that loading process involves taking the incoming HTML and CSS and then creating JS objects. We can think of these objects as a tree, with the document object being the root of that tree. The nodes of the tree are nested in the same order as the HTML. For ex] <body><h1></h1></body>, in this <h1> will be the child node and the <body> will be the parent node. Each of these nodes are an object themselves and they all have methods and properties. */

/* Selecting (DOM objects)/elements:
    - getELementById
    - getELementByTagName
    - getELementByClassName */

// getElementById
const a1 = document.getElementById('a1')
    // console.dir(a1)

// getElementByTagName: This returns an HTML collection which is an array like structure, meaning we can access them using indices, but array methods and properties do not apply on them. They are iterable, meaning we can use for-of loop on them.
const p = document.getElementsByTagName('p');
    // console.dir(p)
    // console.dir(p[1])
    // for(let x of p)
        // console.dir(x)

// getElementByClassName: This also retuns an HTML collection.
const a2 = document.getElementsByClassName('a2');
    // console.dir(a2)

// Query selector: A newer, all-in-one method to select a single element. For tag names and class names, query selector just gives us the first match
const b1 = document.querySelector('#a1')
    // console.dir(b1)
const p2 = document.querySelector('p')
    // console.dir(p2)
const b2 = document.querySelector('.a2')
    // console.log(b2)
// We can also chain it with CSS selectors
const b3 = document.querySelector('.a2[title="titty"]')
    // console.dir(b3)
const b4 = document.querySelector('.a3 p')
    // console.dir(b4)
// We can use querySelectorAll to select all elements. It returns a node list which is an array like structure, meaning we can access them using indices, but array methods and properties do not apply on them. They are iterable, meaning we can use for-of loop on them.
const b5 = document.querySelectorAll('div')
    // console.dir(b5)

/* Manipulating elements:
    - innerHTML
    - textContent
    - innerText */

// innerHTML: it retrieves the full contents, including the tag names i.e. basically everything inside of an element between the opening and closing tag. Used to modfiy HTML tags.
const b8 = document.querySelector('.innerhtml')
b8.innerHTML = '<i>I am Italicized<i>'
    // console.log(b8.innerText)

// innerText: it gives us the text inside, so it ignores those tags and it also is sensitive to what is currently being displayed and stuff that's being hidden(i.e. display: none) is ignored.
const b6 = document.querySelector('.innertext')
    // console.log(b6.innerText)
b6.innerText = "I am changed"
b6.innerText += " And this on top!"
    // console.log(b6.innerText)

// textContent: textContent is like inner text, but it does not care about what is being displayed or what's actually showing to the user.
const b7 = document.querySelector('.textcontent')
    // console.log(b7.textContent)
b7.textContent = "I am changed"
    // console.log(b7.textContent)

// Getting attributes
const b9 = document.querySelector('.attribute')
    // console.log(b9.getAttribute('src'))
// Setting attributes
b9.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeGmztBxpNm8B3jiMlqElwlDywezBNcwiR5hzfikA1Yjle0lYg9wM-wAh8mYkC_roM5Lc&usqp=CAU')
// We can also get and set them using this syntax
    // console.log(b9.src)
    b9.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeGmztBxpNm8B3jiMlqElwlDywezBNcwiR5hzfikA1Yjle0lYg9wM-wAh8mYkC_roM5Lc&usqp=CAU'

// Changing styles: styles in javascript dont have hypens, they are camelCased.
const b10 = document.querySelector('.styles')
    // console.log(b10.style) //the styles object contains only the inline styles of the element thats why we see all styles as empty.
b10.style.borderColor = 'blue' // Although this method works but it is not recommended, because all we are doing is adding some inline styles which is not ideal. Also using these method we would have to style each element individually. A better way would be to define a CSS class with the properties we want and then add that class to an element or class of elements we want to style. This is done using classList.

// classList: can be used to add, remove or toggle classes
const b11 = document.querySelector('.classlist')
b11.classList.add('purple')
b11.classList.add('rounded')
b11.classList.remove('rounded')
b11.classList.toggle('purple')
b11.classList.toggle('purple')

// Parent/Children/Sibling
// Parent
const b12 = document.querySelector('.child1')
    // console.log(b12.parentElement)
    // console.log(b12.parentElement.parentElement)

// Children
const b13 = document.querySelector('.parent')
    // console.log(b13.children) // returns an HTML collection
    // console.log(b13.childElementCount)

// Sibling
const b14 = document.querySelector('.grandparent')
    // console.log(b14.previousElementSibling)
    // console.log(b14.nextElementSibling)

// Inserting HTML elements
const newpara = document.createElement('p')
newpara.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis sed est, omnis adipisci libero officiis harum reprehenderit pariatur alias non eveniet repudiandae veritatis impedit animi, ipsa, ab quia esse ex."
// To have it actually show up on the page, we need to append it.
document.body.appendChild(newpara) // this is goind to append newpara as the last child of body. syntax: node.appendChild(), node could be document.body or any element we selected using queryselector
// or using append() we can append more than one thing and also we can use it to append text, instead of using innerText
const body = document.querySelector('body')
const newpara2 = document.createElement('p')
    newpara2.innerText = "newpara2"
const newpara3 = document.createElement('p')
    newpara3.append("newpara3")
body.append(newpara2, newpara3)
// using prepend(), we can insert something as the first child of the element
const newpara4 = document.createElement('p')
    newpara4.append("newpara4")
body.prepend(newpara4)
// To insert an element after some other element
const newpara5 = document.createElement('p')
    newpara5.append("newpara5")
newpara3.after(newpara5)
// To insert an element before some element
const newpara6 = document.createElement('p')
    newpara6.append("newpara6")
newpara3.before(newpara6)

// Removing elements
const b15 = document.querySelector('.remove')
b15.remove()
