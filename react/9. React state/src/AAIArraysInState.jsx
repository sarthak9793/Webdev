// Arrays have the same issue as objects in state have.
import { useState } from "react"
import "./AAIArraysInState.css"
export default function AAIArraysInState(){
    const [emojis, addEmoji] = useState(["😂"])
    const clickHandle = () => {
        // To add an element to an arraay, we will first create a copy of the array and add an element to the copied array
        // Spread in array literals: Spreads the elements from one array into a new array.
        const newEmojie = [...emojis, "😂"]
        addEmoji(newEmojie)
    }
    return(
        <>
            
            <div className="emoji">{emojis.map((emoji) => <span>{(emoji)}</span>)}</div>
            <button onClick={clickHandle}>Add Emoji</button>
            <hr />
        </>
    )
}