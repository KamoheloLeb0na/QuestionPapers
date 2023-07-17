import {Card , CardContent , Grid , Typography , Button , CardMedia} from "@mui/material"
import data from "../data/paper4"

export default function Paper4 (props) 
{
    const card = data.map(
        (data) => {
            return (
                <Grid item xs={6} sm={4} md={3} lg={2}>
                <Card onClick={props.onClick} sx={{ borderRadius: '10px', maxWidth:"100%"}}>
                    <CardMedia sx={{  position: 'relative' }}>
                        <div style={{display:"flex",justifyContent:'center',alignItems:"center"}}>
                            <iframe src={data.dir} frameborder="0"></iframe>
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
        <Grid container spacing={2}>
            {card}
        </Grid>
    )
}