/* React is a library that helps us build user interfaces from components. We can assemble smaller components to build large applications. Components combine HTML(HTML+CSS) and logic(js) into a single reusable function. In React, a component is a reusable piece of code that returns a React element to be rendered to the page.

JSX(JavaScript XML): It is an extension syntax for JavaScript that allows us to write HTML-like code within JavaScript. 
- Here's an example of JSX code: const element = <h1>Hello, JSX!</h1>; 
- JSX code is ultimately transformed into plain JavaScript code before it is executed in the browser, using a process called transpilation. 
- The most common tool used for transpiling JSX is Babel. 

Basic React app structure:
 src folder => components, index.js, stylesheets go in the src directory
 App.js => contains the App component. App component is typically the highest level component of our entire application. Our application might consists of thousands of components, all of these components are going to be rendered as part of a single component which is conventionally called App.
 index.js/main.jsx(vite) => imports the app component. Select the #root element from index.html and renders the app component into the root element
 public folder => index.html goes in the public folder
 index.html(standalone file in vite) is the place where the app component will be rendered

The typical way of writing a React application is to put one component in one file and the name of file conventionally should be same as the component. We export the component using the export default keyword from the same file itself. The component is then imported into App.js and rendered.

JSX rules:
1. You must explicitly close self closing elements like <br/>
2. Components can only return a single element. To get around that fact we have two ways: 1. Enclose our multiple elements in a generic <div>, 2. Use React fragment

Vite: In Vite, It doesnt technically matter if we use .js or .jsx, but it is better to usee .jsx to make it clear that we are using react
*/