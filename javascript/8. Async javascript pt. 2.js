/* Async functions: Even more cleaner syntax; built on top of promises 
    Two main keywords:
        1. Async: Async keyword is used to declare a function as asynchronous. If we put the the async keyword before a function, that function automatically returns a promise. If our function returns a value, then our promise will be resolved with that value. If the function throws an exception, the promise will be rejected.

        2. Await: By using the await keyword within an async function, you can pause the execution of the function until the promise is resolved or rejected.
*/
const hello = async () => {
    return "hello"
}
hello().then((value)=>{
    console.log("Promise resolved with: ", value)
})

const bye = async () => {
    throw new Error("AAAAAAH!")
}

const fakerequestpromise = (url) => {
    return new Promise((resolve, reject) => {
        let delay = Math.floor(Math.random()*10)+1 
        setTimeout(() => {
            if(delay<5)
                resolve(`Here is your data: ${url}`)    
            else 
                reject("Connection Timeout!")
        }, delay);
    })
}

// fakerequestpromise("www.google.com")
//     .then((response)=>{
//         console.log("Promise resolved with: ", response)
//         return fakerequestpromise("www.yahoo.com")
//     })
//     .then((response)=>{
//         console.log("Promise resolved with: ", response)
//         return fakerequestpromise("www.facebook.com")
//     })
//     .then((response)=>{
//         console.log("Promise resolved with: ", response)
//     })
//     .catch((err)=>{
//         console.log("Promise was not resolved: ", err)
//     })

// The await keyword makes the syntax even simpler. try and catch are used to handle cases when promise was not resolved. When we use the await keyword, the value/object with which the promise was resolved with is returned.
async function makeThreeRequest() {
    try{
        
        // fakerequestpromise() returns a promise. When we use the await keyword, the value/object with which the promise was resolved with is returned.
        const response1 = await fakerequestpromise("www.google.com")
        console.log("Promise resolved with: ", response1)
        const response2 = await fakerequestpromise("www.yahoo.com")
        console.log("Promise resolved with: ", response2)
        const response3 = await fakerequestpromise("www.facebook.com")
        console.log("Promise resolved with: ", response3)
    }catch(err){
        console.log("Promise was not resolved: ", err)
    }
}
// There are two levels of promise here. 1. The promise returned by fakerequestpromise(API), 2. The promise returned by our asynchronous function makeThreeRequests
// Jab ham kisi API ko request bhejte hain, tab hame ek promise return hota hai. Us promise ke peeche agar await keyword lagayein then the value with which the promise was resolve()/resolved with is returned. Agar promise reject hota hai, then an exception is thrown with the value that promise was reject()/rejected with. Jab exception throw hota hain then two things happens, first the promise returned by our asynchronus function is rejected, second that exception is caught by the catch block. If there is no exception thrown and there is a explicit return statement in our asynchronous function than the promise returned by our asynchronous function is resolved with that value. If there is no explicit return statement like in the example above, then the promise returned by our asynchronous function is resolved with undefined.