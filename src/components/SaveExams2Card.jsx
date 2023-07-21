import {Card , CardContent , Grid , Typography , Button , CardMedia} from "@mui/material"
import data from "../data/saveexams2"
import Download from "../pages/Download"
import { useState } from "react"
import face from "./pictures/savemyexamsface.png"
export default function SaveExamsPaper2 (props) 
{
    const[paper , showPaper] = useState({
        shown : false,
        title : "",
        qp : "",
    })
    function showPaperDetails(title,dir){
        showPaper(
            (prev) => ({
                ...prev,
                shown:true,
                title:title,
                qp:dir
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
                <Card onClick={() => showPaperDetails(data.title,data.questionPaper)} sx={{ borderRadius: '10px', maxWidth:"100%",height:"150px"}}>
                    <CardMedia sx={{  position: 'relative' }}>
                        <div style={{display:"flex",justifyContent:'center',alignItems:"center"}}>
                            <img src={face} alt={data.questionPaper} />
                        </div>
                    </CardMedia>
                    <CardContent>
                        <div style={{display:"flex",justifyContent:'start',alignItems:"center"}}><p>{data.title}</p></div>
                    </CardContent>
                </Card>
                </Grid>
            )
        }
    )
    return(
        <Grid container spacing={1}>
            {
                paper.shown ? <Download title={paper.title} file={paper.qp} onClick={() => closePaperDetails()}/> : card
            }
        </Grid>
    )
}