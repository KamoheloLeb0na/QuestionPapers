import {Card , CardContent , Grid , Typography , Button , CardMedia} from "@mui/material"
import data from "../data/lgcsepaper4"
import { useState } from "react"
import face from "./pictures/lgcseface.png"
import Download from "../pages/Download"

export default function SaveExamsPaper2MS (props) 
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
                <Card onClick={() => showPaperDetails(data.title,data.dir)} sx={{ borderRadius: '10px', maxWidth:"100%"}}>
                    <CardMedia sx={{  position: 'relative' }}>
                        <div style={{display:"flex",justifyContent:'center',alignItems:"center"}}>
                            <img src={face} alt={data.dir} />
                        </div>
                    </CardMedia>
                    <CardContent>
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
                paper.shown ? <Download title={paper.title} file={paper.qp} onClick={() => closePaperDetails()}/> : card
            }
        </Grid>
    )
}