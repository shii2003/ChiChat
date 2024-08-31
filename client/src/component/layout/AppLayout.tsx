import React from 'react';
import Navbar from './Navbar';
import Title from '../shared/Title';
// import ChatList from '../specific/ChatList';
// import { sampleChats } from '../../constants/data';
import ChatBoxList from '../specific/ChatBoxList';
import { sampleData } from '../../constants/data';
import { useParams } from 'react-router-dom';
import ProfileInfo from '../specific/ProfileInfo';

const AppLayout = <P extends object>(WrappedComponent: React.ComponentType<P>): React.FC<P> => {

    const ComponentWithLayout: React.FC<P> = (props) => {

        const params = useParams();
        const chatId = params.chatId;

        return (
            <>
                <Title />
                <div className='flex flex-col h-screen overflow-hidden'>
                    <Navbar />
                    <div className='flex flex-1 pt-20 relative '>
                        <div className='hidden pt-2 pb-2 pl-2 md:block  md:w-1/3 lg:w-1/5   sm:border-r sm:border-zinc-700 '>
                            {/* <ChatList chats={sampleChats} chatId={1} /> */}
                            <div className='overflow-y-auto gap-2 flex flex-col h-[calc(100vh-5rem)] pr-2 custom-scrollbar '>
                                <ChatBoxList
                                    chats={sampleData}
                                    chatId={chatId}
                                    newMessagesAlert={[
                                        {
                                            chatId: chatId,
                                            count: 2,
                                        },
                                    ]}
                                    onlineUsers={[3,]}
                                />
                            </div>
                        </div>
                        <div className='flex flex-col w-full p-2 md:w-2/3 lg:w-3/5 md:border-r md:border-zinc-700  '>
                            <WrappedComponent {...props} />
                        </div>
                        <div className='hidden p-2 lg:block lg:w-1/5 '>
                            <ProfileInfo />
                        </div>
                    </div>
                </div>

            </>
        )
    }
    return ComponentWithLayout;
}
export default AppLayout;