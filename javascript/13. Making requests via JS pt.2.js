// Using axios to make requests
axios
    .get("https://swapi.dev/api/people/1") //this will return a promise
    .then((response)=>{
        console.log(response) 
        console.log(response.data) //We get the parsed JSON without doing any extra steps
    })
    .catch((err)=>{
        console.log("Error: ",err)
    })

// Using an asynchronous function.
const makerequests = async (id)=>{
    try{
        const response = await axios.get(`https://swapi.dev/api/people/${id}`)
        console.log(response.data.name)
    }catch(e){
        console.log("Error: ", e)
    }
}

// Setting headers with axios
const dadJoke = async () => {
    const config = {
        headers: {
            Accept: 'application/json'
        }
    }
    const response = await axios.get("https://icanhazdadjoke.com/", config) //In the second parametre we can pass in the configuration information object, and one of those things that we can configure is the headers which itself is an object
    console.log(response.data.joke)
}
