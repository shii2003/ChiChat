import React, { Suspense, useState } from 'react';
import { FiLogOut } from "react-icons/fi";
import { RxAvatar } from 'react-icons/rx';
import { IoMenuSharp } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import ImageLoader from '../../utils/ImageLoader';
import SearchBar from '../ui/SearchBar';
import Tooltip from '../ui/Tooltip';
import MobileNavbar from './MobileNavbar';


const Navbar: React.FC = () => {

    const navigate = useNavigate();

    return (
        <div className='flex fixed w-full top-0 left-0  flex-col gap-1 z-20'>
            <div className="h-20 bg-zinc-800 border border-zinc-700 text-white flex items-center justify-between px-4">
                <div className="flex items-center">
                    <ImageLoader src='/chat-icon.svg' alt='Logo' className='h-full  w-full ' />
                    <div className="text-xl font-bold ml-4">ChitChat.com</div>
                </div>
                {/* To be Displayed on medium screens and above */}
                <div className='hidden md:flex items-center'>
                    {/* Search Icon */}
                    <div className=''>
                        <SearchBar />
                    </div>
                </div>
                <div className="hidden md:flex items-center gap-2">
                    {/* Profile Button */}
                    <div className=" relative group  ">
                        <button className="text-white px-4 py-2 rounded">
                            <RxAvatar className=" text-slate-200" size={30} />
                        </button>
                        <Tooltip text='profile' />
                    </div>
                    {/* Settings Button */}
                    <div className=" relative group  ">
                        <button className="text-white px-4 py-2 rounded">
                            <IoSettingsOutline className=" text-slate-200" size={28} />
                        </button>
                        <Tooltip text='settings' />
                    </div>

                    {/* LogOut Button */}
                    <div className='relative group'>
                        <button className=" text-white px-4 py-2 rounded">
                            <FiLogOut className="mr-2  text-slate-200" size={25} />
                        </button>
                        <Tooltip text='logout' />
                    </div>

                </div>
                {/* To be displayed on small screens */}
                <div className='md:hidden'>
                    <MobileNavbar />
                </div>
            </div>
            <div className='md:hidden p-2'>
                <SearchBar />
                <div className='my-2 h-px bg-zinc-600' />
            </div>
        </div>
    );
}

export default Navbar;