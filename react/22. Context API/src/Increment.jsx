import { useContext } from "react"
import {CounterContext} from "./context/CounterContext"
export default function Increment(){
    const {count, setCount} = useContext(CounterContext)
    const handleClick = () => {
        setCount(count+1)
    }
    return(
        <button onClick={handleClick}>
            Increment
        </button>
    )
}