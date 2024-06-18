import mongoose from "mongoose";

const conversationSchema = mongoose.Schema({
    participants: [{
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Users'
    }],
    messages: [{
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Messages'
    }
    ]
}, {'timestamps' : true})

const Conversation = new mongoose.model("Conversation" , conversationSchema)

export default Conversation;