import mongoose from "mongoose"
import {models } from "mongoose"

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    name: {
        type:String,
        require:true
    },
    tasks:{
        type: [String],
        default: []
    }
})

const User = models.User || mongoose.model('User', userSchema)
export default User