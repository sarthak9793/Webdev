// The old way - XHR's: XMLHttpRequest

// Creating a new XHR object
const req = new XMLHttpRequest();
// Event handler callbacks
// This function is executed if the request is successful
req.onload = function () {
    console.log("Request was successful!")
    // printing out the request object
    console.log(this)
    // To print out the response
    console.log(this.responseText)
    // Converting the JSON response into javascript object
    const response = JSON.parse(this.response)
    console.log(response.name)
}
// This function is executed if the request is there is an error
req.onerror = function() {
    console.log("Error")
    // printing out the request object
    console.log(this)
}
// Opening the request
req.open("GET", "https://swapi.dev/api/people/1")
// Sending the request
req.send()

// Using Fetch API: New way of making requests via javascript. It returns a promise object
// fetch("https://swapi.dev/api/people/1")
//     .then((response) => {
//         // .then method recives the response object via its parameter
//         console.log(response)
//         // To get json, we use response.json which agains returns a promise
//         response.json().then((response)=>{
//             console.log(response)
//         })
//     })
//     .catch((err)=>{
//         console.log("Error: ", err)
//     })
// Refactored: Instead of nesting promises, we chained then, so the syntax is nice and flat
// fetch("https://swapi.dev/api/people/1")
//     .then((response) => {
//         console.log(response)
//         return response.json()
//     })
//     .then((data)=>{
//         console.log(data)
//         console.log(data.height)
//     })
//     .catch((err)=>{
//         console.log("Error: ", err)
//     })

// Chaining fetch requests
fetch("https://swapi.dev/api/people/2")
    .then((response) => {
        console.log(response)
        return response.json()
    })
    .then((data)=>{
        console.log(data.name)
        return fetch("https://swapi.dev/api/people/3")
    })
    .then((response)=>{
        return response.json()
    })
    .then((data)=>{
        console.log(data.name)
    })
    .catch((err)=>{
        console.log("Error: ", err)
    })
// Doing the same thing using asynchronous function
const reqNames = async () => {
    try{
        const response1 = await fetch("https://swapi.dev/api/people/2")
        // response1 ke paas response object aagaya. Response object se JSON nikalne ke liye, .json() method chalana padta hai
        const data1 = await response1.json() //We use await because .json() method also returns a promise
        console.log(data1.name)
        const response2 = await fetch("https://swapi.dev/api/people/3")
        const data2 = await response2.json()
        console.log(data2.name)
    }catch(e){
        console.log("Error: ", e)
    }
}