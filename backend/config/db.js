import mongoose from "mongoose"

export const connectDB = async () =>{
await mongoose.connect('mongodb+srv://amitkumar1511:8002786529@cluster0.lmdcfhr.mongodb.net/food-del').then(()=>console.log("DB connected"))
}