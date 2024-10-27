import Die from "./Die"
export default function Dice({diceValues}){
    return(
        <div>
            {/* Important knowledge gain: If the array is empty, the function will not execute   */}
            {diceValues.map((dieValue, index)=>(
                <Die value={dieValue} key={index}/>
            ))}            
        </div>
    )
    
}