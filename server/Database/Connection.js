import mongoose from 'mongoose'

const connectDB=async(uri)=>{
    try {
        await mongoose.connect(uri)
        console.log("Database sucessfully connected")
    } catch (error) {
        console.log(`Error connecting to databse${error.message}`)
    }
}

export default connectDB