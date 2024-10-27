import {createContext, useState} from "react"

// We can give a default value to our context just like we do in useState()
export const CounterContext = createContext(null)

// context provider component
export const CounterProvider = (props) => {
    const [count, setCount] = useState(0)
    return(
        <CounterContext.Provider value={{count, setCount}}>
            {props.children}
        </CounterContext.Provider>
        
    )

}