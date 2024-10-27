import './App.css'
// import Die from './Die'
// import Dice from './Dice'
import LuckyN from './LuckyN'
import {equalTo, lessThan, allSame} from "./utils"

function App() {
  return(
    <div>
      {/*                         We are passing the winCheck function as prop to LuckyN, It could be anything, lessThan, equalTo, allSame, etc */}
      <LuckyN numDice={3} target={7} winCheck={equalTo} title="Roll equal to"/>
      <LuckyN numDice={2} target={7} winCheck={lessThan} title="Roll less than"/>
      {/* I have set target to empty string because When I have to print out the game mode, I am also printing target after it, but for third game mode there is no target, so I am setting it as empty string so nothing gets printed */}
      <LuckyN numDice={3} target="" winCheck={allSame} title="Roll all same"/> 
    </div>
    
  )  
}
export default App
