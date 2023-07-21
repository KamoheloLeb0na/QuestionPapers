import SaveExamsPaper4 from "../components/SaveExams4Card"
import { ArrowBack } from "@mui/icons-material"
import { IconButton } from "@mui/material"
export default function SaveExamsDisplayPaper4(){
    return(
        <div>
            <div style={{display:"flex",alignItems:"center"}}>
                <a href="/questionpapermenu"><IconButton  style={{color:"crimson"}}><ArrowBack/></IconButton></a>
                <h1>SaveMyExams Paper 4</h1>
            </div>
            <SaveExamsPaper4/>
        </div>
    )
}