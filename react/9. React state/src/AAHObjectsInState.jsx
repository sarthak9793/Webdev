import { useState } from "react"

export default function AAHObjectsInState(){
    const [scores, setScores] = useState({p1Score: 0, p2Score:0})
    // const updatePlayer1 = () => {
    //     scores.p1Score += 1
    //     console.log(scores)
    //     setScores(scores)
    //     // You might think this is enough, but it is not. But because we are setting the state with the same scores object(i.e. address of scores object remains same when we change its properties), the component will not re-render. Instead we have to make a new copy of the object and then set the state
    // }
    const updatePlayer1 = () => {
        // Spread in objects: Spreads the properties from one object into a new object. Note: In case two properties that are getting copied have the same keys, then the latter value of the common key will be chosen.
        const newScores = {...scores, p1Score: scores.p1Score+1}
        setScores(newScores)
    }
    const updatePlayer2 = () => {
        const newScores = {...scores, p2Score: scores.p2Score+1}
        setScores(newScores)
    }
    
    return(
        <>
            <p>{scores.p1Score} : {scores.p2Score}</p>
            <button onClick={updatePlayer1}>+1 Player One</button>
            <button onClick={updatePlayer2}>+1 Player Two</button>
            <hr />
        </>
    )
}