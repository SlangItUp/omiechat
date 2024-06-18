import Conversation from "../../models/conversationModel.js";

export default async function getMessage(req, res){


    const userId = req.userId;
    const receiverId = req.params.id;

    try{
    const conversation = await Conversation.findOne({participants: {$all : [userId, receiverId]}}).populate("messages")

    if(!conversation){return res.status(200).json([])}

    res.status(200).json(conversation.messages);
}catch(error) {
    console.log("Error at getting messages : ", error.message);
    res.status(500).json({error: "Internal Server Error"})
}

}