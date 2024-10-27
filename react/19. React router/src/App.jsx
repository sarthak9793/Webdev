import './App.css'
import { Routes, Route } from "react-router-dom"
import Home from './Home'
import AboutUs from './AboutUs'
import ContactUs from './ContactUs'
import Navbar from './Navbar'


function App() {


  return (
    <div>
      {/* You will notice something interesting here, whenever we click on a link, the entire page does not change, only the content inside the routes section gets changed */}
      <Navbar/>
      {/* The way react router works is that when you enter the react router component it is going to find the the route that matches whatever route you are on. If the route matches / then its going to render whatever is inside that element. That could be some component or some JSX code
      Essentially ham har component tak pahuchne ka route bana rahe hain */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aboutUs' element={<AboutUs />} />
        <Route path='/contactUs' element={<ContactUs />} />
      </Routes>
    </div>

  )
}

export default App
