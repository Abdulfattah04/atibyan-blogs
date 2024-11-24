import { BrowserRouter, Routes, Route } from "react-router-dom"  
import Home from "./pages/Home"
import About from "./pages/About"
import Dashboard from "./pages/Dashboard"
import Signin from "./pages/Signin"
import Project from "./pages/Project"
import Signup from "./pages/Signup"
import Header from "./components/Header"
import Footer from "./components/Footer"


export default function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About /> }/>
      <Route path='/dashboard' element={<Dashboard />}/>
      <Route path='/signin' element={<Signin />}/>
      <Route path='/signup' element={<Signup />}/>
      <Route path='/project' element={<Project />}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}