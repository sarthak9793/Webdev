import {Routes, Route} from "react-router-dom"
// pages
import Account from "./pages/Account"
import Coins from "./pages/Coins"
import Home from "./pages/Home"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
// components
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App() {
  

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/account" element={<Account/>}/>
        <Route path="/signIn" element={<SignIn/>}/>
        <Route path="/signUp" element={<SignUp/>}/>
        <Route path="/coins" >
          {/* Nested routes begin from the parent route */}
          {/* Dynamic routes: When we use :___ it means it could be anything. Meaning if if use any URL coinPage/*anything* it would take me to the <CoinPage/> component. We can access the value of coinId inisde <coinPage/> component by using useParams hook which returns an object with the value */}
          <Route path=":coinId" element={<Coins/>}/>
        </Route>
      </Routes>
      <Footer />
      
    </>
  )
}

export default App
