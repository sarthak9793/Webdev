import "./AAEColorBoxExercise2.css"
import { useState } from "react"
const colors = ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#00ffff", "#ff00ff", "#800000", "#008000", "#000080", "#808000", "#008080", "#800080", "#ff6666", "#66ff66", "#6666ff", "#ffff66", "#66ffff", "#ff66ff", "#b30000", "#003300", "#000080", "#b38600", "#004c4d", "#4d004d", "#cc0000"]
const randomColor = () => colors[Math.floor(Math.random()*25)]

export default function AAEColorBoxExercise2({color}){
    const [currentColor, setCurrentColor] = useState(color)
    const handleClick = () => {
        setCurrentColor(randomColor())
        console.log("clicked")
    }
    return(
        <div className="box" style={{backgroundColor: currentColor}} onClick={handleClick}></div>
    )

}