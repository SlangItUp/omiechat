import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    gender: {
        type : String,
        enum : ["Male", "Female"]
    },
    age: {
        type: Number,
        min: 18,
        max: 100
    },
    pfp: {
        type:String,
    }
}, {'timestamps' : true} )

const User = mongoose.model("Users", userSchema);

export default User;