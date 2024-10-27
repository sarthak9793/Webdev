/* Javascript is single threaded, meaning only one line of code can be executed at a time. That might cause a problem, for ex] if we have made a request to movies API and it takes 3 seconds, should that mean, our javascript execution shoud halt until we get the data we requested for. Fortunately this does not happen. Even though JavaScript can only run one line at a time, there are ways around this: setTimeOut. 
*/
// console.log("x")
// setTimeout(() => {
//     console.log("y")
// }, 3000);
// console.log("z")
/* We see that "x" and "z" gets printed first and then after a delay of three seconds "y" gets printed. How does that happen? We learned that javascript can only run one line of code at a time, so what happened to the second console.log, while the third console.log was being executed. How is that possible? Well! the browser makes it possible. So what happens is that JavaScript actually is going to hand off certain tasks to the browser to take care of. Broswers come with something called web APIs that are able to handle certain tasks in the background(like making requests or setTimeout). The call stack in JavaScript is able to recognize these special Web API functions and it can pass them off to the browser. So it says, "here you go, please remind me in three seconds to to take care of this." And then once the browser finishes those tasks, let's say three seconds later, then they're added back to the call stack, then JavaScript takes over again and executes the appropriate code(the callback function). */

/*
    Future edit: 19/2/24
        JavaScript is single-threaded, which means it can execute only one piece of code at a time. But how can it handle asynchronous operations like timeouts, promises, or event listeners? This is where the Event Loop comes into play.
        
        The Event Loop constantly checks the message queue for pending messages (like a resolved promise) and processes them one by one. 
        
        When JavaScript encounters asynchronous operations, like setting a timeout or initiating a network request, it doesn’t execute them in the main thread. Instead:
            1. The JS runtime (like a browser) provides mechanisms (often termed the Web API) to handle these tasks outside of the main thread.
            2. When you initiate an asynchronous operation (like setTimeout in our example), it's handed off to this Web API.
            3. The main JavaScript thread continues executing subsequent code without waiting for the asynchronous operation to complete.
            4. Once the asynchronous operation is done (like when the timer expires for setTimeout), it puts a message (often with a callback function) in a message queue.
            5. The Event Loop consistently checks if the main JS thread is free. If it is, the Event Loop takes messages one by one from this queue and executes them.
*/


// Demo: callback hell!

// setTimeout(() => {
//     document.body.style.backgroundColor = 'red'    
//     setTimeout(() => {
//         // to change color to orange 1 second after background turns red, we can nest setTimeOut()
//         document.body.style.backgroundColor = 'orange'
//         setTimeout(() => {
//             document.body.style.backgroundColor = 'yellow'
//             setTimeout(() => {
//                 document.body.style.backgroundColor = 'green'
//             }, 1000);
//             setTimeout(() => {
//                 document.body.style.backgroundColor = 'blue'
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);

// We can make a function for this
// const delayedColorChange = (color, duration, doNext) => {
//     setTimeout(() => {
//         document.body.style.backgroundColor = color
//         doNext()
//     }, duration);
// }
// delayedColorChange('red',1000, () => {
//     delayedColorChange('orange', 1000, () => {
//         delayedColorChange('yellow', 1000, () => {
//             delayedColorChange('green', 1000, () => {
//                 delayedColorChange('blue', 1000, () => {
//                     console.log("End of callback HELL!")
//                 })
//             })
//         })
//     })
// })
/* This pattern is super common. where we have dependent actions where one thing needs to happen and then only after the first thing is finished, can the second thing happen. Well, that's where we frequently use callbacks. 
Example]
Let's say that I'm working with some data from a movies database and I'm going to search movies. I'm going to call the movies API for Amadeus, probably my favorite movie ever. That could take a lot of time. It might be very quick, but it might be a couple of seconds. I don't know. So this function, which again, does not exist, it doesn't work. But we'll see how to do this later. It will accept a callback and it will execute this callback whenever it finishes searching for movies. So let's say it finishes. Then what I want to do is I actually want to send the movies that I search for and I want to save them to my database so I could have another function saved to my DB and whatever those movies are that came back from searching. But that might take time as well. And it might work and it might not work. And this is where it gets crazy because often what you'll see is actually a pattern where we have two callbacks that we pass into a function, a success and a failure. So if things go well, this could be our first callback. And then if they don't go well, we can have a second callback. Now, things might be getting crazy in here and you might be a little bit confused, but this is a really common pattern. So if it works, run this. If it doesn't work, run this. This is incredibly common because we just don't know this might work. Saving to the database. But maybe the internet's down. Maybe the database doesn't exist. We don't have permission. It's full. I don't know. So it might not work. So we need to anticipate two possible outcomes and we won't know until it happens multiple seconds later. Same thing with the API function.

    searchMoviesAPI("Amadeus", ()=> {
        saveToMyDB(movies, () => {
            // If it works, run this
        }, () => {
            // if it doesnt work, run this
        })
    }, () => {
        // if API is down, run this
    })
*/

