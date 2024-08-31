import mongoose from "mongoose";
import jwt from "jsonwebtoken";


const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,

        },
        email: {
            type: String,
            unique: true,
            required: true,

        },
        password: {
            type: String,
            required: true,
            minlength: 8,
        },
        bio: {
            type: String,
            default: "",
        },
        profilePicture: {
            type: String,
            default: "",
        },
    },
    { timestamps: true }
);


const User = mongoose.model("User", userSchema);

export default User;