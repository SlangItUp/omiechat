import Conversation from "../../models/conversationModel.js";
import Message from "../../models/messageModel.js";
import protectedRoute from "../../security/protectedRoute.js";
import { getReceiverSocketId } from "../../socket/socket.js";
import {io} from '../../socket/socket.js'

async function sendMessage(req, res) {
  const sender = req.userId;
  const receiver = req.params.id;
  const message = req.body.message;

  let conversation = await Conversation.findOne({
    participants: { $all: [sender, receiver] },
  });
  if (!conversation) {
    conversation = await Conversation.create({
      participants: [sender, receiver],
    });
  }
  const newMessage = new Message({
    sender,
    receiver,
    message,
  });
  if (newMessage) {
    conversation.messages.push(newMessage._id);
  }
  
  await Promise.all([conversation.save(), newMessage.save()])

  const receiverSocketId = getReceiverSocketId(receiver)
  console.log(receiverSocketId)
  if(receiverSocketId){
    io.to(receiverSocketId).emit("newMessage", newMessage)
  }
  res.status(201).json(newMessage);
}

export default sendMessage;
