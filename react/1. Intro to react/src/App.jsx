import './App.css'
import AAAExport from "./AAAExport.jsx";
import AABReturningMultipleElements from "./AABReturningMultipleElements.jsx";
import AACEvaluatingJSexpression from "./AACEvaluatingJSexpression.jsx";
import AADDie from "./AADDie.jsx";
import AAEComponentDecomposition from "./AAEComponentDecomposition.jsx";
import AAFStylingComponents from "./AAFStylingComponents.jsx";
import AAGPokecardExercise from "./AAGPokecardExercise.jsx";


// Defining the component: component name conventionally starts with a capital letter
function DefiningComponent() {
  return <h1>Hello React!</h1>;
}

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      {/* rendering the component */}
      <DefiningComponent />
      <DefiningComponent />
      <DefiningComponent />
      <AAAExport />
      <AAAExport />
      <AAAExport />
      <AABReturningMultipleElements />
      <AACEvaluatingJSexpression />
      <AADDie />
      <AADDie />
      <AADDie />
      <AAEComponentDecomposition />
      <AAFStylingComponents />
      <AAGPokecardExercise />
    </div>
  );
}

export default App
