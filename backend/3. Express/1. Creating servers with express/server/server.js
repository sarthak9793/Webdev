/* TLDR: 22/2/24
        All these terms(JS, node.js, express) are making my head hurt. So I'll try to flesh it out. The javascript we wrote before was always executed on the browser. But when we started writing server side javascript, we needed to install node.js which is a runtime environment for javascript, essentially allowing us to execute javascript outside browsers(i.e. on servers). How does express fit into this? We install the express npm package and in our javascript file, we simply require express, which returns an function. When we call that function, an object is returned.This object has a bunch of methods which help us to create servers.
*/

/* Semantic doubt
        1. Express.js: This is a web application framework for Node.js that is used to create servers. Express provides a set of features for building web applications and APIs, including routing, middleware support, and handling HTTP requests and responses. It’s essentially a series of middleware function calls. 

        2. Express Application: When you invoke Express, you’re creating an application. This is done by calling the express function after requiring it: const app = express();. This app object has methods which are used to create servers.

        3. Server: This is what listens for requests and sends responses. With Express, you create a server when you call app.listen(). This server is capable of listening to requests coming from client computers (browsers) connected to the same network (like the internet).
*/
/*
    Express helps us:
        1. Start up server to listen for requests
        2. Parse incoming requests
        3. Match those requests to particular routes
        4. Craft our http response
*/

// To use express we have to first require it. This will return a function.
    const express = require('express')

// We will exeute the function and save its return value which is an object in a variable. 
    const app = express() // This app object is the actual express application

// console.log(app) // We will see that this app object has many methods in it like route, param, path, enabled, disabled, copy, delete, get, post, etc


// To start the server we need to start listening to incoming requests. To do so we will use a method that comes with our app object called listen. The first parameter of the listen method is the port the server will listen on. The second parameter is a callback function that will execute when the server has started listening.
    app.listen(5000, () => {console.log("Listening on port 5000")})

// "use" method in express is used to mount middleware functions in our application's request processing pipeline. Middleware functions in Express are functions that have access to the request object (req), the response object (res), and the next function. They can perform tasks related to processing the request, such as authentication, logging, or modifying the request or response objects. 
// The app.use() method is used to specify middleware function that should be executed for all HTTP requests(GET, POST, DELETE, etc) that match a specific path/route. You can also use app.use() without specifying a path, in which case the middleware function will be executed regardless of the path.
// req and res are objects that represents the incoming request and outgoing response respectively. These objects are automatically made by express and passed in to middleware functions. Note that http request is not a javascript object, it is just text information, not particular to any programming language. But express parses the http request and converts it into a javascript object.
    /*app.use((req,res)=>{
        console.log("We got a new request!")
        // console.dir(req)

        // res.send() sends the http response. The response can be a string, boolean, object, array. The content-type header of the response will be set automatically by express accordingly.
            // res.send("Hey, I am the response!")
            // res.send("<h1>WE GOT A NEW REQUEST!</h1>")
            // res.send({color: "red"})
        // NOTE: Anytime res.send() is called, we are done for that one request. We cannot have more than one response for a single http request. Therefore to see the effect of the app.get() method we will have to comment out res.send() in app.use() cuz this method responds to EVERY request, hence res.send() of app.get() will never get executed. 
        // Future edit: 23/2/24 It also seems that merely having a app.use() method is leading to the page to not being loaded. Therefore I'm commenting out the entire thing.
    }) */

// Routing: Routing refers to taking incoming requests and a path that is requested and matching that to a response. A path could be /cats, /dogs, etc. For ex] if localhost:5000/cats is requested, we want to match that to some particular response, instead of handling every single request the exact same way.
    // app.get() method is used to specify middleware function that should be executed for HTTP GET requests to a specified path
        app.get("/", (req, res) => {
            res.send("<h1>Homepage</h1>")
        })
        app.get("/cats", (req, res) => {
            res.send("<h1>Meoww!!</h1>")
        })
        app.get("/cats", (req, res) => {
            res.send("<h1>Woof!!</h1>")
        })
        // app.get("*", (req, res) => {
        //     res.send("<h1>I don't know that path</h1>")
        // })
        // Note: We can also use "*" as path to respond to all GET requests regardless of the path. But take care to put it at the end, otherwise the responses we have specified for specific paths will never be executed.

    // app.post() method is used to specify the middleware finction that should be executed for HTTP Post requests to a specified path. Try sending post request using postman
        app.post("*", (req, res) => {
            res.send("Recieved post request")
        })
    // path parameters: path parameters are used to capture the variable parts of a URL, allowing us to build dynamic routes that respond to different input values. They are denoted by a colon (:) followed by the parameter name Lets take example of reddit. Instead of manually creating routes for each subreddit like: www.reddit.com/r/AbruptChaos/ or www.reddit.com/r/cursedcomments/, we can instead define a pattern using path parameter, like www.reddit.com/r/:subreddit. Express creates a property for us called params whose value is an object. The values from the path parameters are stored in the params object. The keys in the params object correspond to the the parameter name and the the value correspond to the actual value in the url.
        app.get("/r/:subreddit_name", (req, res) => {
            // destructuring the object
            const {subreddit_name} = req.params
            res.send(`<h1>${subreddit_name}</h1>`)
        })
    
    // Query strings: It is the portion of a url that comes after a (?) and we can include information in key-value pairs as part of this query string. Ex: www.reddit.com/search/?q=abc.
    // How to access the value of query string? The req object has a property called 'query' and in that property we will find the key value pairs as per the query string. 
        app.get("/search", (req, res) => {
            const {q1, q2} = req.query
            res.send(`<h1>You searched: ${q1} and ${q2}</h1>`)
        }) // To try this, enter url: localhost:5000/search?q1=AbruptChaos&q2=podcast

/* How to serve a react app from an express server??
        Note: By default, vite ships with a server that we can host our react app with. We ran this server using the command: npm run dev, which launched the development server with features like hot module replacement, allowing us to see the changes being reflected automatically without having to manually restart the server after every modification. 
        Now, instead of serving our react app with the development server that comes with vite, we want to instead serve it with our express server.

        1. Create a react app in the client folder
        2. After making the necessary changes, build the app using the command: npm run build. What this command does is that it creates a dist directory with a production build of your app. This dist directory has the optimized html file that we actually want to serve the client. NOTE: We cannot serve the non-build version of index.html file. It will not work. We must first build our frontend app and then only can we serve the index.html file created inside the dist folder.
        3. In the server.js file, we need to define the path of the file that we want express to serve. Here are the required configuration: 
            const buildPath = path.join(__dirname, "../client/dist")
            app.use(express.static(buildPath))
        dirname is a globally available variable that contains the absolute pathname of the directory containing the javascript file that is currently being executed.
        4. Then instead of responding to a request with a string using res.send(), we will instead respond with a file using res.sendFile(buildPath + '/index.html')
        
        Note: Inside the server's package.json we might have to add another script called "postinstall" with value "cd ../client && npm install" so whenever we install any packages in the server directory, the corresponding react dependencies.

        Note: 
*/
    const path = require('path')
    // The path.join() method joins the specified path segments into one path.
    const buildPath = path.join(__dirname, '../client/dist')
    app.use(express.static(buildPath))
    app.get('/react', (req, res) => {
        res.sendFile(buildPath + '/index.html')
    })
    
