import { useState } from "react";
import "./AACTogglerComponent.css"
export default function AACTogglerComponent(){
    const [emoji, setEmoji] = useState("😂")
    const handleToggle = () => {
        if(emoji === "😂")
            setEmoji("😭")
        else
            setEmoji("😂")
    }
    return(
        <div>
            <div className="emoji">{emoji}</div>
            <button onClick={handleToggle}>Toggle emoji</button>
            <hr />
        </div>
    )

}