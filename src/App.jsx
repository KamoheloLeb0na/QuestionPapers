import Login from "./pages/Login"
import ResponsiveAppBar from "./components/Header"
import { BrowserRouter , Routes , Route } from "react-router-dom"
import SignUp from "./pages/SignUp"
import Home from "./pages/Home"
import LGCSE2 from "./pages/LGCSE2"
import LGCSE4 from "./pages/LGCSE4"
import Footer from "./components/Footer"
import Choose from "./pages/Choose"

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
          <Route path="/questionpapermenu" element={<Choose/>}/>
          <Route element={<LGCSE2/>} path="/lgcse2"/>
          <Route element={<LGCSE4/>} path="/lgcse4"/>
        </Routes>
      </BrowserRouter>
      </div>
      <br />
      <Footer/>
    </div>
  )
}