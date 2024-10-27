function handleClick(){
    console.log("You clicked me!")
}
function handleHover(){
    console.log("You Hovered over me!")
}
// Just like vanilla javascript, in react, the event object is automatically passed in the event handler function. We can capture it by putting in an parameter.
function handleKeys(evt){
    console.log(evt.key)    
}
div
export default function AAAReactEvents(){
    return(
        <>
            {/* the onclick or any other event attribute expects a event handler function name as value */}
            <button onClick={handleClick}>
                Click ME!
            </button>
            <button onMouseOver={handleHover}>
                Hover ME!
            </button>
            <input type="text" onKeyDown={handleKeys}/>
        </>
    )
}