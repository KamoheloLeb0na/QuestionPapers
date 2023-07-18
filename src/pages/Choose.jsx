import { Link } from "react-router-dom";
import { Grid , Button} from "@mui/material";

export default function Choose(){
    return(
        <div>
            <Grid container spacing={2}>
                <Grid item xs={6} sm={6} md={3}><div style={{display:"flex",justifyContent:"center",alignItems:"center"}}> <Link to="/lgcse2" style={{border:"solid",borderRadius:"10px",width:"100%",textDecoration:"none",color:"gray"}}><Button sx={{width:"100%"}}>  LGCSE Question Paper2  </Button><br /></Link> </div></Grid>
                <Grid item xs={6} sm={6} md={3}><div style={{display:"flex",justifyContent:"center",alignItems:"center"}}> <Link to="/lgcse4" style={{border:"solid",borderRadius:"10px",width:"100%",textDecoration:"none",color:"gray"}}><Button sx={{width:"100%"}}>  LGCSE Question Paper4 </Button></Link> </div></Grid>
                <br />
                <Grid item xs={12} sm={6} md={3}><div style={{display:"flex",justifyContent:"center",alignItems:"center"}}><Button sx={{border:"solid",borderRadius:"10px",width:"100%"}}>Notes</Button></div></Grid>
                <br />
                <Grid item xs={6} sm={6} md={3}><div style={{display:"flex",justifyContent:"center",alignItems:"center"}}> <Link to="/savemyexamspaper2" style={{border:"solid",borderRadius:"10px",width:"100%",textDecoration:"none",color:"gray"}}><Button sx={{width:"100%"}}> Save My Exams 2 <br /> </Button></Link> </div></Grid>
                <Grid item xs={6} sm={6} md={3}><div style={{display:"flex",justifyContent:"center",alignItems:"center"}}> <Link to="/savemyexamspaper4" style={{border:"solid",borderRadius:"10px",width:"100%",textDecoration:"none",color:"gray"}}><Button sx={{width:"100%"}}>Save My Exams 4</Button></Link> </div></Grid>
                <br />
                <Grid item xs={12} sm={6} md={3}><div style={{display:"flex",justifyContent:"center",alignItems:"center"}}><Button sx={{border:"solid",borderRadius:"10px",width:"100%"}}>IGCSE Topical Questions</Button></div></Grid>
                <Grid item xs={6} sm={6} md={3}><div style={{display:"flex",justifyContent:"center",alignItems:"center"}}> <Link to="/savemyexamspaper2MS" style={{border:"solid",borderRadius:"10px",width:"100%",textDecoration:"none",color:"gray"}}><Button sx={{width:"100%"}}>Save My Exams Marking Scheme2</Button></Link> </div></Grid>
                <Grid item xs={6} sm={6} md={3}><div style={{display:"flex",justifyContent:"center",alignItems:"center"}}> <Link to="/savemyexamspaper4MS" style={{border:"solid",borderRadius:"10px",width:"100%",textDecoration:"none",color:"gray"}}><Button sx={{width:"100%"}}>Save My Exams Marking Scheme4</Button></Link> </div></Grid>
            </Grid>
        </div>
    )
}