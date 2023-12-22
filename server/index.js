import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import {resolve} from 'path'
import { fileURLToPath } from "url";
import path, { dirname } from "path";
<<<<<<< HEAD
import connectDB from './Database/Connection.js';
import dotenv from 'dotenv'
import { UserRouter } from './Routes/Users.js';
=======
import dotenv from 'dotenv'
>>>>>>> 21bdbddc74a0f68b18c4405ea2e70812d86f6a49

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const envPath = resolve(__dirname, "../.env");
dotenv.config({path:envPath})
<<<<<<< HEAD

const port=process.env.PORT
const uri=process.env.URI
=======
const port=process.env.PORT
>>>>>>> 21bdbddc74a0f68b18c4405ea2e70812d86f6a49

const app=express()
app.use(express.json())
app.use(cors())
<<<<<<< HEAD
app.use("/auth",UserRouter)
=======

>>>>>>> 21bdbddc74a0f68b18c4405ea2e70812d86f6a49

app.get("/",(_,res)=>{
    res.send('Hey fellas')
})


<<<<<<< HEAD
connectDB(uri)

=======
>>>>>>> 21bdbddc74a0f68b18c4405ea2e70812d86f6a49
app.listen(port,()=>console.log(`Server running at ${port}`))

