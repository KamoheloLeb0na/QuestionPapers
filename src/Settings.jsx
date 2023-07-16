import {Home,Key,Notifications,Computer,Person} from "@mui/icons-material"
import {Button,Typography,Grid,TextField,Avatar} from "@mui/material"
import { useState } from "react"

export default function Settings(){
    
    const[color,setColor] = useState({
        first : "white",
        second : "white",
        third : "white",
        forth : "white",
        fifth : "white"
    })
    const changeColorFirst = () => {
        setColor(
            (prevColor) => ({
                second:"white",
                third:"white",
                forth:"white",
                fifth:"white",
                first : "blue"
            })
        )
    }
    const changeColorSecond = () => {
        setColor(
            (prevColor) => ({
                second:"blue",
                third:"white",
                forth:"white",
                fifth:"white",
                first : "white"
            })
        )
    }
    const changeColorThird = () => {
        setColor(
            (prev) => (
                {
                    second:"white",
                    third:"blue",
                    forth:"white",
                    fifth:"white",
                    first : "white"
                }
            )
        )
    }
    const changeColorForth = () => {
        setColor(
            (prevColor) => ({
                second:"white",
                third:"white",
                forth:"blue",
                fifth:"white",
                first : "white"
            })
        )
    }
    const changeColorFifth = () => {
        setColor(
            (prevColor) => ({
                second:"white",
                third:"white",
                forth:"white",
                fifth:"blue",
                first : "white"
            })
        )
    }

    return(
        <div style={{margin:"5px"}}>
            <Grid container>
                <Grid item xs={4} md={2} sm={3}>
                    <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",paddingTop:"20px"}}>
                        <Avatar src={<Person/>} sx={{height:"100px",width:"100px",maxWidth:"120px",maxHeight:"120px"}}/>
                        <Typography variant="h5">Kamohelo</Typography>
                    </div>

                    <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                    
                        <Button variant="outline" sx={{width:"150%",height:"70px",border:"solid",borderWidth:"1px",borderColor:"gray",borderBottomColor:"white",backgroundColor:color.first}} onClick={changeColorFirst}> {<Home/>}Account </Button>
                        
                        <Button variant="outline" sx={{width:"150%",height:"70px",border:"solid",borderWidth:"1px",borderColor:"gray",borderBottomColor:"white",backgroundColor:color.second}} onClick={changeColorSecond}>{<Key/>} Password</Button>
                        
                        <Button variant="outline" sx={{width:"150%",height:"70px",border:"solid",borderWidth:"1px",borderColor:"gray",borderBottomColor:"white",backgroundColor:color.third}} onClick={changeColorThird}>{<Person/>}Security</Button>
                        
                        <Button variant="outline" sx={{width:"150%",height:"70px",border:"solid",borderWidth:"1px",borderColor:"gray",borderBottomColor:"white",backgroundColor:color.forth}} onClick={changeColorForth}>{<Computer/>}Application</Button>
                        
                        <Button variant="outline" sx={{width:"150%",height:"70px",border:"solid",borderWidth:"1px",borderColor:"gray",backgroundColor:color.fifth}} onClick={changeColorFifth}>{<Notifications/>}Notification</Button>
                        
                    </div>
                    
                </Grid>

                <Grid item xs={8} md={10} sm={9}>

                </Grid>
            
            </Grid>
        </div>
    )
}