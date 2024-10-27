import { useState } from "react"
import "./AAKDeletingFromArray.css"
import { v4 as uuid } from 'uuid';
export default function AAKDeletingFromArray(){
    const [nums, setNum] = useState([{id: uuid(), num: 1}])
    const clickHandleAdd = () => {
        const lastElementObj = nums.slice(-1)[0]
        const newNums = [...nums, {id: uuid(), num: lastElementObj.num+1}]
        setNum(newNums)
    }
    // Shayad agar koi parameter pass nahi karte then by default evt pass ho jata hai, but agar koi parameter pass karo then wahi parameter pass hota hai
    const clickHandleDelete = (id) => {
        // The most popular method to delete is to use the filter method. The filter method create a copy of the array with all the elements that pass a test
        const newNums = nums.filter((num)=>(num.id!==id)) //!== is used because we want to keep all the elements that dont have the same id as the element that was clicked
        setNum(newNums)
    }
    return(
        <div className="xyz">
            <div>Click to delete!</div>
            {/* We need to pass the id of the element that was clicked. So we can do this: onClick={clickHandleDelete(currNum.id)}, but that would immediately execute the function, so instead we would pass an arrow function that would return clickHandleDelete(currNum.id) */}
            {nums.map((currNum) => (<button onClick={()=>(clickHandleDelete(currNum.id))} key={currNum.id}>{currNum.num}</button>))} 
            <br />
            <button onClick={clickHandleAdd}>Add numbers</button>
            <hr />
        </div>
    )
}