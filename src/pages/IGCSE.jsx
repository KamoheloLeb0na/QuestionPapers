
import { useState } from "react"
import IGCSECard from "../components/IGCSEcard"
import { ArrowBack } from "@mui/icons-material"
import { IconButton } from "@mui/material"
export default function IGCSE(){
    const[page , setPage] = useState(false)
    return(
        <div>
            <div style={{display:"flex",alignItems:"center"}}>
                <a href="/questionpapermenu"><IconButton  style={{color:"crimson"}}><ArrowBack/></IconButton></a>
                <h1>IGCSE Topical Q's</h1>
            </div>
            <IGCSECard/>
        </div>
    )
}