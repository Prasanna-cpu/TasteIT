import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import {resolve} from 'path'
import { fileURLToPath } from "url";
import path, { dirname } from "path";
import dotenv from 'dotenv'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const envPath = resolve(__dirname, "../.env");
dotenv.config({path:envPath})
const port=process.env.PORT

const app=express()
app.use(express.json())
app.use(cors())


app.get("/",(_,res)=>{
    res.send('Hey fellas')
})


app.listen(port,()=>console.log(`Server running at ${port}`))

