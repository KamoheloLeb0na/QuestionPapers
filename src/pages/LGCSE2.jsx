
import { useState } from "react"
import Paper2 from "../components/Paper2Details"
import Download from "./Download"

export default function LGCSE2(){
    const[page , setPage] = useState(false)
    return(
        <div>
            <h1>Ecol Paper 2</h1>
            <Paper2/>
            {/* {
                page ? <Download /> : <Paper2 onClick={() => setPage(true)}/> 
            } */}
        </div>
    )
}