
import Paper4 from "../components/Paper4Details"
import { ArrowBack } from "@mui/icons-material"
import { IconButton } from "@mui/material"
export default function LGCSE4(){
    return(
        <div>
            <div style={{display:"flex",alignItems:"center"}}>
                <a href="/questionpapermenu"><IconButton  style={{color:"crimson"}}><ArrowBack/></IconButton></a>
                <h1>Ecol Paper 4</h1>
            </div>
            <Paper4/>
        </div>
    )
}