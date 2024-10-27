// In Node.js, the "File System" module, often referred to as fs, is a core module that provides an API for working with the file system on your computer. This module allows you to perform various file operations, such as reading from and writing to files, creating directories, and interacting with the file system either synchronously() or asynchronously. The fs module is particularly useful for building applications that need to work with files, such as web servers, command-line utilities, and more.
// Synchronous file operation: When you perform filesystem operations synchronously, your code will block and wait for the operation to complete before moving on to the next line of code. Synchronous file operations are straightforward to understand and use but have the drawback of potentially causing your entire program to hang or become unresponsive if there's a delay or an issue with the file operation. In Node.js, synchronous filesystem functions often have names that end with Sync, like fs.readFileSync() and fs.writeFileSync().
// Asynchronous file operation: Asynchronous file operations do not block the program's execution. Instead, they initiate the operation and provide a callback function that will be executed when the operation is complete. This allows your program to continue running while waiting for the filesystem operation to finish. In Node.js, asynchronous filesystem functions, like fs.readFile() and fs.writeFile(), don't have Sync in their names.

// To use the fs module we have to require it. This returns us an object which has a bunch of methods. This object is stored in fs variable
    const fs = require('fs')

// console.log(fs)

// fs.mkdir(path(string), options(object, optional), callback)
    /* syntax:  path (string): The path to the directory you want to create.
                options (object, optional): An object with configuration options for the operation. It can include properties like recursive to create parent directories if they don't exist.
                callback (function): A callback function that is called once the directory is created. The callback takes one argument, which is an error object (null if successful).*/
    fs.mkdir('./testingMkdir/a/apple', { recursive: true }, (err) => {
        if (err) 
            throw err;
        else
            console.log("Directory created successfully")
    }); 

const path = process.argv[2] || "./testingMkdir/folder_name"  //NOTE: The folder will be created in the directory where the script is run from, not where the script is located.
fs.mkdir(`${path}`, {recursive: true}, (err)=>{
    if(err)
        throw err;
    else 
        console.log("Directory created successfully")
})