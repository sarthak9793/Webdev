// Using state
/*  - useState() is a React Hook that lets you add a state variable to your component.
    - It is used to declare a state variable and a corresponding function to update its value
    - useState() must be called INSIDE a component
    - When you call useState(initialValue), it returns an array with two elements. The first element is the current value of the state variable, and the second element is a function that can be used to update the state.
    - Ex] const [count, setCount] = useState(0)
    - In the example above, useState(0) initializes the state variable count with an initial value of 0. The useState function returns an array with two elements: the current value of count (initialized to 0) and the setCount function. Whenever you call setCount(newValue), React schedules a re-render of the component with the updated value. It means that the component will be re-rendered with the new state value, and any parts of the UI that depend on that state will be updated accordingly.    

    - Extra info => useState is one example of a react hook. There are 15 react hooks. A hook is basically a function that react gives us that we can choose to incorporate into our components to add some sort of functionality
    - Also to use useState() we have to import it from react
    - We can have multiple state variables in a component
    
 */
import {useState} from "react"
export default function AABuseState(){
    // We are destructing the array. Very common convention
    const[num, setNum] = useState(0)
    function handleClick(){
        setNum(num+1) //this will update the value of num and re-render the component
    }
    return(
        <>
            <button onClick={handleClick}>Counter</button>
            <p>The count is: {num}</p>
            <hr />
        </>
    )
}