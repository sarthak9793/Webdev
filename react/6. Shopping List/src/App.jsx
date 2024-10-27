import './App.css'
import ShoppingList from './ShoppingList'

const data = [
  {name: "eggs", quantity: 4, completed: false},
  {name: "apple", quantity: 6, completed: true},
  {name: "bread", quantity: 1, completed: true},
  {name: "cookies", quantity: 7, completed: false}
]

function App() {
  return (
    <ShoppingList items = {data}/>
  )
}

export default App
