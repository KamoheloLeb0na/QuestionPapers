import {Typography,Grid,Card,Button,CardContent} from "@mui/material"
import one from "../components/pictures/one.png"
import two from "../components/pictures/two.png"

import three from "../components/pictures/three.png"
import four from "../components/pictures/four.png"
import { WhatsApp , LinkedIn , Facebook , Email, Phone,} from "@mui/icons-material"
import ResponsiveAppBar from "../components/Header"

export default function Home () {
    return (
        <div>
            <div >
            <div className="largeNav" style={{marginBottom:"50px"}}>
                <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}><h1>Download LGCSE Extended Math Papers Today!</h1></div>
                <br />
                <i>~99 Problems But Revision aint One</i>
                <br />
                <br />
                <Typography>Welcome to my website, where you can easily download previous year's LGCSE extended math papers.</Typography>
                <Typography>With my collection of papers, You can prepare for your exams effectively. My website has a simple layout that helps you navigate through the papers effortlessly </Typography>
                <Typography>Start downloading now!!!</Typography>
                
            </div>

            <div>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6">1. Plan Your Study Time</Typography>
                        <br />
                        <Typography>Make a revision schedule that includes all the subjects and topics you need to study. <br />Allocate enough time each day to study effectively</Typography>
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6">2. Use a Variety of Resources</Typography>
                        <br />
                        <Typography>Use a variety of textbooks , Online resources and notes to improve your understanding of the material. <br />Do not rely on just one resource</Typography>
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6">3. practise regulary</Typography>
                        <br />
                        
                        <br />
                        <Typography>The only way to improve your math skills is to practice regularly. Solve as many problems as possible, <br />and check your answers </Typography>
                    </Grid>
                </Grid>
            </div>

            <div >
                <h2>Get Ahead of the competition</h2>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={3}>
                        <div style={{width:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                            <img src={one} alt="" style={{width:"100%"}}/>
                            <br />
                            <Typography>1 .Better Time Management</Typography>
                            <br />
                            <Typography>Prepare well and work efficiently to manage your time effectively during the exam</Typography>
                        </div>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        <div style={{width:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                            <img src={two} alt="" style={{width:"100%"}} />
                            <br />
                            <Typography>2. Improve Your Problem Solving Skills</Typography>
                            <br />
                            <Typography>Practise Problem-solving regularly to improve your critical thinking and analytical skills</Typography>
                        </div>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        <div style={{width:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                            <img src={three} alt=""  style={{width:"100%"}}/>
                            <br />
                            <Typography>3. Master the Use of a Scientific Calculator</Typography>
                            <br />
                            <Typography>Learn how to use a scientific calc correctly to solve complex problems quickly</Typography>
                        </div>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        <div style={{width:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                            <img src={four} alt=""  style={{width:"100%"}}/>
                            <br />
                            <Typography>4. Develop a strong Mathematical Foundation</Typography>
                            <br />
                            <Typography>Revise every topic in-depth to develop a strong foundation of mathematical concepts</Typography>
                        </div>
                    </Grid>
                </Grid>
            </div>

            <div style={{marginBottom:"10%"}}>
                <h3>Maximize Your Study Time With These Tips</h3>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={4}>
                        <h1><code>1</code>.Break Up Your Study Sessions</h1>
                        <Typography>Take breaks every 2-3 hours,Keep your mind refresshed and alert</Typography>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <h1><code>2</code>.Stay Hydrated and Snack Appropriately</h1>
                        <Typography>Hydrate yourself and have healthy snacks to maintain your energy levels during long study sessions</Typography>
                    </Grid>

                    <Grid item xs={12} sm={12} md={4}>
                        <h1><code>3</code>.Study in a Quiet and Well-lit Space</h1>
                        <Typography>A quiet ,well lit study space helps you to stay calm and focused, making it easier to study</Typography>
                    </Grid>

                </Grid>
            </div>

            <div>
                <h1>Benefits of Downloading LGCSE Papers</h1>
                <Grid container spacing={1}>

                        <Grid item xs={12} sm={6} md={3}>
                            <Card sx={{height:"100%"}}>
                                <CardContent>
                                    <h3>1. Saves Time</h3>
                                    <p>Downloading papers helps you save time and effort . You can access the papers anywhere at anytime</p>
                                </CardContent>
                            </Card>
                        </Grid>
                   
                        <Grid item xs={12} sm={6} md={3}>
                            <Card sx={{height:"100%"}}>
                                <CardContent>
                                    <h3>2. Improves Your Test Scores</h3>
                                    <p>The more you practise with different papers the more prepared you will feel . This will help you achieve a higher score on your exams.</p>
                                </CardContent>
                            </Card>
                        </Grid>
                   
                        <Grid item xs={12} sm={6} md={3}>
                            <Card sx={{height:"100%"}}>
                                <CardContent>
                                    <h3>3. Develop Your Math Skills</h3>
                                    <p>Working with different papers,You will improve your math skills, You can apply this knowledge to other subjects, too.</p>
                                </CardContent>
                            </Card>
                        </Grid>
                
                        <Grid item xs={12} sm={6} md={3}>
                            <Card sx={{height:"100%"}}>
                                <CardContent>
                                    <h3>4. Get a Sense of the Exam Format</h3>
                                    <p>You can get a better understanding of the exam format and become familiar with the types of questions asked.</p>
                                </CardContent>
                            </Card>
                        </Grid>
                    
                </Grid>
            </div>

            <div style={{width:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                <h2>
                    Start Your LGCSE Journey Now!!
                </h2>
                <Button>Download Papers</Button>
            </div>

            <div style={{width:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center" ,padding:"10px"}}>
                <h2>Contact Information</h2>
                <p>If You have any questions or needs assistance with using my website or downloading the past papers, <br />please get in touch via the contact details below:</p>

                <Grid container spacing={3} marginTop={"10px"}>

                    <div style={{width:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                    <Grid item xs={12} sm={6}>
                    <a href="#" style={{textDecoration:"none",color:'green'}}>
                        <WhatsApp/>
                        
                        +266 5610 7295
                    </a>
                    </Grid>
                    </div>

                    <div style={{width:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                    <Grid item xs={12} sm={6}>
                    <a style={{color:"blue"}}>
                        <Phone/>
                        
                        +266 5610 7295
                    </a>
                    </Grid>
                    </div>

                    <div style={{width:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                    <Grid item xs={12} sm={6}>
                    <a style={{color:"blue"}}>
                        <LinkedIn/>
                        Kamohelo Lebona
                    </a>
                    </Grid>
                    </div>

                    <div style={{width:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                    <Grid item xs={12} sm={6}>
                    <a style={{color:"blue"}}>
                        <Facebook/>
                       
                        Kamohelo Lebona
                    </a>
                    </Grid>
                    </div>
                    
                    <div style={{width:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                    <Grid item xs={12} sm={6}>
                    <a style={{color:"maroon"}}>
                        <Email/>
                        
                        kamohelolebna@gmail.com
                    </a>
                    </Grid>
                    </div>
                </Grid>
            </div>
            
        </div>
        </div>
    )
}