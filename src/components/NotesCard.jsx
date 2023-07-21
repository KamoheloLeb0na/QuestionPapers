import {Card , CardContent , Grid , Typography , Button , CardMedia} from "@mui/material"
import data from "../data/notes"
import Download from "../pages/Download"
import { useState } from "react"
import face from "./pictures/savemyexamsface.png"

export default function NotesCard () 
{
    const[paper , showPaper] = useState({
        shown : false,
        title : "",
        notes : "",
    })
    function showPaperDetails(title,dir){
        showPaper(
            (prev) => ({
                ...prev,
                shown:true,
                title:title,
                notes:dir
            })
        )
    }
    function closePaperDetails(){
        showPaper(
            (prev) => ({
                shown:false
            })
        )
    }

    const card = data.map(
        (data) => {
            return (
                <Grid item xs={6} sm={4} md={3} lg={2}>
                
                <Card onClick={() => showPaperDetails(data.title,data.dir)} sx={{ borderRadius: '10px', height: '100%', display: 'flex', flexDirection: 'column' }}>

                    <CardMedia sx={{  position: 'relative' }}>
                        <div style={{display:"flex",justifyContent:'center',alignItems:"center"}}>
                            <img src={face} alt={data.title} />
                        </div>
                    </CardMedia>
                    <CardContent sx={{backgroundColor:"transparent"}}>
                        <p>{data.title}</p>
                    </CardContent>
                </Card>
                </Grid>
            )
        }
    )
    return(
        <Grid container spacing={1}>
            {
                paper.shown ? <Download title={paper.title} file={paper.notes} onClick={() => closePaperDetails()}/> : card
            }
        </Grid>
    )
}