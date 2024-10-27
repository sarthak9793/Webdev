export default function AAAExport() {
    return <h2>Bye React....</h2>;
  }
  // We can also export on a seperate line using: export default Bye
  
  // There are two ways of exporting modules: export and export default.
    // export: It allows you to export multiple functions, variables, or components from a file. Ex] export{Bye, Add} But then the name used in import should match exactly with what was exported, Ex] import {Bye, Add} from "./Bye.js"
  
    // export default(mostly used): It is used to export a single functions, variables, or component from a file. The name used in import can be anything, but the best practise is to use same name used in export
  
  // Note: When we are exporting modules, we are essentially exporting an object that contains these modules. This object will be recieved wherever the import statement is used. Then we can destructure that object to get the modules we need.
/* UPDATION - 24/10/23
  Difference between modules and components:
    In React, a component is a reusable piece of code that returns a React element to be rendered to the page. The simplest version of a React component is a plain JavaScript function that returns a React element.

    On the other hand, a module in JavaScript is a piece of reusable code that can be exported from one program and imported for use in another programe. A module can contain functions, objects, values or components(when exported).

    When you’re working with React, you typically define components and then when you want to use these components in some other component, you export them as a module using javascript's module system. For example, you might have a file MyComponent.js that defines a component MyComponent, and at the end of the file, you would include the line export default MyComponent; to export that component as a module.

     So, in the context of React, you’re exporting components, but you’re doing so using JavaScript’s module system. This allows you to import these components in other parts of your application and reuse them, promoting efficiency and maintainability.

    So, while all React components (when exported) are modules, not all modules are React components. Other types of modules could indeed be variables, functions, or objects.
*/
