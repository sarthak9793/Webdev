const express = require("express")
const app = express()

app.listen(5050, ()=>{
    console.log("Listening on port 5050")
})
const path = require("path")
const buildPath = path.join(__dirname, '../client/dist')
app.use(express.static(buildPath))

app.use(express.urlencoded({extended: true}))

app.get('/', (req, res)=>{
    res.sendFile(buildPath + 'index.html')
})

/* Revisting GET vs POST requests
    GET:
        1. Used to retrieve information
        2. Data is sent via query string. A query string is a part of a uniform resource locator (URL) that assigns values to specified parameters. Ex] https://example.com/over/there?name=ferret, here name=ferret is the query string. The question mark is used as the seperator and is not part of the query string. Multiple query strings are seperated by ampersands.
        3. The query string is plainly visible in the URL
        4. Limited amount of data can be sent as URL itself is limited to 2048 characters

    POST:
        1. Used to post data to the server
        2. Used to perform write/create/update
        3. Data is sent via request body, not a query string.
        4. Can send any sort of data including JSON and also send more data as we are not limited by the length of the URL
*/
app.get('/tacos', (req,res)=>{
    res.send("<h1>GET request recieved</h1>")
})
app.post('/tacos', (req,res)=>{
    // Accessing the POST request body
        // req.body contains key-value pairs of data submitted in the request body. By default, it is undefined, and is populated only when you use body-parsing middleware such as body-parser and multer. This boils down to the fact that we can send data in different formats in the request body. Therefore we have to explicitly instruct express on how to parse this data. Only if we instruct express on how to parse the data in the request body, will it populate the req.body property with the data from the request body. For whatever reason there is no default, you would think there would be a default, but default is just 'undefined' i.e. there is no request body.
        
        // How to parse the request body? We will use app.use() which is used to run a function on every single request. To parse json data, we use express.json(), to parse form data we The code is: app.use(express.urlencoded({extended: true})) which instructs express to parse the request body as urlencoded data i.e. form data.
        console.log(req.body)
    res.send("<h1>POST request recieved</h1>")

})