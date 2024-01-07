import express from "express"
import {} from 'dotenv/config'
import mongoose from "mongoose"
import {router} from "./routes/todoroutes.js"

const app = express()

//express app


// middelware

app.use (express.json())
app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})
//routes
app.use('/',router)


//connect to db
mongoose.connect(process.env.MONGO_URI)
.then(()=>{ //listen  for request
    app.listen(process.env.PORT,()=>{
     console.log("listening at port 4000! and connected to db")})
})
.catch((error)=>{
    console.log(error)
})