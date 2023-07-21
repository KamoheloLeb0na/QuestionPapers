import SaveExamsPaper4MS from "../components/SaveExams4CardMS"
import { ArrowBack } from "@mui/icons-material"
import { IconButton } from "@mui/material"
export default function SaveExamsDisplayPaper4MS(){
    
    return(
        <div>
            <div style={{display:"flex",alignItems:"center"}}>
                <a href="/questionpapermenu"><IconButton  style={{color:"crimson"}}><ArrowBack/></IconButton></a>
                <h1>SaveMyExams MS 4</h1>
            </div>
            <SaveExamsPaper4MS/>
        </div>
    )
}