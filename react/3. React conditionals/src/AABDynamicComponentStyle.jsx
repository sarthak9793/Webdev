// We use CSS to put our normal styling. But for dynamic styling we use the style attribute. The style attribute takes an object
export default function AABDynamicComponentStyle(){
    const score1 = Math.floor(Math.random()*10)+1
    const score2 = Math.floor(Math.random()*10)+1
    return (
        // The first pair of javascript is to escape JSX and the second pair defines object
        <div style={{color: score1>score2 ? "green" : "red"}}>
            <h1>{score1>score2 ? "Player 1 wins" : "Player 2 wins"}</h1>
            {score1>score2 ? <h2>I am glad player 1 won!</h2> : null}
            <p>Player 1: {score1}</p>
            <p>Player 2: {score2}</p>
            <hr />
        </div>
    )
}