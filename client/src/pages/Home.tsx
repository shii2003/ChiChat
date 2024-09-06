import React from 'react';
import AppLayout from '../component/layout/AppLayout';
import { LuMessagesSquare } from "react-icons/lu";


const Home: React.FC = () => {

    return (
        <div className='text-white flex justify-center p-10 mt-10  gap'>
            <div className='flex flex-col gap-4'>
                <LuMessagesSquare size={100} className='text-cyan-200' />
                <span className='text-2xl font-bold'>
                    Welcome to ChitChat.com!!
                </span>
                <span className='text-xl font-semibold'>
                    start connecting with people....
                </span>
            </div>


        </div>
    )
}
const WrappedHome = AppLayout(Home);

export { Home };
export default WrappedHome;
