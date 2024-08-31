import React from 'react';
import { LiaCheckDoubleSolid } from "react-icons/lia";

interface ChatBubbleProps {
    position: 'left' | 'right';
    profilePicture?: string;
    message: string;
    time: string;
    status: "seen" | "delivered" | "sent";
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ position, profilePicture, message, time }) => {
    return (
        <div className={`flex items-start gap-2.5 ${position === 'right' ? 'flex-row-reverse' : 'flex-row'}`}>
            <div className="flex-shrink-0">
                <img
                    className="w-8 h-8 rounded-full"
                    src={profilePicture || "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"}
                    alt="User image"
                />
            </div>
            <div className="flex flex-col  max-w-[320px]  md:max-w-sm lg:max-w-md leading-6 p-2 border border-cyan-200 bg-zinc-800 rounded-xl">
                <p className="text-sm font-normal py-1.5 text-white">
                    {message}
                </p>
                <div className='flex gap-2 justify-between text-zinc-400'>
                    <span className="text-sm font-normal ">
                        {time}
                    </span>
                    <span className="text-sm font-normal ">
                        <LiaCheckDoubleSolid size={20} className='text-blue-500 font' />
                    </span>

                </div>
            </div>
        </div>
    );
};

export default ChatBubble;