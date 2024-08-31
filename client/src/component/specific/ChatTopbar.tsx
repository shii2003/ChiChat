import React from 'react';

// type ChatTopbarProps = {

// };

const ChatTopbar: React.FC = () => {

    return (
        <div className='flex   items-center  p-2 gap-3 border-b border-zinc-700 '>
            <div className='w-8 h-8 rounded-full   overflow-hidden'>
                <img
                    src='https://img.freepik.com/free-vector/hand-drawn-side-profile-cartoon-illustration_23-2150503812.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1724025600&semt=ais_hybrid'
                    alt='ProfilePicture'
                    className='h-full w-full'
                />
            </div>
            <div className='font-bold text-xl'>
                name
            </div>
            <div className='text-white text-sm   p-1 px-3 rounded-full bg-opacity-20 bg-blue-300 border border-cyan-200'>
                test@company.com
            </div>
        </div>
    )
}
export default ChatTopbar;