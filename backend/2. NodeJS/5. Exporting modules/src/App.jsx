// In this unit, I wanted to demonstrate how to export modules and how if we have multiple components in a directory, how can we export them. 
// There are two ways to export multiple modules from a directory. We can export each module independently or we can create an index.js(name matters) file inside the directory where the modules are stored and then re-export all the modules. Then we can import all these modules as follows: import {A,B,C} from './directory_name'
import Sum from './math'
import {A, B, C} from './components'

function App() {
  console.log(Sum(2,3))

  return (
    <>
      <A />
      <B />
      <C />
      
    </>
  )
}

export default App
