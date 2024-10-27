import { useState } from "react"

export default function ScoreKeeper({numPlayers, target}){
    const [playersScore, setPlayerScore] = useState(new Array(numPlayers).fill(0))
    const clickHandle = (index) => {
        const newScores = [...playersScore]
        ++newScores[index]
        setPlayerScore(newScores)
    }
    const handleReset = () => {
        const newScores = new Array(10).fill(0)
        setPlayerScore(newScores)
    }
    return(
        <div>
            <h1>Score Keeper</h1>
            <ul>
                {playersScore.map((playerScore,index) => (
                    <li>Player {index+1} === {playerScore} 
                        <button onClick={()=>(clickHandle(index))}>+1</button>
                        {playerScore>=target && <span>You are the winner</span>}
                    </li>
                ))}                
            </ul>
            <button onClick={handleReset}>Reset</button>
            
        </div>
    )
}