import {Routes, Route} from "react-router-dom"
// pages
import Register from "./pages/Register"
import Login from "./pages/Login"
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import AddBooks from "./pages/AddBooks"
import MyBooks from "./pages/MyBooks"
import BuyBooks from "./pages/BuyBooks"
// Components
import Navbar from "./components/Navbar"
function App() {

  return (
    <div className="h-full" style={{backgroundImage: "url(https://img.freepik.com/free-vector/books-seamless-pattern_1284-5148.jpg?size=626&ext=jpg)"}}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register/>} />
        
        <Route path="/login" element={<Login/>}/>
        <Route path="/aboutUs" element={<AboutUs/>}/>
        <Route path="/addBooks" element={<AddBooks/>}/>
        <Route path="/myBooks" element={<MyBooks/>}/>
        <Route path="/buyBooks" element={<BuyBooks/>}/>
      </Routes>
      
    </div>
  )
}

export default App
