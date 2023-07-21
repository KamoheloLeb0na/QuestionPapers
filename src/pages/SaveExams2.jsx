import SaveExamsPaper2 from "../components/SaveExams2Card"
import { ArrowBack } from "@mui/icons-material"
import { IconButton } from "@mui/material"
export default function SaveExamsDisplayPaper2(){
    return(
        <div>
            <div style={{display:"flex",alignItems:"center"}}>
                <a href="/questionpapermenu"><IconButton  style={{color:"crimson"}}><ArrowBack/></IconButton></a>
                <h1>SaveMyExams Paper 2</h1>
            </div>
            <SaveExamsPaper2/>
        </div>
    )
}