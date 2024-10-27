// Process is an object available in the global scope. The process object provides information about, and control over, the current Node.js process. The process object has a bunch of methods and properties

// console.log(process)
// properties
    // process.version
        console.log("process.version: ",process.version)
    // process.release
        console.log("process.release: ",process.release)
    // process.argv: process.argv property is used to access command-line arguments passed to a Node.js script. For example when we execute this script through the terminal and while executing it if we pass any arguments and we want to access those arguments in the script we can use process.argv. process.argv is an array of strings. process.argv[0] contains the path to the Node.js executable. process.argv[1] contains the path to the script being run. After that the arguments that were passed while executing the script are stored.
        for(let x of process.argv.slice(2))
            console.log("hello",x)
// methods
    // process.cwd()
        console.log("process.cwd(): ",process.cwd()) //The process.cwd() method returns the current working directory of the Node.js process.
    