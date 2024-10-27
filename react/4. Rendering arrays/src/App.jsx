import './App.css'
import {AAARenderingArrays, AAARenderingArrays2, AAARenderingArrays3} from './AAARenderingArrays'

function App() {
  return(
    <>
      <AAARenderingArrays nums={[1,2,3]}/>
      <AAARenderingArrays2 />
      <AAARenderingArrays3 fruits={["apple", "orange", "banana"]} />
    </>
  )
}

export default App
