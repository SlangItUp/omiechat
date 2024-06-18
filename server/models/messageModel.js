import mongoose from "mongoose";

const messageSchema = mongoose.Schema({
    sender:{
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Users',
        required: true
        },
    receiver:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    },
    message:{
        type: String,
        required: true,
    }

}, {'timestamps': true})

const Message = new mongoose.model( "Messages", messageSchema)

export default Message;