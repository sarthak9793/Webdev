import {Route, Routes} from "react-router-dom"
import Home from "./Home"
import CreateUser from "./CreateUser"
import Users from "./Users"
import Navbar from "./Navbar"
function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/CreateUser" element={<CreateUser/>}></Route>
        <Route path="/Users">
          <Route path=":id" element={<Users/>}></Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
