import { useState } from "react";
import Box from "./Box";
export default function BoxGrid(){
    const [isRed, setIsRed] = useState(new Array(9).fill(true))
    const handleReset = () => {
        setIsRed([false,false,false,false,false,false,false,false,false])
    }
    const toggle = (idx) => {
        const newIsRed = isRed.map((isRedValue, index)=>{
            if(index===idx)
                return !isRedValue
            else 
                return isRedValue
        })
        setIsRed(newIsRed)
    }
    return(
        <div>
            {
                isRed.map((isRedValue, index)=>(<Box isRed={isRedValue} toggle={()=>(toggle(index))}/>))
            }
            <br />
            {/* We want a button to reset all boxes. Earlier each box kept track of its own state and had its own click handler function to handle click which in turn called the setIsRed function to set the state when box was clicked. And hence there was no place that we could write code where we could change state of every single box to implement the reset button, because as we know we cant pass state up. Therefore we needed to the raise the state the least amount possible but as high as we need it and in this case the button needs to have access to the state. So what we need to do is move the state into the BoxGrid. That part was easy. But now how do I get each box to still toggle when I click on it. The state is now managed now in the parent component called BoxGrid, I need to pass a updater function into the child component called Box from the parent component. When I click on a Box, I need it to call that function from the parent. */}
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}