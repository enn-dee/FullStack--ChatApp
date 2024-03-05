import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import { getReceiverSocketId, io } from "../Socket/Socket.js";
// import { io } from "../Socket/Socket.js";
export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id; //got from proctectRoute middleware req.user = user

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }
    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });
    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }

    // await conversation.save();
    // await newMessage.save();

    //better approach it will run in parallel
    await Promise.all([conversation.save(), newMessage.save()]);

    // socket io functionality
    const receiverSocketId = getReceiverSocketId(receiverId)
    if (receiverSocketId) {
      //io.to(<socket_id>).emit() => used to send events  to specific client
      io.to(receiverSocketId).emit("newMessage", newMessage);
    }
    res.status(201).json(newMessage);
  } catch (err) {
    console.log("Error in sendMessage controller", err.message);

    res.status(500).json({ error: "Internal server error" });
  }
};

export const getMessages = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;
    const senderId = req.user._id;

    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToChatId] },
    }).populate("messages");

    if (!conversation) return res.status(200).json([]);

    const messages = conversation.messages;

    res.status(200).json(conversation.messages);
  } catch (err) {
    console.log("Error in sendMessage controller", err.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

