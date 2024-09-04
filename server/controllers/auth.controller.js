import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { signupSchema } from "../utils/authValidation.js";
import generateTokenAndSetCookie from "../utils/generateTokens.js";


export const signup = async (req, res) => {
    try {

        const result = signupSchema.safeParse(req.body);
        if (!result.success) {
            return res.status(400).json({ errors: result.error.flatten().fieldErrors });
        }

        const { name, password, email, bio } = req.body;
        const profilePicture = req.file ? req.file.path : undefined;

        const emailExists = await User.findOne({ email });
        if (emailExists) {
            return res.status(400).json({ message: "email is already registered" })
        }
        //HASH PASSWORD HERE
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const defaultProfilePicture = "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg";

        const newUser = new User({
            name,
            password: hashedPassword,
            email,
            bio,
            profilePicture: profilePicture || defaultProfilePicture,
        })

        if (newUser) {
            //Generate JWT Token
            generateTokenAndSetCookie(newUser._id, res)
            await newUser.save();

            res.status(201).json({

                _id: newUser._id,
                email: newUser.email,
                name: newUser.name,
                profilePicture: newUser.profilePicture,

            });
        } else {
            res.status(400).json({ message: "Invalid user data" });
        }

    } catch (error) {
        console.log("Error in signup controller", error.stack || error.message);
        res.status(500).json(
            { error: "Internal Sever Error" }
        );
    }
}

export const login = async (req, res) => {
    //req body ->data
    try {
        const { email, password } = req.body;

        if (!email) {
            return res.status(400).json({ error: "Email is  required" });
        }
        if (!password) {
            return res.status(400).json({ error: "password is required" })
        }

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ error: "User does not exist" });
        }

        const isPasswordValid = await bcrypt.compare(password, user?.password || "");//if password is null compare it with an empty string
        if (!isPasswordValid) {
            return res.status(401).json({ error: "wrong password" })
        }

        generateTokenAndSetCookie(user._id, res)

        const loggedInUser = await User.findById(user._id).select("-password ")

        return res
            .status(200)
            .json(
                {
                    user: loggedInUser,
                    message: "User logged in successfully"
                }
            )
    } catch (error) {

        console.log("Error in login controller", error.stack || error.message)
        res.status(500).json({ error: "Internal Server Error" });

    }

}

export const logout = async (req, res) => {
    try {
        res.cookie("jwt", "", { maxAge: 0 });
        res
            .status(200)
            .json({ message: "Logged out successfully" })
    } catch (error) {
        console.log("Error in logout controller:", error.stack || error.message);
        res.status(500).json({ error: "Internal Server Error" })
    }
}

