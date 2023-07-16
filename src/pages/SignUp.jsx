import { Button , Card , CardContent , TextField , Typography , Grid} from "@mui/material"
import { useState } from "react"
export default function SignUp(){

    const[creds , setCreds] =  useState ({
        name : "",
        email:"",
        password : "",
        confirm :""
    })

    const changeName = (event) => {
        setCreds(
            (prevCred) => ({
                ...prevCred,
                name : event.target.value,

            })
        )
    }

    const changeEmail = (event) => {
        setCreds(
            (prevCred) => ({
                ...prevCred,
                email : event.target.value,

            })
        )
    }

    const changePassword = (event) => {
        setCreds(
            (prevCred) => ({
                ...prevCred,
                password : event.target.value,

            })
        )
    }

    const confirmPassword = (event) => {
        setCreds(
            (prevCred) => ({
                ...prevCred,
                confirm : event.target.value,

            })
        )
    }

    const SignIn = () => {
        console.log(`My name is ${creds.name} and my Email/Phone is ${creds.email} and my password is none of your business`)
        // The line below allows the window to reload and clear all the fields
        window.location.reload()
    }
    return(
        <div>
            <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",marginTop:"5%"}}>
            <Typography variant="h4">Sign Up</Typography>
            <br />
            <Card sx={{width:"300px"}}>
                <CardContent>
                
                    <Grid container spacing={1}>
                    <Grid item xs={12}>
                            <div style={{justifyContent:"center",alignItems:"center",display:"flex",flexDirection:"column"}}>
                                <TextField placeholder="Name" variant="outlined" onChange={changeName} defaultValue={creds.name}></TextField>
                            </div>
                        </Grid>
                        <Grid item xs={12}>
                            <div style={{justifyContent:"center",alignItems:"center",display:"flex",flexDirection:"column"}}>
                                <TextField placeholder="Email/PhoneNumber" variant="outlined" onChange={changeEmail} defaultValue={creds.email}></TextField>
                            </div>
                        </Grid>

                        {/* Below is the logic which states as follow iff password is less than 6 it dispalys text else it removes it */}
                        {
                            creds.password.length >= 6  ? <p></p> 
                            : 
                            
                            <Grid item xs={12}>
                            <div style={{justifyContent:"center",alignItems:"center",display:"flex",flexDirection:"column"}}>
                                <p style={{color:"red"}}><small><a>Password should have +6 letters</a></small></p>
                            </div>
                            </Grid>
                        }

                        <Grid item xs={12}>
                            <div style={{justifyContent:"center",alignItems:"center",display:"flex",flexDirection:"column"}}>
                                <TextField placeholder="Password" type="password" variant="outlined" onChange={changePassword} defaultValue={creds.password}></TextField>
                            </div>
                        </Grid>
                        {/* Below is the logic which states as follow iff password is less than 6 it dispalys text else it removes it */}
                        {
                            creds.password === creds.confirm  ? <p></p> 
                            : 
                            
                            <Grid item xs={12}>
                            <div style={{justifyContent:"center",alignItems:"center",display:"flex",flexDirection:"column"}}>
                                <p style={{color:"red"}}><small><a>Passwords dont match</a></small></p>
                            </div>
                            </Grid>
                        }
                        <Grid item xs={12}>
                            <div style={{justifyContent:"center",alignItems:"center",display:"flex",flexDirection:"column"}}>
                                <TextField placeholder="Password" type="password" onChange={confirmPassword} defaultValue={creds.password}></TextField>
                            </div>
                        </Grid>
                        <Grid item xs={12}>
                            <div style={{justifyContent:"center",alignItems:"center",display:"flex",flexDirection:"column"}}>
                                <Button onClick={SignIn}>Sign Up</Button>
                            </div>
                        </Grid>
                        <Grid item xs={12}>
                            <div style={{justifyContent:"center",alignItems:"center",display:"flex",flexDirection:"column"}}>
                                <p><small><a href="/">Have an Acc ? Log In here</a></small></p>
                            </div>
                        </Grid>

                    </Grid>
                    
                </CardContent>
            </Card>
        </div>
        </div>
    )
}