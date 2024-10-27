// A real use case for useEffect: One of the most common ways to use it load initial data from an API on the first render of a component
// I want a quote to be loaded on the first render
// You might think that we can pass a function to the useState which will initialize the value of quote state with the first quote. The function would have to be asynchronous since we are making an API request. The problem is that useState is not designed to handle asynchronous function. Using an asynchronous function inside useState wont give us an error, but useState is not going to wait for the request to complete, its just going to take the immediate return value of the asynchronous function which is a promise and use that to set our state
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
export default function AADFetchingDataOnInitialRender(){
    const getQuote = async () => (await axios.get("https://inspo-quotes-api.herokuapp.com/quotes/random"))
    const [quote, setQuote] = useState({text: "", author: ""})
    
    const handleClick = async () => {
        const quote  = (await getQuote()).data.quote
        setQuote({text: quote.text, author: quote.author})
    }
    // There is a little annoying complication: useEffect does not want us to pass an asyncrhonous callback, so it gives us a workaround where we can just wrap our async function in a non async function and then immediately execute our async function after we define it
    useEffect(()=>{
            async function setInitialQuote() {
                const getQuote = async () => (await axios.get("https://inspo-quotes-api.herokuapp.com/quotes/random"))
                const quote  = (await getQuote()).data.quote
                setQuote({text: quote.text, author: quote.author})            
            }
            setInitialQuote()
    },[])
    return(
        <div>
            <h1>
                Quote machine                
            </h1>
            <h2>{quote.text}</h2>
            <h3>{quote.author}</h3>
            
            <button onClick={handleClick}>Get Quote!</button>            
        </div>
    )
}