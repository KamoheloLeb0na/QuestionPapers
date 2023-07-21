import NotesCard from "../components/NotesCard"
import { ArrowBack } from "@mui/icons-material"
import { IconButton } from "@mui/material"
export default function Notes(){
    return(
        <div>
            <div style={{display:"flex",alignItems:"center"}}>
                <a href="/questionpapermenu"><IconButton  style={{color:"crimson"}}><ArrowBack/></IconButton></a>
                <h1>Math Notes</h1>
            </div>
            <NotesCard/>
        </div>
    )
}