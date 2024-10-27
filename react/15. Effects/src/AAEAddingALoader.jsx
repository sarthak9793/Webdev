import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
export default function AAEAddingALoader(){
    const getQuote = async () => (await axios.get("https://inspo-quotes-api.herokuapp.com/quotes/random"))
    const [quote, setQuote] = useState({text: "", author: ""})

    const [isLoading, setIsLoading] = useState(true)
    
    const handleClick = async () => {
        const quote  = (await getQuote()).data.quote
        setQuote({text: quote.text, author: quote.author})
    }
    useEffect(()=>{
            async function setInitialQuote() {
                const getQuote = async () => (await axios.get("https://inspo-quotes-api.herokuapp.com/quotes/random"))
                const quote  = (await getQuote()).data.quote
                setQuote({text: quote.text, author: quote.author})            
                setIsLoading(false)
            }
            setInitialQuote()
    },[])
    return(
        <div>
            <h1>
                Quote machine                
            </h1>
            {isLoading && <h2>Loading...</h2>}
            <h2>{quote.text}</h2>
            <h3>{quote.author}</h3>
            
            <button onClick={handleClick}>Get Quote!</button>            
        </div>
    )
}