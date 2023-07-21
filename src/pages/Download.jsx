import { ArrowBack } from "@mui/icons-material"
import { IconButton } from "@mui/material"
import { useState } from "react"
export default function Download(props){
    const [hide,setHide] = useState(true)
    return(
        <>
        <h1 style={{textAlign:"center"}}>{props.title}</h1>
        <div style={{display:"flex",flexDirection:"row",justifyContent:"end",alignItems:"center",width:"100%",marginBottom:"20px"}}><IconButton onClick={props.onClick} style={{color:"crimson"}}><ArrowBack/>Previous</IconButton></div>
        <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"100%"}}>
            <iframe style={{width:"100%",height:"25rem"}} src={props.file} frameborder="0"></iframe>
        </div>
        </>
    )
}