// Demo: fakerequest using callbacks
// const fakerequest = (url, success, failure) => {//success and faulure are two callback functions.
//     let delay = Math.floor(Math.random()*4500)+500
//     console.log("Delay: ",delay)
//     setTimeout(() => {
//         if(delay<4000)
//             success(`Here is your data: ${url}`)    
//         else 
//             failure("Connection Timeout!")
//     }, delay);
// }
// fakerequest("www.google.com", (response) => {
//     console.log("Success: ",response)
//     // we want to visit yahoo.com if our request to google.com was successful
//     fakerequest("www.yahoo.com", (response) => {
//         console.log("It worked again!", response)
//         // We want to visit facebook.com if our request to yahoo.com was successful
//         fakerequest("facebook.com", (response) => {
//             console.log("It worked the third time!!: ", response)
//         }, (err) => {
//             console.log("It failed(3rd req): ", err)
//         })
//     }, (err) => {
//         console.log("It failed(2nd req): ", err)
//     })
// }, (err) => {
//     console.log("It failed: ", err)
// })

/* Demo: fakerequest using promises.
   Promise: A promise is an object representing the eventual completion or failure of an asynchronous operation
   A Promise is in one of these states:
        pending: initial state, neither fulfilled nor rejected.
        fulfilled: meaning that the operation was completed successfully.
        rejected: meaning that the operation failed.
   Resolve and reject are functions, when resolve is called inside a promise, that means the promise was resolved/fulfilled and when reject is called inside a promise that measns the promise was rejected.  i.e. the value with which the resolve function was callec with
   */
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
/* "then" is a method of a promise object. It takes two parameters. We are only working with the first parameter. The first parameter takes a function that will execute when the promise becomes fulfilled/resolved. That function will take a "value" parameter. It is the value that the promise was fullfilled with i.e. the value with which the resolve() was called.
"catch" is a method of a promise object. It takes only one parametre. The parameter takes a function that will execute when the promise becomes rejected. That function will take a "reason" parameter. It is the value that the promise was rejected with i.e. the value with which reject() was called.*/
/*
    const request = fakerequestpromise("www.google.com")
    request.then((response) => {
        // Agar maine resolve call kiya to .then wala kaam karega
        console.log("It worked!", response)
    }).catch((err) => {
        // Agar maine reject call kiya to .catch wala kaam karega
        console.log("It did not work!", err)
    })
*/
// Shorter syntax
// fakerequestpromise("www.google.com")
//     .then((response) => {
//         console.log("It worked!", response)
//         fakerequestpromise("www.yahoo.com")
//             .then(() => {
//                 console.log("It worked(2nd time): ", response)
//                 fakerequestpromise("www.facebook.com")
//                     .then(()=>{
//                         console.log("It worked(3rd time): ", response)
//                     })
//                     .catch((err)=>{
//                         console.log("It failed(3rd request): ", err)
//                     })
//             })
//             .catch((err) => {
//                 console.log("It failed (2nd request): ", err)
//             })
//     })
//     .catch((err) => {
//         console.log("It failed(1st request)", err)
//     })
// Even better syntax
fakerequestpromise("www.google.com")
    .then((response)=>{
        console.log("It worked!", response)
        return fakerequestpromise("www.yahoo.com")
    })
    .then((response)=>{
        console.log("It worked(2nd time): ", response)
        return fakerequestpromise("www.facebook.com")
    })
    .then((response)=>{
        console.log("It worked(3rd time): ", response)
    })
    .catch((err) => {
        console.log("A request failed!!: ", err);
    })