// When this component is first run/rendered, it runs normally from top to bottom like any javascript function. Whenever setNum() is called react knows to re-render this component i.e. the component will be run again. How does this work with useState(). Isn't this line: const[num, setNum] = useState(0) running every single time and setting the value of num to 0. The answer is no. React is smart enough to know the 0 i.e. the initial value will only be used the very first time the component is rendered and after that it knows to ignore this, every other time it will use the new value of num, whatever that is. What useState() function will do is retrieve the new value of num and set it in the num variable. So this means that that new value of num is actually set in the next render which is automatically going to happen once setRun() is called. I am pointing this out because if we try to use the value of num after setNum() but before the next render then we will get the old value of num. The new value will actually be set in the next render.
/*  Recap: Rendering and state
        1. A state setter function is called
        2. Your code finishes running
        3. The component re-renders
        4. In this re-render, state will be set to new value
*/
// When does react re-render: React only re-renders when there is a change in the state variable. If we keep setting the state with the same value over and over, react is not going to keep rendering for no reason
import {useState} from "react"
export default function AADComponentLifecycle(){
    console.log("Component has been executed")
    const[num, setNum] = useState(0)
    console.log("num: ",num);
    function handleClick(){
        setNum(num+1)
        console.log("setNum() has run")
        console.log(`num(setrun ): ${num}`)
    }
    return(
        <>
            <button onClick={handleClick}>Counter</button>
            <p>The count is: {num}</p>
            <hr />
        </>
    )
}
