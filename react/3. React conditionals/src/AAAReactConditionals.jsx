// React conditionals are used when we want to conditionally render components
export default function AAAReactConditionals(){
    const score1 = Math.floor(Math.random()*10)+1
    const score2 = Math.floor(Math.random()*10)+1
    return (
        <>
            {/* Situation 1 where we want the h1 to always be rendered */}
            <h1>{score1>score2 ? "Player 1 wins" : "Player 2 wins"}</h1>
            {/* Situation 2 where we want the h2 to be selectively rendered */}
            {score1>score2 ? <h2>I am glad player 1 won!</h2> : null}
                {/* or */}
                {/* {score1>score2 && <h2>I am glad player 1 won!</h2> } */}
            <p>Player 1: {score1}</p>
            <p>Player 2: {score2}</p>
            <hr />
        </>
    )
}