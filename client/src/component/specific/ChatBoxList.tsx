import React from 'react';
import ChatBox from '../shared/ChatBox';

type ChatBoxListProps = {
    chats: {
        name: string,
        _id: number,
        avatar?: string,
        isOnline: boolean,
        lastMessage?: string,
    }[],
    chatId: number,
    newMessagesAlert:
    {
        chatId: number,
        count: number,
    }[]
    onlineUsers: number[],
    handelDeleteChat?: () => void,

};

const ChatBoxList: React.FC<ChatBoxListProps> = ({ chats, chatId, newMessagesAlert }) => {
    if (chats.length === 0) {
        return (
            <div className='flex items-center justify-center h-34'>
                get started
            </div>
        )
    }

    const NewMessagesAlertList = newMessagesAlert.map(alert => ({
        chatId: alert.chatId || 0,
        count: alert.count || 0,
    }))
    return (

        <div className='flex flex-col gap-2'>
            {chats.map((chat, index) => {
                const alert = NewMessagesAlertList.find(a => a.chatId === chat._id)
                return (
                    <ChatBox
                        key={chat._id}
                        _id={chat._id}
                        index={index}
                        name={chat.name}
                        avatar={chat.avatar}
                        isOnline={chat.isOnline}
                        lastMessage={chat.lastMessage || ""}
                        newMessagesAlert={alert}
                    />
                );
            })}
        </div>
    )
}
export default ChatBoxList;