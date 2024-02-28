import { ChatConverstaion } from "../models/converstaion.model.js";
import { ChatMessages } from "../models/messages.model.js";

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: recieverId } = req.params;
    const senderId = req.user._id;
    let conversation = await ChatConverstaion.findOne({
      participants: { $all: [senderId, recieverId] },
    });
    if (!conversation) {
      conversation = await ChatConverstaion.create({
        participants: [senderId, recieverId],
      });
    }
    const newMessage = new ChatMessages({
      senderId,
      recieverId,
      message,
    });
    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }
    await Promise.all([conversation.save(), newMessage.save()]);

    res.status(201).json(newMessage);
  } catch (err) {
    console.log("Error in send message controller: ", err.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getMessage = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;
    const senderId = req.user._id;
    const conversation = await ChatConverstaion.findOne({
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
