import SaveExamsPaper2MS from "../components/SaveExams2CardMS"
import { ArrowBack } from "@mui/icons-material"
import { IconButton } from "@mui/material"
export default function SaveExamsDisplayPaper2MS(){
    return(
        <div>
            <div style={{display:"flex",alignItems:"center"}}>
                <a href="/questionpapermenu"><IconButton  style={{color:"crimson"}}><ArrowBack/></IconButton></a>
                <h1>SaveMyExams MS 2</h1>
            </div>
            <SaveExamsPaper2MS/>
        </div>
    )
}