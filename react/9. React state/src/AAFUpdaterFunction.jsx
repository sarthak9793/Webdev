// 
import {useState} from "react"
export default function AAFUpdaterFunction(){
    const[num, setNum] = useState(0)
    function handlePlusOne(){
        setNum(num+1)
    }
    function handlePlusThree(){
        // To demonstrate the concept of updater function we are incrementing three by calling setNum(num+1) three times instead of doing setNum(num+3). This buttom wont work as expected. Because when we call setNum(num+1) the value of num wont be updated before the next render. So we are just setting the same value of the state variable three times.
        // So any time we are trying to make a change to the state, that depends on the previous value of the state we should use the updater function.
        // setNum(num+1)
        // setNum(num+1)
        // setNum(num+1)
        // Solution: provide an updater function to the setNum() function. React will automatically pass the current value of the state as the parameter of the updater function. If we do that multiple times, react is going to queue them, meaning, in the next setNum() call the value of current will be the value returned from the previous setNum() call.
        setNum((current) => current+1)
        setNum((current) => current+1)
        setNum((current) => current+1)
    }
    return(
        <>
            <hr />
            <button onClick={handlePlusOne}>+1</button>
            <button onClick={handlePlusThree}>+3</button>
            <p>The count is: {num}</p>
            <hr />
        </>
    )
}