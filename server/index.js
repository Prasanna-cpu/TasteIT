import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import {resolve} from 'path'
import { fileURLToPath } from "url";
import path, { dirname } from "path";
import connectDB from './Database/Connection.js';
import dotenv from 'dotenv'
import { UserRouter } from './Routes/Users.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const envPath = resolve(__dirname, "../.env");
dotenv.config({path:envPath})

const port=process.env.PORT
const uri=process.env.URI

const app=express()
app.use(express.json())
app.use(cors())
app.use("/auth",UserRouter)

app.get("/",(_,res)=>{
    res.send('Hey fellas')
})


connectDB(uri)

app.listen(port,()=>console.log(`Server running at ${port}`))

