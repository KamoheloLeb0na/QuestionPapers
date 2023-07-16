import { Button , Card , CardContent , TextField , Typography , Grid} from "@mui/material"
export default function Login () {
    return(
        <div style={{height:"100%"}}>
        <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",marginTop:"5%"}}>
            <Typography variant="h4">Login</Typography>
            <br />
            <Card sx={{width:"300px"}}>
                <CardContent>
                
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <div style={{justifyContent:"center",alignItems:"center",display:"flex",flexDirection:"column"}}>
                                <TextField placeholder="Email/PhoneNumber" variant="outlined" ></TextField>
                            </div>
                        </Grid>
                        <Grid item xs={12}>
                            <div style={{justifyContent:"center",alignItems:"center",display:"flex",flexDirection:"column"}}>
                                <TextField placeholder="Password" type="password"></TextField>
                            </div>
                        </Grid>
                        <Grid item xs={12}>
                            <div style={{justifyContent:"center",alignItems:"center",display:"flex",flexDirection:"column"}}>
                                <Button>Login</Button>
                            </div>
                        </Grid>
                        <Grid item xs={12}>
                            <div style={{justifyContent:"center",alignItems:"center",display:"flex",flexDirection:"column"}}>
                                <p><small><a href="/signup">Dont have an account? Create one</a></small></p>
                            </div>
                        </Grid>
                        <Grid item xs={12}>
                            <div style={{justifyContent:"center",alignItems:"center",display:"flex",flexDirection:"column"}}>
                                <p><small><a >Forgot password?</a></small></p>
                            </div>
                        </Grid>
                    </Grid>
                    
                </CardContent>
            </Card>
        </div>
        </div>
    )
}