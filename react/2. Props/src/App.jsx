import './App.css'
import AAAIntro from './AAAIntro'
import AABNonStringProps from './AABNonStringProps'
import AABNonStringProps2 from './AABNonStringProps2'
import AABNonStringProps3 from './AABNonStringProps3'

function App() {
    return (
        <div>
            {/* Passing props */}
            <AAAIntro name="A" from="X"/>
            <AAAIntro name="B" from="Y"/>
            <AAAIntro name="C" from="Z"/>
            <AAAIntro />
            {/* Non string props: numbers, arrays, objects, etc... */}
            <AABNonStringProps num1={2} num2={3}/>
            <AABNonStringProps num1={2} num2={3}/>    
            <AABNonStringProps2 arr={[1,2,3]}/>
            <AABNonStringProps3 obj={{a: 2, b:3}}/>
                
            
        </div>
    )
}

export default App
