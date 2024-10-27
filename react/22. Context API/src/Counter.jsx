import { useContext, useState } from "react"
import {CounterContext} from "./context/CounterContext"

export default function Counter(){
    const counterState = useContext(CounterContext)
    return(
        <h1>
            {counterState.count}
        </h1>
    )
}