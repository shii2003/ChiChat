import React from 'react';
import { MdModeEdit } from "react-icons/md";

type ProfileInfoProps = {
    profilePicture?: string;
    name: string;
    email: string;
    bio?: string;
};

const DEFAULT_PROFILE_PICTURE = 'https://i.pinimg.com/236x/6e/f4/ca/6ef4caa2da03b1fb9e4a00563c76ef5a.jpg';
const DEFAULT_BIO = "let's connect"

const ProfileInfo: React.FC<ProfileInfoProps> = ({ profilePicture = DEFAULT_PROFILE_PICTURE, name = "Yourname", email = "name@company.com", bio = DEFAULT_BIO }) => {

    return (
        <div className='flex flex-col  items-center p-2  gap-3 rounded-md  h-full  '>
            <div className=' text-white border-b border-zinc-700 w-full flex justify-center pb-2 text-2xl font-bold mb-4' >
                Your Profile
            </div>
            <div className='h-25 w-25 rounded-full overflow-hidden border-4 border-cyan-200'>
                <img
                    src={profilePicture}
                    alt='Profile'
                    className='h-full w-full object-cover'
                />
            </div>
            <div className='flex flex-col  text-white gap-4  rounded-md p-2 '>
                <div className='flex  justify-center flex-col gap-2'>
                    <div className='flex justify-between'>
                        <span className='text-sm text-slate-400'> name
                        </span>
                        <MdModeEdit className='text-blue-500' />
                    </div>
                    <span className=''>{name}</span>
                </div>
                <div className='flex  justify-center flex-col gap-2'>
                    <div className='flex justify-between'>
                        <span className='text-sm text-slate-400'> email
                        </span>
                        <MdModeEdit className='text-blue-500' />
                    </div>
                    <span>{email}</span>
                </div>
                <div className='flex  justify-center flex-col gap-2'>
                    <div className='flex justify-between'>
                        <span className='text-sm text-slate-400'> bio
                        </span>
                        <MdModeEdit className='text-blue-500' />
                    </div>
                    <span>{bio}</span>
                </div>


            </div>

        </div>
    )
}
export default ProfileInfo;