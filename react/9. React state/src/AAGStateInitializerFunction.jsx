// Very niche hypothetical(or not). Instead of directly passing value as the initial value in the useState() function, we can also pass a function if there is complex logic behind that value. We know that the inital value is used only in the first useState() call. So every other time useState() is called, the intial value is ignored. So the only time the initializer function should execute is the first time useState() is called. But when we pass "myFunc()" in useState() then myFunc() is executed every time the setNum() is called, but its value is ignored, which is wasteful. To avoid that we can drop the () and just pass the function name i.e. "myFunc". Now myFunc() will only be called the first time setNum() is called.

import {useState} from "react"
function myFunc(){
    // complex logic
    console.log("myFunc() is being executed")
    return 10
}
export default function AAGStateInitializerFunction(){
    // const[num, setNum] = useState(myFunc())
    const[num, setNum] = useState(myFunc)
    function handleClick(){
        setNum(num+1) 
    }
    return(
        <>
            <button onClick={handleClick}>Counter</button>
            <p>The count is: {num}</p>
            <hr />
        </>
    )
}