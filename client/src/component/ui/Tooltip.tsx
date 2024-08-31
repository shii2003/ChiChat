import React from 'react';

type TooltipProps = {
    text: string,
};

const Tooltip: React.FC<TooltipProps> = ({ text }) => {

    return (
        <div className='absolute left-1/2 transform -translate-x-1/2 translate-y-full  bg-zinc-800 text-white text-s rounded py-0.5 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10'>
            <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 bg-zinc-800 opacity-100 w-2 h-2 rotate-45"></div>
            {text}
        </div>
    )
}
export default Tooltip;