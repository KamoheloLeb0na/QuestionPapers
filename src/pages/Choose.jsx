import { Link } from "react-router-dom";
import { Grid , Button} from "@mui/material";

export default function Choose(){
    return(
        <div>
            <Grid container spacing={2}>
                <Grid item xs={6} sm={6} md={3}><div style={{display:"flex",justifyContent:"center",alignItems:"center"}}> <Link to="/lgcse2" style={{border:"solid",borderRadius:"10px",width:"100%"}}><Button sx={{width:"100%"}}>  LGCSE Paper2  </Button></Link> </div></Grid>
                <Grid item xs={6} sm={6} md={3}><div style={{display:"flex",justifyContent:"center",alignItems:"center"}}> <Link to="/lgcse4" style={{border:"solid",borderRadius:"10px",width:"100%",textDecoration:"none",color:"blue"}}><Button sx={{width:"100%"}}>LGCSE Paper4</Button></Link> </div></Grid>
                <br />
                <Grid item xs={12} sm={6} md={3}><div style={{display:"flex",justifyContent:"center",alignItems:"center"}}><Button sx={{border:"solid",borderRadius:"10px",width:"100%"}}>Notes</Button></div></Grid>
                <br />
                <Grid item xs={6} sm={6} md={3}><div style={{display:"flex",justifyContent:"center",alignItems:"center"}}><Button sx={{border:"solid",borderRadius:"10px",width:"100%"}}>Save My Exams Paper2</Button></div></Grid>
                <Grid item xs={6} sm={6} md={3}><div style={{display:"flex",justifyContent:"center",alignItems:"center"}}><Button sx={{border:"solid",borderRadius:"10px",width:"100%"}}>Save My Exams Paper4</Button></div></Grid>
            </Grid>
        </div>
    )
}