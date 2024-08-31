import Conversations from "../models/conversation.model.js";
import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {
    try {
        const loggedInUserId = req.user._id;

        const filteredUsers = await User.find({
            _id: { $ne: loggedInUserId }
        }).select("-password")
        res.status(200).json(filteredUsers);
    } catch (error) {
        console.log("Error in getUsersForSidebar controller:", error);
        res.status(500).json({ error: "Internal Server Error" })
    }
}

export const getRecentChats = async (req, res) => {
    try {
        const userId = req.user._id;

        //fetching conversations which the loggedIn user is a part of 
        const conversations = await Conversations.find({ participants: userId })
            .populate('participants', 'name profilePicture')
            .sort('-lastMessageAt')
            .exec();

        const recentChats = conversations.map((conversation) => {
            const otherUser = conversation.participants.find(participant => participant._id.toString() !== userId);
            return {
                userId: otherUser._id,
                name: otherUser.name,
                profilePicture: otherUser.profilePicture,
                lastMessageAt: conversation.lastMessageAt,
                lastMessageContent: conversation.lastMessageContent,
            };
        });

        res.status(200).json(recentChats)
    } catch (error) {
        console.log("Error in getRecentChats controller:", error);
        res.status(500).json({ error: "Internal Server Error" })
    }
}