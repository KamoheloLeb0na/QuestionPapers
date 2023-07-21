
import { useState } from "react"
import Paper2 from "../components/Paper2Details"
import { ArrowBack } from "@mui/icons-material"
import { IconButton } from "@mui/material"
export default function LGCSE2(){
    const[page , setPage] = useState(false)
    return(
        <div>
            <div style={{display:"flex",alignItems:"center"}}>
                <a href="/questionpapermenu"><IconButton  style={{color:"crimson"}}><ArrowBack/></IconButton></a>
                <h1>Ecol Paper 2</h1>
            </div>
            <Paper2/>
        </div>
    )
}