const btn = document.querySelector('#btn')
btn.addEventListener('click', () => {
    adddadjoke()    
})
const getdadjoke = async () => {
    try{
        const config = {
            headers: {
                Accept: 'application/json'
            }
        }
        const response = await axios.get("https://icanhazdadjoke.com/", config)
        return response.data.joke
    }catch(e){
        return "NO jokes available"
    }
}
const adddadjoke = async () => {
    const ul = document.querySelector('#dadjoke')
    const li = document.createElement('li')
    const joke = await getdadjoke()
    li.append(joke)
    ul.append(li)
}