
import ResponsiveAppBar from "./components/Header"
import { BrowserRouter , Routes , Route } from "react-router-dom"
import Notes from "./pages/Notes"
import Home from "./pages/Home"
import LGCSE2 from "./pages/LGCSE2"
import LGCSE4 from "./pages/LGCSE4"
import Test from "./pages/Test"
import IGCSE from "./pages/IGCSE"

import SaveExamsDisplayPaper2 from "./pages/SaveExams2"
import SaveExamsDisplayPaper4MS from "./pages/SaveExams4MS"
import SaveExamsDisplayPaper2MS from "./pages/SaveExams2MS"
import SaveExamsDisplayPaper4 from "./pages/SaveExams4"
import Footer from "./components/Footer"
import Choose from "./pages/Choose"

export default function App(){
  return(
    <div>
      <ResponsiveAppBar/>
      <div style={{margin:"2rem"}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/questionpapermenu" element={<Choose/>}/>
          <Route element={<SaveExamsDisplayPaper2/>} path="savemyexamspaper2"/>
          <Route element={<SaveExamsDisplayPaper4/>} path="savemyexamspaper4"/>
          <Route element={<SaveExamsDisplayPaper4MS/>} path="savemyexamspaper4MS"/>
          <Route element={<SaveExamsDisplayPaper2MS/>} path="savemyexamspaper2MS"/>
          <Route element={<LGCSE2/>} path="/lgcse2"/>
          <Route element={<IGCSE/>} path="igcsetopical"/>
          <Route element={<LGCSE4/>} path="/lgcse4"/>
          <Route element={<Notes/>} path="/notes"/>
          <Route element={<Test/>} path="/test"/>
        </Routes>
      </BrowserRouter>
      </div>
      <br />
      <Footer/>
    </div>
  )
}