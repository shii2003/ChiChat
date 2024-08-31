import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema(
    {
        participants: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
            }
        ],
        messages: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Message',
                default: [],
            }
        ],
        lastMessageAt: {
            type: Date,
            default: Date.now,
        },
        lastMessageContent: {
            type: String,
            default: '',
        },
    },
    { timestamps: true }
);

const Conversations = mongoose.model("Conversation", conversationSchema);

export default Conversations;