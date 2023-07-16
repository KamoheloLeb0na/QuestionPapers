import {Typography,Grid,Card,Button,CardContent} from "@mui/material"
import book from "./math.pdf"
export default function LGCSE(){
    return(
        <div>
            <iframe src={book} frameborder="0" style={{width:"100%",height:"500px"}}></iframe>
        </div>
    )
}