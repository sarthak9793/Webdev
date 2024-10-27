import { useState } from "react"
import "./AAJGeneratingIDsWithUUID.css"
import { v4 as uuid } from 'uuid';
export default function AAJGeneratingIDsWithUUID(){
    // const [emojis, addEmoji] = useState(["😂"]) //old
    const [emojis, addEmoji] = useState([{id: uuid(), emoji: "😂"}])
    const clickHandle = () => {
        // const newEmojie = [...emojis, "😂"] //old
        const newEmoji = [...emojis, {id: uuid(), emoji: "😂"}]
        addEmoji(newEmoji)
    }
    return(
        <>
            {/* old */}
            {/* Remember we have a list/array of elements, and react needs a key to keep track of these elements. What we can get away with, which is not great, is using the index of the array as they key. But this is not a great approach becuase if our order ever changes in the array, or if we ever remove elements from the array then everything gets messed up, so you generally dont want to do that. Hence we need a way to add a unique ID to each element in an array/list. This is achieved using UUID */}
            {/* <div className="emoji">{emojis.map((emoji, index) => <span key={index}>{(emoji)}</span>)}</div>
            <button onClick={clickHandle}>Add Emoji</button> */}
            
            {/* To use UUID we will have to restructure our data, so instead of being just an array of emojis, I want it to be an array of object, where each object has an id and then have the actual emoji */}
            <div className="emoji">{emojis.map((e) => <span key={e.id}>{(e.emoji)}</span>)}</div>
            <button onClick={clickHandle}>Add Emoji</button>
            <hr />
        </>
    )
}