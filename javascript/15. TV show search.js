const previousMovies = []
const form = document.querySelector('#form')
const input = document.querySelector('#name')
input.addEventListener('keyup', (evt)=>{
    if (evt.key.length === 1 && evt.key.match(/[a-z]/i) || evt.key === "Backspace" || evt.key === " ") {
        console.log(evt.key)
        getMovies(form.elements.name.value)
      }
    
})
const getMovies = async (title)=>{
    // An alternative way to including query parameters in a GET request with Axios, you need to specify them as an object in the params property of the configuration object passed to the axios.get() method:
    const config = {params: {q: title}}
    const results = await axios.get(`https://api.tvmaze.com/search/shows`, config)
    const movies = results.data
    
    // Removing previous movies
    for(previousMovie of previousMovies){
        previousMovie.remove()
    }

    // Adding new movies
    for(const movie of movies){
        if(movie.show.image){
            const image = document.createElement('img')
            image.setAttribute('src', movie.show.image.medium)
            document.body.append(image)
            previousMovies.push(image)
        }        
    }
}
