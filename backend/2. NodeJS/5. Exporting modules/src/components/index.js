// There are two ways to export multiple components from a directory. We can export each component independently or we can create an index.js(name matters) file inside the directory where the components are stored and then re-export all the components. Then we can import all these components as follows: import {A,B,C} from './components'


// When we want to export everything exported from A.jsx
export * from './A'
// When we want to export the default export
export {default as B} from './B'
// When we want to export some modules only
export {C} from './C'