import AAAAuthentication from "./AAASigningUp"
import AABLoggingIn from "./AABSigningIn"

function App() {
  return (
    <div className="flex flex-col gap-y-11 justify-center h-screen items-center">
      <AAAAuthentication />
      <AABLoggingIn/>
      

    </div>

  )
}

export default App
