import './App.css'
import AAAReactConditionals from './AAAReactConditionals'
import AABDynamicComponentStyle from './AABDynamicComponentStyle'
import AABDynamicComponentStyle2 from './AABDynamicComponentStyle2'

function App() {
  return(
    <>
      <AAAReactConditionals/>
      <AAAReactConditionals/>
      <AAAReactConditionals/>
      <AABDynamicComponentStyle/>
      <AABDynamicComponentStyle/>
      <AABDynamicComponentStyle/>
      <AABDynamicComponentStyle2 color="olive" fontSize={100}/>
    </>
  )
  
}

export default App
