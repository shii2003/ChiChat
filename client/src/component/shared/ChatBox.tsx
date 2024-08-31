import React, { memo } from 'react';
import { Link } from 'react-router-dom';

const DEFAULT_AVATAR = 'https://winaero.com/blog/wp-content/uploads/2015/05/user-200.png'

type ChatBoxProps = {
    index: number,
    name: string,
    _id: number,
    avatar?: string,
    isOnline: boolean,
    sameSender: boolean,
    lastMessage?: string,
    groupChat: boolean,
    newMessagesAlert?: {
        chatId: number,
        count: number,
    },
    handleDeleteChatOpen: (
        event: React.MouseEvent<HTMLAnchorElement>, chatId: number,
        groupChat: boolean,
    ) => void,
};

const ChatBox: React.FC<ChatBoxProps> = ({
    index = 0,
    name,
    _id,
    avatar = DEFAULT_AVATAR,
    isOnline,
    sameSender,
    lastMessage,
    groupChat = false,
    newMessagesAlert = {
        chatId: 0,
        count: 0,
    },
    handleDeleteChatOpen,
}) => {

    const truncateMessage = (message?: string, length = 9) => {
        if (!message) return '';
        return message.length > length ? message.slice(0, length) + '...' : message;
    };
    // const isOnline = true;
    return (
        <Link
            to={`/chat/${_id}`}
            onContextMenu={(e) => handleDeleteChatOpen(e, _id, groupChat)}
        >
            <div className='bg-zinc-800 rounded-md hover:bg-zinc-700 border border-zinc-600 p-2 text-white h-18 '>
                <div className='flex w-full relative'>
                    <div className='flex gap-2 relative w-4/5 '>
                        <div className='h-12 w-12 rounded-full  relativ bg-gray-600'>
                            <div className='relative'>
                                <img
                                    className='h-full w-full overflow-hidden rounded-full'
                                    src={avatar}
                                    alt='profile'
                                />
                                {
                                    isOnline && (
                                        <div className='absolute top-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-zinc-800'></div>
                                    )
                                }
                            </div>
                        </div>
                        <div className='flex flex-col  items-center  gap-1'>
                            <span className='text-md font-semibold'>{name}</span>
                            <span className='text-sm'>
                                {truncateMessage(lastMessage)}
                            </span>
                        </div>

                    </div>

                    <div className='w-1/5 flex justify-center items-center'>

                        {newMessagesAlert.count > 0 ? (
                            <div className='flex items-center justify-center h-6 w-6 rounded-full overflow-hidden  bg-cyan-200 bg-opacity-35 border border-cyan-200 font-bold'>
                                <div className='flex h-full w-full rounded-full items-center justify-center'>
                                    {newMessagesAlert.count}
                                </div>
                            </div>
                        ) : (
                            <div className='h-6 w-6'>

                            </div>
                        )}

                    </div>

                </div>
            </div>
        </Link>
    )
}
export default memo(ChatBox);

