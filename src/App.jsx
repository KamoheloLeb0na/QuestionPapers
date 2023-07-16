import Login from "./pages/Login"
import ResponsiveAppBar from "./components/Header"
import { BrowserRouter , Routes , Route } from "react-router-dom"
import SignUp from "./pages/SignUp"
import Home from "./pages/Home"
import LGCSE from "./pages/LGCSE"
import Footer from "./components/Footer"

export default function App(){
  return(
    <div>
      <ResponsiveAppBar/>
      <div style={{margin:"2rem"}}>
      <BrowserRouter>
        <Routes>
          <Route element={<Login/>} path="/login"/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/" element={<Home/>}/>
          <Route element={<LGCSE/>} path="/lgcse"/>
        </Routes>
      </BrowserRouter>
      </div>
      <Footer/>
    </div>
  )
}