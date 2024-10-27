import { useState } from "react"
import Dice from "./Dice"
import {sum, dieThrow} from "./utils"
export default function LuckyN({numDice, target, winCheck, title}){
    const [diceValues, setdiceValues] = useState(new Array(numDice).fill(0).map(()=>(dieThrow())))
    const handleClick = () => {
        const newDiceValues = new Array(numDice).fill(0).map(()=>(dieThrow()))
        setdiceValues(newDiceValues)
    }
    const won = winCheck(diceValues, target)
    return(
        <div>
            <h1>Lucky{target}</h1>
            <h2>{title} {target}</h2>
            {won && <h2>You Won!</h2>}
            <Dice diceValues={diceValues}/>
            <button onClick={handleClick}>Roll Again!</button>
        </div>
        
        
    )
}