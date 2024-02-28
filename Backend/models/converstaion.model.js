import mongoose from "mongoose";
const converstaionSchema = new mongoose.Schema(
  {
    participants: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ChatUser",
      },
    ],
    messages: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ChatMessages",
        default: [],
      },
    ],
  },
  { timestamps: true }
);

export const ChatConverstaion = mongoose.model(
  "ChatConversation",
  converstaionSchema
);
