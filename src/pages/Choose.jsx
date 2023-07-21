import { Link } from "react-router-dom";
import { Button} from "@mui/material";
import { List,ListItem } from "@mui/material"
import lgcse from "../components/pictures/lgcseface.png"

export default function Choose(){
    return(
        <div>
            <List>
                <ListItem><Link to="/lgcse2" style={{border:"solid",borderRadius:"10px",width:"100%",textDecoration:"none",color:"gray"}}><h3 style={{marginLeft:"5px",color:"crimson"}}>  LGCSE Question Paper2's  </h3></Link></ListItem>
                <ListItem><Link to="/lgcse4" style={{border:"solid",borderRadius:"10px",width:"100%",textDecoration:"none",color:"gray"}}><h3 style={{marginLeft:"5px",color:"crimson"}}>  LGCSE Question Paper4's  </h3></Link></ListItem>
                <ListItem><Link to="/igcsetopical" style={{border:"solid",borderRadius:"10px",width:"100%",textDecoration:"none",color:"gray"}}><h3 style={{marginLeft:"5px",color:"black"}}>  IGCSE Topical Question Papers </h3></Link></ListItem>
                <ListItem><Link to="/notes" style={{border:"solid",borderRadius:"10px",width:"100%",textDecoration:"none",color:"gray"}}><h3 style={{marginLeft:"5px",color:"black"}}>  Notes  </h3></Link></ListItem>
                <ListItem><Link to="/savemyexamspaper2" style={{border:"solid",borderRadius:"10px",width:"100%",textDecoration:"none",color:"gray"}}><h3 style={{marginLeft:"5px",color:"black"}}> SaveMyExams Paper2's  </h3></Link> </ListItem>
                <ListItem><Link to="/savemyexamspaper4" style={{border:"solid",borderRadius:"10px",width:"100%",textDecoration:"none",color:"gray"}}><h3 style={{marginLeft:"5px",color:"black"}}> SaveMyExams Paper4's  </h3></Link> </ListItem>
                <ListItem><Link to="/savemyexamspaper2MS" style={{border:"solid",borderRadius:"10px",width:"100%",textDecoration:"none",color:"gray"}}><h3 style={{marginLeft:"5px",color:"black"}}>  SaveMyExams MS paper2  </h3></Link> </ListItem>
                <ListItem><Link to="/savemyexamspaper4MS" style={{border:"solid",borderRadius:"10px",width:"100%",textDecoration:"none",color:"gray"}}><h3 style={{marginLeft:"5px",color:"black"}}>  SaveMyExams MS paper4  </h3></Link></ListItem>
            </List>

        </div>
    )
}