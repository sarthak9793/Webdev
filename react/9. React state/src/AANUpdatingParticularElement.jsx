import { useState } from "react"
import "./AAMUpdatingAllElementsInAnArray.css"
import { v4 as uuid } from 'uuid';
export default function AANUpdatingParticularElement(){
    const [emojis, setEmoji] = useState([{id: uuid(), emoji: "😂"}, {id: uuid(), emoji: "😭"}, {id: uuid(), emoji: "😂"}])
    const clickHandle = () => {
        const newEmojis = emojis.map((e)=>{
            if(e.emoji==="😭")
                return {...e, emoji: "😂"}
            else
                return {...e}
        }) 
        setEmoji(newEmojis)
    }
    return(
        <div>
            <div className="xyza">{emojis.map((e)=>(e.emoji))}</div>
            <button onClick={clickHandle}>Change crying face to happy face</button>
        </div>
    )
}