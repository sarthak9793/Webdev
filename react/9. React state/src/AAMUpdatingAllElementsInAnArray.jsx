import { useState } from "react"
import "./AAMUpdatingAllElementsInAnArray.css"
import { v4 as uuid } from 'uuid';
export default function AAMUpdatingAllElementsInAnArray(){
    const [emojis, setEmoji] = useState([{id: uuid(), emoji: "😂"}, {id: uuid(), emoji: "😂"}, {id: uuid(), emoji: "😂"}])
    const clickHandle = () => {
        const newEmojis = emojis.map((e)=>({...e, emoji: "😭"})) // emoji.map() will return an array. Each element of the array will be returned by the callback function. Each element/object of emojis array is put into e and callback function is called with that value. The callback function should return an object. That object should be same as the old object, but its emoji property has to be updated to 😭
        setEmoji(newEmojis)
    }
    return(
        <div>
            <div className="xyza">{emojis.map((e)=>(e.emoji))}</div>
            <button onClick={clickHandle}>Change all emojis to crying face</button>
            <hr />
        </div>
    )
}