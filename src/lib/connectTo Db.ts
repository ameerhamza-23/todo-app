import mongoose from "mongoose";

export default async function connectToMongoose() {
    try {
        await mongoose.connect("mongodb://localhost:27017/todo-app")
        console.log("connected to mongoose")
    }
    catch(err) {
        console.log(err)
    }
    
}