import { duration } from "@mui/material"
import { type } from "@testing-library/user-event/dist/type"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import {List,ListItem,MenuList,Button} from "@mui/material"

export default function Test(){
    const names = ["Kamohelo" , "Junior" , "Lebona" , "Bobo",12,1,2,3,4,5,6,7,8,9,0,2,3,4]
    const list = names.map(
        (name) => {
            return(
                <List>
                    <ListItem>
                        
                        <Link to="/lgcse2" style={{border:"solid",borderRadius:"10px",width:"100%",textDecoration:"none",color:"gray"}}><Button sx={{width:"100%"}}> {name}  </Button><br /></Link> 
                        

                    </ListItem>
                </List>
            )
        }
    )
    return(
        <div>
            {list}
        </div>
    )
}